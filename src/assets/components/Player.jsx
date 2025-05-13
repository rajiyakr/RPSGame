import { useState } from "react";
const Player = ({choice, title, score}) =>{
    return(
        <>
        <div className="player">
            <button>{score}</button>
                    <h2>{title} choice</h2>
                    <h1>{choice}</h1>

                </div>
        </>
    )
}
export default Player