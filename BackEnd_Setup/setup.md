npm init
server.js
/* npm init -y -> skip info 
yes -> package.json

npm i express

/node_modules -> big file cant upload it to github

**building first server:**
server.js / server.mjs -> module js

**1. first we need to import express**
to use import without requred
in package.json -> script: "type":"module"

clint sending -> req -> port(door) -> inside it there is API -> response

**2. make it in code:**
we create the port in server.js
to take data we write process

**3. if i want to see only home page**
- we make routes
- first we do home page path and we sending -> req,res
- any changes we did we must make ->restart to server
- we dont need to refrech every time for changes ->
  we install 
npm i nodemon = global -> we need to change in script in package.json -> script: {
    dev: "nodemon server.js"
}
- server.mjs -> type modual

**4. we use find to see status in mongodb in json format**
- we write the status:
res.status(200).json(user);
- we see it in log -> network


**5. middlewear -> like a police -> if i need you i get you if i dont need you i reject you** 
- it happen in the middle
app.use(express.json())
- must be on top
- check data on the endpoint
- use -> data must be in json format
- middlewear like a wall to get access -> 
if yes -> get access
if not -> 404

**6. .env**
- npm install dotenv 
- import
- after doing .env we do getigonre to vissble .env
.gitignore -> to be vissble in github
- import dotenv from "dotenv"
- working on port in .env on PORT 4000 OR 3000 if need it
const PORT = provess.env.PORT || 3000;
- to turn it on
dotenv.config();

**7. in Post**
- we need path then request in body
- after request need response


Query -> for search

**8. fs.readfile -> file system**
- its async function
- throw make for error is requered
- cancel single threads
- if there error shows else ..
- if i dont want overwrite -> fs.appendfile
- can make make directory -> fs.mkdir
- fs.stats -> file information
- fs.watch -> if the folder show the event
- fs.createReadStream -> for too big files
if i have logs -> saved in company system -> for each event it shows in the system


**in the app We Slice to files**

--1. Router
-  app.get("/", (req, res))
--2. Controller = Bussinis logic 
-  const newRecipe = req.body;

   console.log("new Recipe added");

   res.status(201).json({ message: "Recipe Added", recipe: newRecipe })

--3. Routs calling Controller
--4. MiddleWear -> Tooken 
--5. Config -> Database connecting
--6. data folder -> data of products/users

**Explaining**
express = framework -> works with inviromete called node.js that allows me to create server, endpoint, API and can handle with database using command -> npm init -> installing package.json = core for our app

**framework vs library**
framework -> اطار عمل -> tools, template of library, adding library -> مكتبه جاهزه

library -> مش اطار عمل -> no rules to make it work

**In Postman**
when i create a new element it added but not saved completly in the array
there is Database that saving out data called -> MongoDB SQL
-- MongoDB -> No SQL saving data using -> documents
-- In SQL the saving data using -> Tables
-- In Node.js i can use both data saving -> No SQL, SQL
If i use NO SQL i Connect -> MongoDB and i build something called MERN = MongoDB Express React Node.js
If i use SQL -> Postree

**Problem**
in mongodb we need type
sloving with ODM = layer

Scema = blueprint

**Connecting MongoDB**
in mongodb site DOCS menu we we see all the steps
What we Need to Connect:
1. Download library -> npm i mongodb
2. we write the Docs menu code in server.mjs -> changing in the code:
-- const uri -> getting the url from mongodb and past it and changing username & password
-* why async -> because we are grapping data it needs time
-- const client = new MongoClient(uri) => here we doing instans that we downloaded with mongodb
-- finally -> last thing when done what we see
-- we testing -> const database = client.db("tshirts") -> بتمثل ecommerce
-- const tshirts = database.collection("tshirts")
-- changing name -> const query = {name: "Classic Black Tshirt"}
-- return only 1 -> const tshirt = await tshirts.findOne(query)
await -> we wait till she return it

and then we see the out code connected to mongodb
we slice this code and put it in config file -> database.js

**MongoDB Realition**


**Password Hash creating**
8:00 - 6.4.26
register + login = post

we need to use pre save
userSchema.pre("save", async function (next))

if is edited or new:
if(!this.isModified("password")) 
return next()

if yes we do hash if not we dont do hash
const saltRounds = 12;

saltRounds = she do random(خربشه) then she go to next middleware 

this.password = await bcrypt.hash(this.password, saltRounds);


for login
email already exist
passowrd = password that i already have