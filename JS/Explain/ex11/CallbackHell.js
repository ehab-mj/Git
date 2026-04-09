// token for login

// commnet take id and some a callback func

// 1) Login: returns token
function login(username, password, callback) {
    setTimeout(() => {
        // (Pretend) if credentials correct → token
        const token = "TOKEN_ABC_123";
        callback(token);
    }, 1000);
}

// 2) Get profile: needs token
function getProfile(token, callback) {
    setTimeout(() => {
        const user = { id: 7, name: "Dania" };
        callback(user);
    }, 1000);
}

// 3) Get posts: needs userId
function getPosts(userId, callback) {
    setTimeout(() => {
        const posts = [
            { id: 101, title: "My first post" },
            { id: 102, title: "Another post" },
        ];
        callback(posts);
    }, 1000);
}

// 4) Get comments: needs postId
function getComments(postId, callback) {
    setTimeout(() => {
        const comments = [
            { id: 9001, text: "Nice post!" },
            { id: 9002, text: "Love it!" },
        ];
        callback(comments);
    }, 1000);
}

console.log("---- Callback Hell Start ----");

login("dania", "1234", (token) => {
    console.log(" Logged in, token:", token);

    getProfile(token, (user) => {
        console.log(" Profile:", user);

        getPosts(user.id, (posts) => {
            console.log(" Posts:", posts);

            getComments(posts[0].id, (comments) => {
                console.log(" Comments for first post:", comments);

                console.log("---- Callback Hell End ----");
            });
        });
    });
});

// this way is too slow and unreadbl there a way to write it mush easy -> using promise

//! Promise -> is an Object with value still not exist yet, it will exist in future it may succeed or fail
// “I will give you a result later.”
// وعد بأن العملية ستنجح أو ستفشل لاحقًا.
// promise have 3 propites -> pending, resolve, reject

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 1000);
});
// new Promise creates a promise (new Promise we used this in class)
// resolve is called when the operation succeeds
// reject is called when the operation fails
// The promise starts in the pending state

//!  Consuming a Promise with .then()
// To use the result of a promise, we attach a .then() method.
// when the promise is resolve:
promise.then((result) => {
    console.log(result);
});
// It runs after the promise is fulfilled ويستمر ذلك بعد الوفاء بالوعد. (work after the promise is done)
// It receives the resolved value
// It replaces the need for a callback
//! Handling Errors with .catch()
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

//! Why this is better than callbacks
// Errors are handled in one place
// No deeply nested error checks

//!  Rewriting a Callback Example Using Promises
// Callback version (Callback Hell style)
getUser((user) => {
    getProfile(user.id, (profile) => {
        getPosts(profile.id, (posts) => {
            console.log(posts);
        });
    });
})

// Promise version (Flat & Readable)
getUser()
    .then((user) => getProfile(user.id))
    .then((profile) => getPosts(profile.id))
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.error(error);
    });
// Why This Is Better:
// Easy to read , No deep nesting