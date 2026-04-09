// he is a method sending request from API and for return
// fetch work with promise because he need time to response
fetch("https://api.example.com/users/1")// /1 -> first user
    .then((response) => response.json()) // here when we write json he return the first user only
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

//json -> he is a format we write it to work like in browsing