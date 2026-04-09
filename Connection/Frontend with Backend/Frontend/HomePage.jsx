import { useEffect, useState } from "react";

export default function HomePage() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/test")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data.message);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Frontend</h1>
            <p>Backend says: {data}</p>
        </div>
    );
}