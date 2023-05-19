
var root = document.querySelector(':root')

var angleText =document.getElementById("value")

var value=0

const updateAngle = () =>{

    if(value<360)
    value++

    var angle = Math.round(value*100/360)

    angleText.innerText =`${angle}%`

    root.style.setProperty('--angle',`${value}deg`)
}

setInterval(updateAngle,30)






