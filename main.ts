enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (number))
})
input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number = 0
})
let number = 0
radio.setGroup(1)
