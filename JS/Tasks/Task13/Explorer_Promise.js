// function fetchGitHubUser(ehab) {
//     fetch(`https://api.github.com/users/${ehab}`)
//         .then((res) => {
//             if (!res.ok) {
//                 return Promise.reject("User not found")
//             }
//             return res.json();
//         })
// }
// fetchGitHubUser();

// 1.
fetch("https://api.github.com/users/ehab-mj") // this is promise
    // promise is resolve and reject
    // .then = callback
    .then(res => res.json()) // -> .then(res => console.log(res.json())) -> Promise <pending>. we transformed the data to json format
    // response the result from api
    .then(res => console.log(res)) // the second then is for response for revial the result for first then (here in second then we calling for a func)
    .catch(error => console.log(error))

// 2.
fetch("https://api.github.com/users/ehab-mj/repos")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(rej => console.log(rej))

// 3.
fetch("https://api.github.com/repos/ehab-mj/EhabMajdobProject/languages")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(rej => console.log(rej))

// in try await

// when we wtite async func -> it will be a promise func
async function fetchRepoLanguages() {
    try {
        // write await -> we wait for this fitch to work
        const res = await fetch("https://api.github.com/repos/ehab-mj/EhabMajdobProject/languages")
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchRepoLanguages();