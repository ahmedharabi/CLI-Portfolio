import {useState} from "react";

export default function Terminal(){
    const [commandStack,updateCommandStack]=useState([]);
    function handleEnter(event){
        if(event.key==="Enter" ){
            updateCommandStack([...commandStack,"AhmedHarabi@portfolio:~$ "+ event.target.value]);
            event.target.value=""

        }
    }

    return(
        <div className="window">
            <ul>
                {commandStack.map((command)=><li>{command}</li>)}
                <li>AhmedHarabi@portfolio:~$ <input onKeyDown={handleEnter} type="text"/> </li>
            </ul>
        </div>
    )
}