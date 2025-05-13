import { useState } from "react"
import Choices from "./Choices";
import Result from "./Result";
import Player from "./Player";
const Game = () =>{
    const CHOICES = ["Rock", "Paper", "Sciccors"]
    const[humanChoice, setHumanChoice] =useState(null);
    const[systemChoice, setSystemChoice] =useState(null);
    const[humanScore, setHumanScore] =useState(0);
    const[systemScore, setSystemScore] =useState(0);
    const[winner,setWinner] = useState(null)
    const choiceHandler = (choice) =>{
        setHumanChoice(choice)
        
        let randomNumber = Math.floor(Math.random()*3)
        let systemRandomChoice = CHOICES[randomNumber]
        setSystemChoice(systemRandomChoice)
        findWinner(choice,systemRandomChoice)
    }
    const findWinner = (human, system) => {
        if(human===system){
            setWinner("null");
        }
        else if(
            human === "Rock" && system === "Sciccors" ||
            human === "Sciccors" && system === "Paper" ||
            human === "Paper" && system === "Rock" )
            {
            setWinner("human");
            setHumanScore(prev => prev + 1)
            }
        else{
            setWinner("system");
            setSystemScore(prev => prev + 1)
            }
    }
    console.log(`"human choice is" ${humanChoice}`)
    console.log(`"system choice is ${systemChoice}`)
    console.log(`"Winner is ${winner}`)
    return(
        <div className="game">
            <h1>RPS Game</h1>
            <div className="board">
                <Player title="Human" choice={humanChoice} score={humanScore}/>
                <Player title="System" choice={systemChoice} score={systemScore}/>
            </div>
            <Result winner={winner}/>
            <Choices choices={CHOICES} choiceHandler={choiceHandler}/>
        </div>
    )
}
export default Game