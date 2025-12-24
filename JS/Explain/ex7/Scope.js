// Scope = global scope = is there a varibal out of func you can use the varible where you want in code. he is where things exist

const appName = "ScopeApp"; // Global varible

function printAppName() {
    console.log("inside func, appName =", appName);
    // global can access to appName 
}
printAppName();



function functionScopeDemo() {
    const secret = "i live only inside functionScopeDemo";
    console.log("inside function,secret", secret);
}
functionScopeDemo();
console.log(secret); // local cant define this varible from inside because its not global (cant access inside func)

// global = its like a big thing (calling varible out of the func)

// Block Scope
function blockScope() {
    if (ture) {
        var x = "i am var (function-scoped)"
        let y = "i am let (block-scoped)";
        const z = "i am const (block-scoped);"
        console.log(y);// we accessed from inside block scope
    }
    // between the {} its block scope
    console.log("x =", x);// var is func scoped that can access and ignore the scope that she's in and work normal

    // console.log("y=",y);// undefined because cant access to y from block scope

    // console.log("z=", z);// same thing for z

    // let & const cant access from inside the block scope
}
blockScope();


//! var = ignore and unexpected behavior, js not connect what is happend inside var (not using var)


function loopScope() {
    for (let i = 0; i < 3; i++) {
        console.log("inside loop i", i);
    }
    // console.log("outside loop i Not Working");
}
loopScope();

// Scope: Where is the eliment are placed

const name = "Global_Name";

function shadowDemo() {
    const name = "Local_Name";
    console.log("Inside shadowDemo, name = ", name);// Here print Local
}
shadowDemo();
console.log("ignore the local he take global", name);// print the global 
