import morgan from "morgan";
// ("") -> great devolper 
// short -> different format 
const logger = morgan("dev")

// const logger = (req, res, next) => {
//     console.log(`${req.method}${req.url}`);
//     next();
// };

export default logger;

// logger or midlleware morgan -> perfect system from hackers 
// npm i morgan