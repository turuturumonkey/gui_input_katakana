input.onButtonPressed(Button.A, function () {
    if (状態 == 1) {
        if (入力位置 >= 1) {
            入力位置 += -1
            LED点滅(入力位置)
        }
    }
})
function LED点滅 (位置: number) {
    x位置 = 位置 % 5
    y位置 = Math.floor(位置 / 5)
    if (led.point(x位置, y位置)) {
        LED状態 = 1
    } else {
        LED状態 = 0
    }
    for (let index = 0; index < 4; index++) {
        led.toggle(x位置, y位置)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    if (状態 == 1) {
        if (入力位置 <= 23) {
            入力位置 += 1
            LED点滅(入力位置)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    状態 = 1
    basic.showLeds(`
        . # . . .
        # # # # #
        . # . . #
        . # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        # # # # #
        . . . # .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . #
        . # . . #
        # . . # #
        `)
    入力位置 = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    LED点滅(入力位置)
})
let LED状態 = 0
let y位置 = 0
let x位置 = 0
let 入力位置 = 0
let 状態 = 0
状態 = 0
