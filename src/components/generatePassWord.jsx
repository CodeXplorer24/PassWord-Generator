import { useEffect, useState } from "react";

export default function Generate(){
    const [pass, setPass] = useState("");
    const [len, setLen] = useState(8);
    const [isCharAllowed, setIsCharAllowed] = useState(false);
    const [isNumAllowed, setIsNumAllowd] = useState(false);

    useEffect(() => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let generatedPass = ""
        if(isCharAllowed){str += "@#$%^&*()_~"}
        if(isNumAllowed) {str += "0123456789"}
        for(let i = 1; i <= len; ++i){
            let randNo = Math.floor(Math.random()*str.length)
            generatedPass += str.charAt(randNo);
        }
        setPass(generatedPass);
    }, [len,isNumAllowed,isCharAllowed]);

    return (
        <div>
            <h1>PassWord Generator</h1>
            <div>
                <input
                type="text"
                value={pass}
                placeholder="PassWord"
                readOnly
                />
            </div>
            <div>
                <input 
                type="range"
                value={len}
                min={8}
                max={100}
                onChange={(e) => {setLen(e.target.value)}}
                />
                <label htmlFor="length">Length : {len}</label>
            </div>
            <div>
                <input 
                type="checkbox"
                defaultChecked = {isNumAllowed}
                onChange={() => {setIsNumAllowd(prev => !prev)}}
                />
                <label htmlFor="Number">Numbers</label>
            </div>
            <div>
                <input 
                type="checkbox"
                defaultChecked = {isCharAllowed}
                onChange={() => {setIsCharAllowed(prev => !prev)}}
                />
                <label htmlFor="Characters">Characters</label>
            </div>
        </div>
    )
}