input.onButtonPressed(Button.A, function () {
    radio.sendString(":)")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("RECEIVEDSCRING")
})
radio.setGroup(1)
