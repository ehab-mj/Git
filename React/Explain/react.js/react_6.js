//* Routers

//* React Do:
// manage pages
// manage urls
// manage navigation

//* SPA -> single page applecation
// means: react controliing the page dynamically, and the page never reloads

//* Old way:
function App() {
    const [page, setPage] = useState("home");
    if (page === "login") { return <Login />; }
    if (page === "profile") { return <Profile />; }
    return <Home />;
}

//React = library

//* React Router DOM
// path: "/" = root
// first page we enter

// Layout -> الصفحات الثابته

//* Outlet: بتمثل كل الشيلدرين الي بكون موجود بللاي اوت

//* useNavigate:
// he holding the hook when the user click go to login

//* useParams:
// for every product thier is a details
// but there is no component for each product
// we want to show product details by id

// 1. we do map
// 2. Link to={params} -> we should have:
// produts -> the path: /products
// productsDetails -> the path: /products/:id
// now in link to={`products/${product.id}`}
// 3. in productsDetails we use useParams
const { id } = useParams();


//* NavLink -> i can do a style or class