input.onPinPressed(TouchPin.P0, function () {
    if (入力位置 == 36 || 入力位置 == 38 || (入力位置 == 46 || 入力位置 == 48)) {
        music.playTone(131, music.beat(BeatFraction.Double))
    } else {
        配列.push(入力位置)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
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
input.onSound(DetectedSound.Loud, function () {
    カナ表示()
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
    文字列の配列 = []
    i = 0
    for (let index = 0; index < 配列.length; index++) {
        文字列の配列.push(配列[i])
        i += 1
    }
    文字数 = 文字列の配列.length
    カナ表示()
})
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
        basic.pause(200)
    } else {
        状態 = 0
    }
})
function カナ表示 () {
    i = 0
    for (let index = 0; index < 文字数; index++) {
        if (文字列の配列[i] == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . # . #
                . . # # .
                # # . . .
                `)
        } else if (文字列の配列[i] == 1) {
            basic.showLeds(`
                . . . . #
                . . # # .
                # # # . .
                . . # . .
                . . # . .
                `)
        } else if (文字列の配列[i] == 2) {
            basic.showLeds(`
                . . # . .
                # # # # #
                # . . . #
                . . . # .
                . . # . .
                `)
        } else if (文字列の配列[i] == 3) {
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                # # # # #
                `)
        } else if (文字列の配列[i] == 4) {
            basic.showLeds(`
                . . . # .
                # # # # #
                . . # # .
                . # . # .
                # . . # .
                `)
        } else if (文字列の配列[i] == 5) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . #
                . # . . #
                # . . # .
                `)
        } else if (文字列の配列[i] == 6) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                # # # # #
                . . # . .
                `)
        } else if (文字列の配列[i] == 7) {
            basic.showLeds(`
                . # # # #
                . # . . #
                # . . . #
                . . . # .
                . # # . .
                `)
        } else if (文字列の配列[i] == 8) {
            basic.showLeds(`
                . # . . .
                . # # # #
                # . . # .
                . . . # .
                . . # . .
                `)
        } else if (文字列の配列[i] == 9) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                # # # # #
                `)
        } else if (文字列の配列[i] == 10) {
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                . . . # .
                . # # . .
                `)
        } else if (文字列の配列[i] == 11) {
            basic.showLeds(`
                # # . . #
                . . . . #
                # # . . #
                . . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 12) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . # .
                . . # # .
                # # . . #
                `)
        } else if (文字列の配列[i] == 13) {
            basic.showLeds(`
                . # . . .
                # # # # #
                . # . . #
                . # . . .
                . # # # #
                `)
        } else if (文字列の配列[i] == 14) {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # . . #
                . . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 15) {
            basic.showLeds(`
                . # # # #
                . # . . #
                # . # # #
                . . . . #
                . # # # .
                `)
        } else if (文字列の配列[i] == 16) {
            basic.showLeds(`
                . # # # #
                . . . # .
                # # # # #
                . . . # .
                . # # . .
                `)
        } else if (文字列の配列[i] == 17) {
            basic.showLeds(`
                # . # . #
                # . # . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 18) {
            basic.showLeds(`
                . # # # .
                . . . . .
                # # # # #
                . . . # .
                . # # . .
                `)
        } else if (文字列の配列[i] == 19) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # # . .
                . # . # #
                . # . . .
                `)
        } else if (文字列の配列[i] == 20) {
            basic.showLeds(`
                . . . # .
                # # # # #
                . . . # .
                . . . # .
                . # # . .
                `)
        } else if (文字列の配列[i] == 21) {
            basic.showLeds(`
                . # # # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else if (文字列の配列[i] == 22) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . # . #
                . . . # .
                # # # . #
                `)
        } else if (文字列の配列[i] == 23) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . . . #
                . # # # .
                # . # . #
                `)
        } else if (文字列の配列[i] == 24) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 25) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . . #
                # . . . #
                `)
        } else if (文字列の配列[i] == 26) {
            basic.showLeds(`
                # . . . .
                # # # # #
                # . . . .
                # . . . .
                # # # # #
                `)
        } else if (文字列の配列[i] == 27) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 28) {
            basic.showLeds(`
                . . . . .
                . # . . .
                # . # . .
                . . . # .
                . . . . #
                `)
        } else if (文字列の配列[i] == 29) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                # . # . #
                # . # . #
                `)
        } else if (文字列の配列[i] == 30) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . # . # .
                . . # . .
                . . . # .
                `)
        } else if (文字列の配列[i] == 31) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
        } else if (文字列の配列[i] == 32) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . . . #
                # # # # #
                . . . . #
                `)
        } else if (文字列の配列[i] == 33) {
            basic.showLeds(`
                . . . . #
                . # . . #
                . . # # .
                . . # # .
                # # . . #
                `)
        } else if (文字列の配列[i] == 34) {
            basic.showLeds(`
                # # # # #
                . . # . .
                # # # # #
                . . # . .
                . . # # #
                `)
        } else if (文字列の配列[i] == 35) {
            basic.showLeds(`
                . # . . .
                # # # # #
                . # . . #
                . # . # .
                . # . . .
                `)
        } else if (文字列の配列[i] == 37) {
            basic.showLeds(`
                # # # # .
                . . . # .
                . . . # .
                . . . # .
                # # # # #
                `)
        } else if (文字列の配列[i] == 39) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        } else if (文字列の配列[i] == 40) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . #
                # # # # .
                `)
        } else if (文字列の配列[i] == 41) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                . . . # .
                . # # . .
                `)
        } else if (文字列の配列[i] == 42) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . # #
                # . . # .
                `)
        } else if (文字列の配列[i] == 43) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . #
                # . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 44) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (文字列の配列[i] == 45) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                . . . . #
                . # # # .
                `)
        } else if (文字列の配列[i] == 47) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # .
                `)
        } else if (文字列の配列[i] == 49) {
            basic.showLeds(`
                # # . . #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if (文字列の配列[i] == 50) {
            basic.showLeds(`
                # . # . .
                # . # . .
                # . # . .
                . . . . .
                . . . . .
                `)
        } else if (文字列の配列[i] == 51) {
            basic.showLeds(`
                # # # . .
                # . # . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (文字列の配列[i] == 52) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else if (文字列の配列[i] == 53) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . # .
                # # . # .
                . . # . .
                `)
        } else if (文字列の配列[i] == 54) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
        } else if (文字列の配列[i] == 55) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . . . . .
                . . # . .
                `)
        } else if (文字列の配列[i] == 56) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                `)
        } else if (文字列の配列[i] == 57) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (文字列の配列[i] == 58) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (文字列の配列[i] == 59) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (文字列の配列[i] == 60) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (文字列の配列[i] == 61) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . # . . .
                `)
        } else if (文字列の配列[i] == 62) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if (文字列の配列[i] == 63) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else if (文字列の配列[i] == 64) {
            basic.showLeds(`
                . . . . .
                . # . . .
                # # # # .
                . # # . .
                . # . . .
                `)
        } else if (文字列の配列[i] == 65) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . # . .
                # # # # .
                `)
        } else if (文字列の配列[i] == 66) {
            basic.showLeds(`
                . . . . .
                # # # . .
                # # # . .
                . . # . .
                # # # . .
                `)
        } else {
            basic.showIcon(IconNames.No)
        }
        i += 1
    }
}
let 文字数 = 0
let i = 0
let 文字列の配列: number[] = []
let LED状態 = 0
let y位置 = 0
let x位置 = 0
let 入力位置 = 0
let 配列: number[] = []
let 状態 = 0
let mojiretu = ""
状態 = 0
配列 = []
