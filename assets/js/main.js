
let trennen = () => {
    let zeichenkette = document.querySelector('#zeichenkette').value
    let trenner = document.querySelector('#trenner').value
    let output1 = document.querySelector('#output1')
    let output2 = document.querySelector('#output2')
    let atIndex = zeichenkette.indexOf(trenner)
    let slice1 = zeichenkette.slice(0, atIndex)
    let slice2 = zeichenkette.slice(atIndex)
    let slice3 = zeichenkette.slice(0, atIndex+1)
    let slice4 = zeichenkette.slice(atIndex+1)
    let davor = document.querySelector("#davor").checked
    let danach = document.querySelector("#danach").checked

    switch(true){
        case davor:
            output1.innerHTML = slice1
            output2.innerHTML = slice2
            break
        case danach:
            output1.innerHTML = slice3
            output2.innerHTML = slice4
            break
    }
}