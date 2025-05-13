import { useState } from "react";
const Result = ({winner}) =>{
    return(
        <>
        <div className="result">
                {
                    winner && <h2>{winner} wins the game!</h2>
                }
                
            </div>
        </>
    )
}
export default Result