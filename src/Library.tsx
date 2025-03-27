import { useState } from "react";
import User from "./User";

const Library = () => {
    const [user, setUser] = useState<User | null>(null); 
    const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data =>{
        setUser(data.results[0]);
        setLoading(false);
    })
    .catch(error => console.error("Error fetching user", error));
    };


    const fullName = `${user?.name?.first} ${user?.name?.last} `;

    return(
        <div className="container">
            <h1>{fullName}</h1>
            <img src={user?.picture.large} />
            <p>{user?.email}</p>
            <p>{user?.gender}</p>
            <br />
            <button onClick={fetchUser}>Get a new User</button>
        </div>
    )
}

export default Library;
