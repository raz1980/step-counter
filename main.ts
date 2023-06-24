input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
input.onButtonPressed(Button.A, function () {
    step = 0
})
let step = 0
step = 0
basic.forever(function () {
    basic.showNumber(step)
})
