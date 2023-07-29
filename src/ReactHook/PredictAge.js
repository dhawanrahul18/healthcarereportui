import {useState} from "react";
import Axios from "axios";

export const PredictAge = () =>{
    const [age, setAge] = useState("")
    const [name, setName] = useState("")
    const [inputName, setInputName] = useState("")

    const predictAge = () => {

        Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
            console.log(response)
            setAge(response.data.age);
            setInputName(response.data.name)
            setName("");
            console.log(name)
        });

    }


    return(<div>
        <input name={name} type="text" onChange={(event) => setName(event.target.value)}/>
        <button onClick={predictAge}> Predict</button>
        <div> {inputName &&  <span> {inputName} </span>}  {age}</div>
    </div>)
}