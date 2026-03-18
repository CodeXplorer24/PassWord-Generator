import { useState } from "react";

export default function Generate(){
    const [pass, setPass] = useState("");
    
    function handlePassGen (){
        const passLen = 8;
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let password = "";
        for(let i = 0; i < passLen; ++i){
            const randNo = Math.floor(Math.random() * alphabet.length);
            password += alphabet[randNo];
        }
        setPass(password);
        console.log(password);
        console.log(pass);
        
    }
    return (
        <div>
            <h1 style={{color : "red"}}>Password Generator</h1>
            <button onClick={handlePassGen}>Generate</button>
            <h2>Generated Password : {pass}</h2>
        </div>
    )
}