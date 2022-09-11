import classes from "./polygon.css"
import Tiles from "../tiles/tiles.js"
import { useState } from "react"
import {Winner} from "../../winnerfunction"
import { Bot } from "../../winnerfunction"
import { Polygoncount } from "../../polygoncount"

function Polygon(props){
    const [polygon,setpolygon] = useState(Array(props.palygonValue).fill(null))
    const [Nextplayer1, setNextplayer1]= useState(true)
    const [step,setstep] = useState([])
    const [winnercount1, setwinnercount1] = useState(0)
    const [winnercount2, setwinnercount2] = useState(0)
    const calculateWinner = Winner(polygon)
    Polygoncount(polygon)
    const onclikhendler=(index)=>{
        if(props.swichbottest===false){
        const polygoncopy = [...polygon]
        if(Winner(polygon,index) || polygoncopy[index]) return
        polygoncopy[index] = Nextplayer1 ? 'x' : 'o'
        setpolygon(polygoncopy)
        setNextplayer1(!Nextplayer1)
        step.push(index)
        if (Winner(polygoncopy)==='x'){
            setwinnercount1(winnercount1+1)
        } else if (Winner(polygoncopy)==='o'){
            setwinnercount2(winnercount2+1)
        }
        } else{
        const polygoncopy = [...polygon]
        if(Winner(polygon,index) || polygoncopy[index]) return
        polygoncopy[index] = Nextplayer1 ? 'x' : 'o'
        setpolygon(polygoncopy)
        polygoncopy[Bot(polygoncopy,index)] = 'o'
        setpolygon(polygoncopy)
        if (Winner(polygoncopy)==='x'){
            setwinnercount1(winnercount1+1)
        } else if (Winner(polygoncopy)==='o'){
            setwinnercount2(winnercount2+1)
        }
      }
    }

    const NewGame =()=>{
        return(
            <div>
                <button onClick={()=>{setpolygon(Array(props.palygonValue).fill(null))}} className={classes.button}>Новая игра</button>
             </div>  
        )
    }
    function setStepfunc (){
        var polygoncopy = [...polygon]
        console.log(step[step.length-1])
        var rename = polygoncopy.splice(step[step.length-1],1,null)
        if(step[step.length-1]>=0){
           var steprename = step.splice(step.length-1,1)
           setNextplayer1(!Nextplayer1)
        }
        setpolygon(polygoncopy)
    }
    const BackStep =()=>{
        return(
            <div>
                <button onClick={setStepfunc} className={classes.button}>Шаг назад</button>
             </div>  
        )
    }
    var nameWinner = 'ничья'
    if(calculateWinner==='x'){
        nameWinner = props.nameplaer1
    } else if (calculateWinner==='o') {
        nameWinner = props.nameplaer2
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.bord}>
                <div className={classes.row}>
                <div className={classes.collg1}></div>
                <div className={classes.col9}>
                    <div className={classes.container}>Рейтинг победителей</div>
                    <p className={classes.container}>Колличество побед {props.nameplaer1} Х: {winnercount1}</p>
                    <p className={classes.container}>Колличество побед {props.nameplaer2} O: {winnercount2}</p>
                </div>
                <div className={classes.collg8}>
                    {NewGame()}
                    {BackStep()}
                </div>
                </div>
            </div>
            <Tiles polygon={polygon} click={onclikhendler} ></Tiles>
           <p className={classes.textplayer}>
                {calculateWinner ? "Победител: " + nameWinner : "Сейчас ходят: " + (Nextplayer1 ? 'x '+(props.nameplaer1) :"o "+(props.nameplaer2)) }
           </p>
        </div>
    )
}
export default Polygon