import { useEffect, useState } from "react";

export default function Generate(){
    const [pass, setPass] = useState("");
    const [len, setLen] = useState(8);
    const [isCharAllowed, setIsCharAllowed] = useState(false);
    const [isNumAllowed, setIsNumAllowed] = useState(false);

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
    <div className="generator-container">
      <h1 className="generator-title">Password Generator</h1>

      <div className="generator-output">
        <input
          type="text"
          value={pass}
          placeholder="Password"
          readOnly
          className="password-field"
        />
      </div>

      <div className="generator-control">
        <input
          type="range"
          value={len}
          min={8}
          max={100}
          onChange={(e) => setLen(parseInt(e.target.value))}
          className="length-slider"
        />
        <label className="control-label">Length : {len}</label>
      </div>

      <div className="generator-control">
        <input
          type="checkbox"
          checked={isNumAllowed}
          onChange={() => setIsNumAllowed(prev => !prev)}
          className="checkbox-input"
        />
        <label className="control-label">Numbers</label>
      </div>

      <div className="generator-control">
        <input
          type="checkbox"
          checked={isCharAllowed}
          onChange={() => setIsCharAllowed(prev => !prev)}
          className="checkbox-input"
        />
        <label className="control-label">Special Characters</label>
      </div>
    </div>

    )
}