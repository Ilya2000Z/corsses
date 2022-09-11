import React from "react";
import classes from "./startpage.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Startpage (props){
    const navigete = useNavigate()
    const [chekname1,setcheckname1]=useState(false)
    const [chekname2,setcheckname2]=useState(false)
    const [chekvalue,setchekvalue]=useState(false)
    const onclickfunk =()=>{
        if(props.nameplaer1!=='' && props.nameplaer2!==''){
            setcheckname1(false)
            setcheckname2(false)
            if(props.palygonValue!==undefined){
            navigete("/game")
            } else{
                setchekvalue(true)
            }
        } else{
            setcheckname1(true)
            setcheckname2(true)
        }
       
   }
    return(
        <div className={classes.wrapper}>
            <div className={classes.bord}>
                    <p className={classes.container}>Добро пожаловать в игру</p>
                    <p className={[classes.container, classes.textstile].join(' ')}> выберете размер поля</p>
                    {chekvalue?<p className={classes.valuecheck}>выберете размер поля</p>:null}
                    <div className={[classes.row,classes.test].join(' ')}>
                        <input type="radio" name="browser" value="9" onClick={props.getPalygonValue}/> Поле 3Х3
                        <input type="radio" name="browser" value="25" onClick={props.getPalygonValue}/> Поле 5Х5
                        <input type="radio" name="browser" value="100" onClick={props.getPalygonValue}/> Поле 10Х10
                    </div>
                    <div className={classes.iibot}>
                        <div className={classes.row}>
                            <p className={classes.containerSwitch}>Игра с компьютером</p>
                            <label className={classes.switch} >
                                <input type="checkbox" id={"isbot"}onClick={props.setbot}/>
                                <span className={[classes.slider, classes.round].join(' ')}></span>
                            </label>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.textfield} id="textfield">
                            {chekname1?<label className={classes.textfieldlabelred}>Введите имя игрока1</label>:<label className={classes.textfieldlabel}>Игрок1</label>}
                            <input className={classes.textfieldinput}type="text" name="nameplaer1" id="login" placeholder="Введите имя" value={props.nameplaer1} onChange={props.getplayValue}/>
                        </div>
                        {props.swichbottest? null:<div className={classes.textfield} id="textfield">
                        {chekname2?<label className={classes.textfieldlabelred}>Введите имя игрока2</label>:<label className={classes.textfieldlabel}>Игрок2</label>}
                            <input className={classes.textfieldinput} type="text" name="nameplaer2" id="login" placeholder="Введите имя" value={props.nameplaer2} onChange={props.getplayValue}/>
                        </div>}
                        
                    </div>
                    <div className={classes.center}>
                        <button onClick={onclickfunk} className={classes.button}>Начать игру</button> 
                    </div>  
            </div>
        </div>
    )
}