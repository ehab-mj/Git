//! Enum: more close to interface
// stand for ineumoration
enum Direction {
    // write the type
    Created = 10, // /"created"
    Shipped,
    Delivered,
    Canelled
}
// it do it like array

//! if we dont put value = it will do it in indexes

// type you want for OrderStatus
// let status: OrderStatus = OrderStatus.Created;
// we can access to types
// console.log(OrderStatus.Shipped);


//! Generics
// how to know datatype
//1:
//* function indentity(value) {
//*     return value
//* }
// we dont know what the value
//* console.log(indentity(5));
// the value we know is 5

// but when the app is getting bigger it will be a problem

//! the problem:
// we define the type to string but he is a number
const result = identity("hello")
result.toFixed(2)

//* Slove:
// any slove a showing problem
function identity(value: any): any {
    return value;
}
let result2 = identity("hello");
result.toFixed(2)

//! The Better Sloving is Gen Generics
// <T> -> function is generic Type -> i define the datatype and what the return
// value: T -> i tell what the type
// :T -> what type to return 
function identity2<T>(value: T): T {
    return value
}
const numberResult = identity2<number>(5)
// numberResult = 5
numberResult.toFixed(2)
const stringResult = identity2<string>("hello");
// generic not allowed toFixed in string
//! stringResult.toFixed(2)

// //* Generics with Arrays
// function firstNumber(arr: number[]): number | undefined {
//     return arr[0]; // first index
// }
// firstNumber(["a", "b", "c"])

// i tell the type when i call to the function
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0]
}
getFirst([1, 2, 3]);
getFirst([true, "Dania"]);

interface ApiResponse<T> {
    Data: T;
    success: boolean;
    message?: string;
}

interface User {
    Id: number;
    name: string;
}

const response: ApiResponse<User> = {
    Data: { Id: 1, name: "Ehab" },
    success: true,
};

function printUser(user: {
    name: string;
    age: number
}) {
    printUser({
        name: "ehab",
        age: 25,
    })
}

//* Omit -> type + key that i dont want it

interface User {
    Id: number;
    name: string;
    Email: string;
    password: string
}
// i want the type but no password
type publicUser = Omit<User, "password">
// if i dont need email
// type publicUser = Omit<User, "password" | "email">

// const user1: publicUser = {
//     Id: 1,
//     name: "ehab",
//     email: "ehab@gmail.com"
//     // didnt ask me for password
// }

//* Pick -> type + key that i want it

// what i need 
type createUser = Pick<User, "email" | "id" | "password">

const user2: createUser = {
    id,
    email,
    password,
}

//* Partial -> make all properties optinal
interface User3 {
    Id: number;
    name: string;
    email: string;
    password?: string;
    createdAt?: Date;
}

// make it all optinal
type optionalType = Partial<User3>
// all RequiredType
type RequiredType = Required<User3>

const user4: optionalType = {
}
const user7: optionalType = {
    // he ignore optinal types
    // in backend he create a new clone and make it all requerd
}


// promise should return string not number
const promise = new Promise((resolve, reject) => {
    resolve("Done");// resolve return type of the resolve is string
})
// he can return number
// const promise2 = new Promise<number>((resolve, reject) => {
//     resolve(3);// resolve return type of the resolve is string
// })

interface todo<T> {
    data: T
}
// type of prosmise is interface
const userPromise: Promise<todo> = new Promise((reslove) => {
    // data from interface
    reslove({
        data: "ehab"
    });
})

//* in React
//* 8:40+
// vite -> React -> Typescript -> no -> yes
//* UserCard.tsx
type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function loadTodos() {
            const data: Todo[] = [
                { Id: 1, title: "Ehab" },
                { Id: 2, title: "Ehab2" }
            ]
        }
    }, [])
}