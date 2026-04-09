// props -> accept data

// 5:10

// using props - منمرر البروب من ل:
// App
// └──
//     Layout
//       └──
//           Navbar
//            └──
//                UserMenu

// زي مثال الورثه
// Props Drilling: when data is passed thorugh mulitple component that do not need it

//! the problem is wasted and component become
//! - polluted confuses future
//! - hard to reuse
// like in global data:
// User  ●   Theme  ●   Language  ●   Permissions  ●   Notifications

// 5:25
//* The fixing
//* Context -> global data if there more than component i put them, Like a box puting the component
// حللت من تمرير من اكثر من كومبوننت لكومبوننت

//** useContext -> Hook */
// core idea:
// create Context
// provide Context (using)
// consume Context (reuse)

// Firt Step
import { createContext } from "react";
//  This  creates  a  context  object  export 
const UserContext = createContext(null)
//* createContext(null) creates container

// 5:30 ... 5:55
// step 2:
// providing he gives data
// method from UserContext 

//from the container want to do provider
import { UserContext } from "./UserContext"; import Layout from "./Layout";
function App() {
    const user = "Dania";
    return (
        <UserContext.Provider value={user}>
            {/* Parent: */}
            <Layout />
        </UserContext.Provider>);
}
export default App;

// provider -> مانح

// مانح لل user
<UserContext.Provider value={user}>
    <Navbar />

</UserContext.Provider>

// reuse the user
const user = useContext(UserContext);

//* what he does:
// injects data into component tree
// inject -> بحقن

//*useEffect fixed -> async and waiting make it work once
//*useContext fixed -> cleaned component tree while giving provider fixed a global props and props drilling

//* Context not for everything like:
// local state
// if component work for specific logic
// if i want to change state not doing useContext

//* */ provider rules:
// useContext(UserContext); -> return null must add provider
// dont create context inside components

//! mistakes
// forgeting provider
// overusing context -> hard to debug apps

// the idea how to put it and how to take it
// provider value = {{name: name}}
// const context = useContext{UserContext}

// When should i use it:
// data is shared
// many components
// it change rarely

//* localStorage: saving inside storage
//* needs getItem, SetItem
//* to handling using useEffect