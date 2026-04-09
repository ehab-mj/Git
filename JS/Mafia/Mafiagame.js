const API_BASE = "https://69651b30e8ce952ce1f42fef.mockapi.io/Mafia/";

// const playerName = document.getElementById("playerName");
// const isAlive = document.getElementById("Alive");
// const playersGrid = document.getElementsByClassName("players-grid");

const statusEl = document.getElementById("status");
const playersListEl = document.getElementById("playersList");
const playerNameEl = document.getElementById("playerName");
const btnGet = document.getElementById("btnGet");
const btnSubmit = document.getElementById("btnSubmit");
const btnCancel = document.getElementById("btnCancel");
const btnEndVoting = document.getElementById("btnEndVoting");
const btnReset = document.getElementById("btnReset");

function showStatus(msg, isError = false) {
    statusEl.textContent = msg;
    statusEl.style.color = isError ? "darkred" : "#333";
}

function clearInput() {
    playerNameEl.value = "";
    playerNameEl.focus();
}

function enableAddMode() {
    editingId = null;
    btnSubmit.textContent = "POST Add Player";
    btnCancel.classList.add("hidden");
    playerNameEl.placeholder = "Enter player name";
    clearInput();
}

function enableEditMode(id, name) {
    editingId = id;
    btnSubmit.textContent = "Save";
    btnCancel.classList.remove("hidden");
    playerNameEl.value = name;
    playerNameEl.focus();
}

async function fetchJson(url, options = {}) {
    const res = await fetch(url, {
        ...options,
        headers: { "Content-Type": "application/json", ...options.headers },
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status} - ${res.statusText}`);
    }

    return res.json();
}

// ────────────────────────────────────────────────
//  CORE FUNCTIONS
// ────────────────────────────────────────────────

async function loadPlayers() {
    try {
        showStatus("Loading players...");
        const players = await fetchJson(API_BASE);
        renderPlayers(players);
        showStatus(`Loaded ${players.length} players`);
    } catch (err) {
        showStatus("Error loading players: " + err.message, true);
        playersListEl.innerHTML = "<p style='color:red'>Failed to load players</p>";
    }
}

function renderPlayers(players) {
    playersListEl.innerHTML = "";

    if (players.length === 0) {
        playersListEl.innerHTML = "<p>No players yet. Add someone!</p>";
        return;
    }

    players.forEach(p => {
        const card = document.createElement("div");
        card.className = `player-card ${!p.alive ? "dead" : ""}`;

        card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Alive: ${p.alive}</p>
      <p>Votes: ${p.votes}</p>

      <div class="card-actions">
        <button class="vote-btn"    ${!p.alive ? "disabled" : ""}>Vote</button>
        <button class="edit-btn">Edit</button>
        <button class="eliminate-btn">Eliminate</button>
        <button class="danger delete-btn">Delete</button>
      </div>
    `;

        // Event listeners
        card.querySelector(".vote-btn").onclick = () => voteForPlayer(p.id);
        card.querySelector(".edit-btn").onclick = () => enableEditMode(p.id, p.name);
        card.querySelector(".eliminate-btn").onclick = () => eliminatePlayer(p.id);
        card.querySelector(".delete-btn").onclick = () => deletePlayer(p.id);

        playersListEl.appendChild(card);
    });
}

async function addOrUpdatePlayer() {
    const name = playerNameEl.value.trim();

    if (name.length < 2) {
        showStatus("Name must be at least 2 characters", true);
        return;
    }

    try {
        showStatus(editingId ? "Updating..." : "Adding player...");

        if (editingId) {
            // PUT
            await fetchJson(`${API_BASE}/${editingId}`, {
                method: "PUT",
                body: { name }
            });
            showStatus(`Updated ${name} ✓`);
        } else {
            // POST
            await fetchJson(API_BASE, {
                method: "POST",
                body: { name, alive: true, votes: 0 }
            });
            showStatus(`Added ${name} ✓`);
        }

        enableAddMode();
        await loadPlayers();
    } catch (err) {
        showStatus("Error saving player: " + err.message, true);
    }
}

async function voteForPlayer(id) {
    try {
        const players = await fetchJson(API_BASE);
        const player = players.find(p => p.id === id);
        if (!player || !player.alive) return;

        await fetchJson(`${API_BASE}/${id}`, {
            method: "PUT",
            body: { votes: player.votes + 1 }
        });

        showStatus(`Voted for ${player.name}`);
        await loadPlayers();
    } catch (err) {
        showStatus("Error voting: " + err.message, true);
    }
}

async function eliminatePlayer(id) {
    try {
        await fetchJson(`${API_BASE}/${id}`, {
            method: "PUT",
            body: { alive: false }
        });
        showStatus("Player eliminated");
        await loadPlayers();
    } catch (err) {
        showStatus("Error eliminating: " + err.message, true);
    }
}

async function deletePlayer(id) {
    if (!confirm("Really delete this player permanently?")) return;

    try {
        await fetchJson(`${API_BASE}/${id}`, { method: "DELETE" });
        showStatus("Player deleted");
        await loadPlayers();
    } catch (err) {
        showStatus("Error deleting: " + err.message, true);
    }
}

async function endVoting() {
    try {
        showStatus("Processing voting round...");
        const players = await fetchJson(API_BASE);
        const alive = players.filter(p => p.alive);

        if (alive.length === 0) {
            showStatus("No alive players left", true);
            return;
        }

        // Find max votes
        let maxVotes = -1;
        const candidates = [];

        alive.forEach(p => {
            if (p.votes > maxVotes) {
                maxVotes = p.votes;
                candidates.length = 0;
                candidates.push(p);
            } else if (p.votes === maxVotes) {
                candidates.push(p);
            }
        });

        if (candidates.length === 0) {
            showStatus("No votes this round", true);
            return;
        }

        // Pick random if tie
        const toEliminate = candidates[Math.floor(Math.random() * candidates.length)];

        // Eliminate
        await fetchJson(`${API_BASE}/${toEliminate.id}`, {
            method: "PUT",
            body: { alive: false }
        });

        // Reset all votes
        await Promise.all(
            players.map(p =>
                fetchJson(`${API_BASE}/${p.id}`, {
                    method: "PUT",
                    body: { votes: 0 }
                })
            )
        );

        showStatus(`Eliminated: ${toEliminate.name} (${toEliminate.votes} votes)`);
        await loadPlayers();
    } catch (err) {
        showStatus("Error ending round: " + err.message, true);
    }
}

async function resetRound() {
    if (!confirm("Reset round? All players become alive, votes → 0")) return;

    try {
        showStatus("Resetting round...");
        const players = await fetchJson(API_BASE);

        await Promise.all(
            players.map(p =>
                fetchJson(`${API_BASE}/${p.id}`, {
                    method: "PUT",
                    body: { alive: true, votes: 0 }
                })
            )
        );

        showStatus("Round reset ✓");
        await loadPlayers();
    } catch (err) {
        showStatus("Error resetting round: " + err.message, true);
    }
}

// ────────────────────────────────────────────────
//  EVENT LISTENERS
// ────────────────────────────────────────────────

btnGet.onclick = loadPlayers;
btnSubmit.onclick = addOrUpdatePlayer;
btnCancel.onclick = enableAddMode;

btnEndVoting.onclick = endVoting;
btnReset.onclick = resetRound;

// Enter key support in input
playerNameEl.onkeydown = e => {
    if (e.key === "Enter") {
        e.preventDefault();
        addOrUpdatePlayer();
    }
};

// Initial load (optional)
loadPlayers();