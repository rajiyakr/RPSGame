import { useState } from "react"
const Choices = ({choices,choiceHandler}) =>{
    return(
        <div className="choices">
                {
                    choices.map(choice => {
                        return <button onClick={() => choiceHandler(choice)} key={choice}>{choice}</button>
                    })
                }
            </div>
    )
}
export default Choices