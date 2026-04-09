function login(username, password, callback) {
    setTimeout(() => {
        const token = "TOKEN_ABC_123";
        callback(token);
    }, 1000);
}

function getProfile(token, callback) {
    setTimeout(() => {
        const user = { id: 7, name: "Dania" };
        callback(user);
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        const posts = [
            { id: 101, title: "My first post" },
            { id: 102, title: "Another post" },
        ];
        callback(posts);
    }, 1000);
}

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

// promise
getUser()
    .then((user) => getProfile(user.id))
    .then((profile) => getPosts(profile.id))
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.error(error);
    });

console.log("Start");

const promise = new promise


// promise chaining is problem -> .then .then.... it hard for devoplper debug

// there is sugar syntac -> async await
function normalFunc() {
    return 5;
}
const result = normalFunc();
console.log(result);

// VS 

async function asyncFunc() {
    return 5;
}
console.log(asyncFunc()); // return promise
// every func when i put async it return promise

