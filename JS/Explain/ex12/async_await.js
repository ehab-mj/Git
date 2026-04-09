// jsonplaceholder ? async
// fetch(api url).then.catch

// if i want to wait for something i put await
// sugar syntax: 
async function getData() {
    const response = await fetch(); // saving data in respons then we reading to format json (word then = await)
    const data = await response.json();
    console.log(data);
}
getData();

// we transform to json to allow us to read it
fetch("")
    .then((res) => {
        return res.json();// reading in format json
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

// async await -> is a replacment for .then .then...

//! in try,  catch: 

async function TrygetData() {
    try {
        const response = await fetch(); // saving data in respons then we reading to format json (word then = await)
        const data = await response.json();
        console.log(data);
        // if there an error in code catch return me the error
    } catch (error) {
        console.log(error);
    }
}
TrygetData();
