Step 1:
1. cd backend
2. npm install express cors
3. Create server.js
4. Run backend -> node server.js = Server running on port 5000
4. Test it in browser 

Step 2:
1. cd frontend -> npm run dev
2. In HomePage.jsx -> inside useEffect -> fetch("http://localhost:5000/api/test")
3. Run frontend -> npm run dev -> if cors error -> app.use(cors());
4. if backend not running -> node server.js

Step 3:
Update backend
1. in server.js:
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.post("/api/send", (req, res) => {
  const { name } = req.body;

  console.log("Received from frontend:", name);

  res.json({
    success: true,
    message: `Hello ${name}, backend received your data`
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

2. After Changing backend we run again -> node server.js

Step 4:
Update frontend
1. in HomePage:
import { useState } from "react";

export default function HomePage() {
    const [name, setName] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    const sendData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })
            });

            const data = await res.json();
            setResponseMsg(data.message);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h1>Send Data To Backend</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={sendData}>Send</button>

            <p>{responseMsg}</p>
        </div>
    );
}

2. When type Ehab and send -> frontend sends = { "name": "Ehab" }
3. backend receives it in -> req.body
4. backend sends back:
{
  "success": true,
  "message": "Hello Ehab, backend received your data"
}
5. frontend shows it on screen

**Very Important idea**
in backend:
**app.use(express.json());** -> allows express to read JSON from frontend

in frontend:
headers: {
  "Content-Type": "application/json"
} ->
tells backend that you are sending JSON 

this line: **body: JSON.stringify({ name })** -> sends the data.
if not -> 
1. check Backend is running on port 5000
2. Frontend fetch URL -> http://localhost:5000/api/send
3. restart backend after editing server.js -> **app.use(express.json());**