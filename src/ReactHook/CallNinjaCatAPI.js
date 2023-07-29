import {useEffect, useState} from "react";
import Axios from "axios";



export const CallNinjaCatAPI = () =>{
   const [catFetchData, setCatFetchData] = useState( []);
//https://api.agify.io/?name=rahul
    const getNinjaCatAPI = () =>{
        Axios.get("https://catfact.ninja/fact").then(response  => {
            setCatFetchData (response.data.fact)
            console.log("CallNinjaCatAPI Update one")
        })
    }
    useEffect( () =>{
        getNinjaCatAPI();
    }, [])

   // fetch("https://catfact.ninja/fact").then(response => response.json() ).then(data => console.log(data))

    return  (<div className="App"> <button onClick={getNinjaCatAPI}>Generate Cat Fact</button>
    <p>{catFetchData}</p></div>);
}

