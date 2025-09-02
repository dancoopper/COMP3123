function Findbigest(array) {

    var highest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length; i++) {

        if (highest <= array[i]) {
            highest = array[i]
        }
    }
    return highest;
}


function MoveChar(s){
    if(s.length<3){
        return s
    }

    let temp = s.slice(s.length-3,s.length)
    let temp2 = s.slice(0, s.length-3)
    let final = temp + temp2
    return final

}


function angle(num){
    if(num < 90){
        return "Acute"
    }else if(num === 90){
        return "Right"
    }else if(num >90 && num < 180){
        return "Obtuse"
    }else if(num === 180){
        return "Straight"
    }
    else{
        return "huge angle"
    }
}



function Capfirstletter(s){
    var words = s.split(" ")
    var final = ""
    for(let i=0;i<words.length;i++){
       final += words[i].replace(words[i][0], words[i].toUpperCase()[0]) + " " //what an amazing line of code lmao
    }
    return final
}




console.log(Findbigest([-25, -6, -44]))
console.log(MoveChar("Python"))
console.log(angle(80))
console.log(Capfirstletter("super suepr suepr lololl ooll o o o lll"))