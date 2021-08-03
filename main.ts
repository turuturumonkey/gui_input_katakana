input.onPinPressed(TouchPin.P0, function () {
    配列.push(入力位置)
})
input.onButtonPressed(Button.A, function () {
    if (状態 == 1) {
        if (入力位置 >= 1) {
            入力位置 += -1
            LED点滅(入力位置)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # . # . #
                # # # # #
                # . # . #
                `)
            入力位置 = 99
        }
    }
})
function LED点滅 (位置: number) {
    if (位置 <= 24) {
        x位置 = 位置 % 5
        y位置 = Math.floor(位置 / 5)
    } else {
        x位置 = 位置 % 5
        y位置 = Math.floor(位置 / 5) - 5
    }
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
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (状態 == 1) {
        if (入力位置 <= 23) {
            入力位置 += 1
            LED点滅(入力位置)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # . # . #
                # # # # #
                # . # . #
                `)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    配列.pop()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (状態 == 0) {
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
    } else {
        状態 = 0
        カナ表示()
    }
})
function カナ表示 () {
	
}
let LED状態 = 0
let y位置 = 0
let x位置 = 0
let 入力位置 = 0
let 配列: number[] = []
let 状態 = 0
状態 = 0
配列 = []
