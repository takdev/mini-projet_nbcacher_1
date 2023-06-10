input.onButtonPressed(Button.A, function () {
    inVal = inVal + 1
    basic.showNumber(inVal)
})
input.onButtonPressed(Button.B, function () {
    inVal -= 1
    basic.showNumber(inVal)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	if(x===inVal){
        basic.showIcon(IconNames.Yes)
    }else{
        basic.showIcon(IconNames.No)
    }

})
let inVal = 0
let x = randint(0, 10)
