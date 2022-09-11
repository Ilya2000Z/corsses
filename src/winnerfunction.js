import { Polygoncount } from "./polygoncount"

export function Winner(playercombination,index){
    function contains(arr, elem) {
       return arr.includes(elem)
    }
    var combination =[]
    if(playercombination.length===9){
    combination = Polygoncount(playercombination)
    for (let i=0;i<combination.length;i++){
        const [a, b, c] = combination[i]
        if(playercombination[a] && playercombination[a] === playercombination[b] && playercombination[a] === playercombination[c]){
            return playercombination[a]
        } else {
            if (contains(playercombination,null)!==true)
                {
                    return "ничья"
                }
        }
    }
    return null
}
    else if(playercombination.length===25){
        combination =  Polygoncount(playercombination)
        for (let i=0;i<combination.length;i++){
            const [a, b, c, d, e] = combination[i]
            if(playercombination[a] && playercombination[a] === playercombination[b] && playercombination[a] === playercombination[c] && playercombination[a] === playercombination[d] && playercombination[a] === playercombination[e]){
                return playercombination[a]
            }
        }
        return null
    }  
    else if(playercombination.length===100){
        combination =  Polygoncount(playercombination)
        for (let i=0;i<combination.length;i++){
            const [a, b, c, d, e, f, g, h, t, m] = combination[i]
            if(playercombination[a] && playercombination[a] === playercombination[b] && playercombination[a] === playercombination[c] && playercombination[a] === playercombination[d] && playercombination[a] === playercombination[e]
                && playercombination[a] === playercombination[f] && playercombination[a] === playercombination[g] && playercombination[a] === playercombination[h] && playercombination[a] === playercombination[t] && playercombination[a] === playercombination[m]){
                return playercombination[a]
            }
        }
        return null
    } 
}
function Rand(min,max){
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(rand)
    return rand
}
export function Bot (playercombination,index){
    // var paramtoret = 1
function ReturnBot(a,b,c) {
    // var busyindex = []
    // for (let i =0;i<playercombination.length;i++){
    //     if (playercombination[i]===null){
    //         busyindex.push(i)
    //     }
    // }
    // console.log(busyindex)
    var test =  playercombination[a]+playercombination[b]+playercombination[c]
     switch(test){
        case "xxnull":
          return ["x",c]
          case "xnullx":
            return ["x",b]
            case "nullxx":
                return ["x",a] 
            default: 
           return coltest()
     }
    }
    function coltest(){
        for (let i=0;i<playercombination.length;i++){
            var test =  playercombination[i]+playercombination[i+3]+playercombination[i+6]
            switch(test){
               case "xxnull":
                console.log("c"+i+6)
                 return ["x",i+6]
                 case "xnullx":
                    console.log("b"+i+3)
                   return ["x",i+3]
                   case "nullxx":
                    console.log("a"+i)
                       return ["x",i] 
                   default: 
                        return coltestdoble()
     }
    }
}
function coltestdoble(){
    var busyindex = []
for (let i =0;i<playercombination.length;i++){
 if (playercombination[i]===null){
     busyindex.push(i)
 }
}
     switch(playercombination[1]+[playercombination[4]+playercombination[7]]){
        case "xxnull":
          return ["x",7]
          case "xnullx":
            return ["x",4]
            case "nullxx":
                return ["x",1] 
            default: 
             switch(playercombination[2]+[playercombination[5]+playercombination[8]]){
                case "xxnull":
                return ["x",8]
                case "xnullx":
                    return ["x",5]
                    case "nullxx":
                        return ["x",2] 
                    default: 
                    switch(playercombination[0]+[playercombination[4]+playercombination[8]]){
                        case "xxnull":
                        return ["x",8]
                        case "xnullx":
                            return ["x",5]
                            case "nullxx":
                                return ["x",2] 
                            default: 
                            switch(playercombination[2]+[playercombination[4]+playercombination[6]]){
                                case "xxnull":
                                return ["x",8]
                                case "xnullx":
                                    return ["x",4]
                                    case "nullxx":
                                        return ["x",2] 
                                    default: 
                                    if(busyindex[Rand(0,busyindex.length)]===undefined){
                                        return ["x",busyindex[Rand(0,busyindex.length)]]
                                    }
                                    return ["x",busyindex[Rand(0,busyindex.length)]]
                             }
                     }
             }
    }
}
 for (let i=0;i<playercombination.length;i++){
      var  paramtoret=ReturnBot(i,i+1,i+2)
        console.log(ReturnBot(i,i+1,i+2))
        if( paramtoret!==undefined){
            if(paramtoret[1]!==undefined){
                return paramtoret[1] 
            }
        }
    }
}