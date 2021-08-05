input.onPinPressed(TouchPin.P0, function () {
    配列.push(String.fromCharCode(入力位置 + 65))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    if (状態 == 1) {
        if (入力位置 == 0) {
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
            入力位置 = 49
            LED点滅(入力位置)
        } else if (入力位置 == 25) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            入力位置 += -1
            LED点滅(入力位置)
        } else {
            入力位置 += -1
            LED点滅(入力位置)
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
    文字記憶 = 配列
    文字記憶出力()
})
function 文字記憶出力 () {
    i = 0
    for (let index = 0; index < 文字記憶.length; index++) {
        basic.showString("" + (文字記憶[i]))
        i += 1
    }
    i = 0
    for (let index = 0; index < 文字記憶.length; index++) {
        basic.showString(String.fromCharCode(i))
        i += 1
    }
}
input.onButtonPressed(Button.B, function () {
    if (状態 == 1) {
        if (入力位置 == 24) {
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
            入力位置 += 1
            LED点滅(入力位置)
        } else if (入力位置 == 49) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            入力位置 = 0
            LED点滅(入力位置)
        } else {
            入力位置 += 1
            LED点滅(入力位置)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    配列.pop()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (状態 <= 1) {
        入力位置 = 0
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
        状態 = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        LED点滅(入力位置)
    } else {
        カナ表示()
        状態 = 0
    }
})
function カナ表示 () {
	
}
let i = 0
let 文字記憶: string[] = []
let LED状態 = 0
let y位置 = 0
let x位置 = 0
let 入力位置 = 0
let 配列: string[] = []
let 状態 = 0
状態 = 0
配列 = []
