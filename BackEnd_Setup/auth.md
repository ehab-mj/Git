1. download copilot in vs code
if login from google -> free chat with copilot

2. **Auth**
HTTP -> Forget data
HTTP = amnesia فقدان ذاكره
example -> home page -> clicked on product -> every req doesnt saved he has no memory for user

Auth Giving HTTP Memory

what break without Auth:
. No protection
. No ownership -> anyone can do CRUD

AUTHEN VS AUTHOR
. Authen -> Who are you -> Logging + password
. Author -> What -> what role you can do 

**For more Secure**
MD5 hashing
. we use library for saving the password
<problem
MD5 -> hackers knows how to hack MD5 hash

**Cookies**
Text File in browser saving data -> saving id, payment
. when user enters website he sees flag and giving his id
. every person enters cookie can see all the id
<problem
hackers can hack the id and make it admin

<sloving
sessions -> any user accept cookie it will be added to session
example -> party limited ticket access
<the flow:>
- user doing register (passowrd hash doing it in scema model) -> 
- login -> bcrypt.compare() ->
- memory for user sessin_abc123 -> {userId: - 42, loggedIn: true} ->
- (sending it to cookie) -> 
- after doing session -> 
- we do connect.sid=abc123 ->
- then authomaticlly attaches the cookie -> req.session.userId is available

session not used there a replacment 

this method is middleware -> it see if it allows before login 

app.use(session({
    secret: ""
    signs the cookie to not be forget(random string)

    resave: false
    if there is nothing change dont save

    saveUninitialized: false
    if the user only preview without login no need do save he's a guest

    cookie: {
        httpOnly: true
        only mean only req if there any script he cant read it (secure from hackers)

        secure: false
        start false after do production it will be HTTPS

        maxAge: false
        order of seasion 24 * 60 * 60 = 1 day
        we use for if the user is not doing anything or forget his pc open for one day i will be reask him to do login after 1 day 
    }
    text file in browser key: value
}))

in Post we do compare -> if the same user and password it will access to user enter 

**8.4.26 -> 6:20**

**JWT -> TOKEN** -> three pieces =
Header = algrorithm used, 
Payload = userId, role, email data but not passowrd data, 
Signture = not hacked or something proves its real

JWT.verify() -> checks the token


6:35+
First step do auth in code:
1. We Take Passowrd -> bcrypt
2. in Postman -> User data name, email, password -> hashed the password
3. routes -> authRoutes.js
import export -> we need it for router

last step protected route -> middleware -> verify = checks from sign (jwt.sign (token))
<Token (not cookie) is saving in headers