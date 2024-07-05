import {useState} from "react";

export default function Terminal(){
    const availableCommands={"help":"Available commands:\n" +
            "- help: List available commands\n" +
            "- about: Learn more about me\n" +
            "- projects: See my projects\n" +
            "- skills: View my skills\n" +
            "- contact: Get my contact information\n" +
            "- clear: Clear the terminal\n",
        "projects":"Here are some of my recent projects:\n" +
            "- Project1: A brief description of the first project.\n" +
            "- Project2: A brief description of the second project.\n" +
            "- Project3: A brief description of the third project.\n"
        ,"skills":"My skill set includes:\n" +
            "- JavaScript (React, Node.js)\n" +
            "- HTML & CSS\n" +
            "- Python\n" +
            "- Git & GitHub\n" +
            "- DevOps (basic knowledge)\n"
        ,"about":"I am a passionate software developer with a focus on full-stack web development. I enjoy creating interactive and user-friendly applications.\n"
    ,"contact":"You can reach me at:\n" +
            "Email: your.email@example.com\n" +
            "LinkedIn: linkedin.com/in/yourprofile\n"};
    const commandList=["help","contact","about","skills","projects"];



    const [commandStack,updateCommandStack]=useState([]);
    function handleEnter(event){
        if(event.key==="Enter" ){
            //updateCommandStack([...commandStack,"AhmedHarabi@portfolio:~$ "+ event.target.value]);
            if(commandList.indexOf(event.target.value)>-1){
                updateCommandStack([...commandStack,"AhmedHarabi@portfolio:~$ "+ event.target.value,<pre>{availableCommands[event.target.value]}</pre>])
            }
            else {
                updateCommandStack([...commandStack,"AhmedHarabi@portfolio:~$ "+ event.target.value,"Command not found. Type `help` for a list of available commands.\n"])
            }
            event.target.value=""

        }
        else if(event.key==="ArrowUp"){
            event.target.value=commandList.at(0);
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