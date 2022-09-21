input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        for (let Nuber = 0; Nuber <= 4; Nuber++) {
            led.plot(index, Nuber)
            basic.pause(100)
        }
    }
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
