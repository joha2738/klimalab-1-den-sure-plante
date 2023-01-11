let fugt = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, fugt)
    if (fugt > 400) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
