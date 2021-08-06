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
    文字列の配列 = []
    i = 0
    for (let index = 0; index < 配列.length; index++) {
        文字列の配列.push(配列[i])
        i += 1
    }
    文字数 = 文字列の配列.length
    文字記憶出力()
})
function 文字記憶出力 () {
    let 文字配列: number[] = []
    i = 0
    for (let index = 0; index < 文字配列.length; index++) {
        basic.showString("" + (文字配列[i]))
        i += 1
    }
    i = 0
    for (let index = 0; index < 文字配列.length; index++) {
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
        状態 = 0
    }
})
function カナ表示 () {
    i = 0
    for (let index = 0; index < 文字数; index++) {
        let mojiretu = ""
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
        } else if ("ウ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                # . . . #
                . . . # .
                . . # . .
                `)
        } else if ("エ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                . . # . .
                # # # # #
                `)
        } else if ("オ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . # .
                # # # # #
                . . # # .
                . # . # .
                # . . # .
                `)
        } else if ("カ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . #
                . # . . #
                # . . # .
                `)
        } else if ("キ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                # # # # #
                . . # . .
                `)
        } else if ("ク".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # #
                . # . . #
                # . . . #
                . . . # .
                . # # . .
                `)
        } else if ("ケ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                . # # # #
                # . . # .
                . . . # .
                . . # . .
                `)
        } else if ("コ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . . #
                # # # # #
                `)
        } else if ("サ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                . . . # .
                . # # . .
                `)
        } else if ("シ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # . . #
                . . . . #
                # # . . #
                . . . # .
                # # # . .
                `)
        } else if ("ス".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . # .
                . . # # .
                # # . . #
                `)
        } else if ("セ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                # # # # #
                . # . . #
                . # . . .
                . # # # #
                `)
        } else if ("ソ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # . . #
                . . . # .
                # # # . .
                `)
        } else if ("タ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # #
                . # . . #
                # . # # #
                . . . . #
                . # # # .
                `)
        } else if ("チ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # #
                . . . # .
                # # # # #
                . . . # .
                . # # . .
                `)
        } else if ("ツ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . # . #
                # . # . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("テ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                . . . . .
                # # # # #
                . . . # .
                . # # . .
                `)
        } else if ("ト".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # # . .
                . # . # #
                . # . . .
                `)
        } else if ("ナ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . # .
                # # # # #
                . . . # .
                . . . # .
                . # # . .
                `)
        } else if ("ニ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else if ("ヌ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . # . #
                . . . # .
                # # # . #
                `)
        } else if ("ネ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . . . #
                . # # # .
                # . # . #
                `)
        } else if ("ノ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("ハ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . . #
                # . . . #
                `)
        } else if ("ヒ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . .
                # # # # #
                # . . . .
                # . . . .
                # # # # #
                `)
        } else if ("フ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("ヘ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . # . . .
                # . # . .
                . . . # .
                . . . . #
                `)
        } else if ("ホ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                # . # . #
                # . # . #
                `)
        } else if ("マ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                . # . # .
                . . # . .
                . . . # .
                `)
        } else if ("ミ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
        } else if ("ム".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . . . #
                # # # # #
                . . . . #
                `)
        } else if ("メ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . #
                . # . . #
                . . # # .
                . . # # .
                # # . . #
                `)
        } else if ("モ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . # . .
                # # # # #
                . . # . .
                . . # # #
                `)
        } else if ("ヤ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . . .
                # # # # #
                . # . . #
                . # . # .
                . # . . .
                `)
        } else if ("ユ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # .
                . . . # .
                . . . # .
                . . . # .
                # # # # #
                `)
        } else if ("ヨ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # #
                `)
        } else if ("ラ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . #
                # # # # .
                `)
        } else if ("リ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                . . . # .
                . # # . .
                `)
        } else if ("ル".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                # . . # #
                # . . # .
                `)
        } else if ("レ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . #
                # . . # .
                # # # . .
                `)
        } else if ("ロ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if ("ワ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                . . . . #
                . # # # .
                `)
        } else if ("ヲ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # # #
                . . . . #
                # # # # #
                . . . . #
                # # # # .
                `)
        } else if ("ン".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # . . #
                . . . . #
                . . . . #
                . . . # .
                # # # . .
                `)
        } else if ("゛".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # . # . .
                # . # . .
                # . # . .
                . . . . .
                . . . . .
                `)
        } else if ("゜".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                # # # . .
                # . # . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if ("ー".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else if ("ッ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . # .
                # # . # .
                . . # . .
                `)
        } else if ("！".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
        } else if ("？".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . . . . .
                . . # . .
                `)
        } else if ("、".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                `)
        } else if ("。".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if ("".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if ("・".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if ("：".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if ("；".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . . . .
                . . # . .
                . # . . .
                `)
        } else if ("＝".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
        } else if ("＿".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else if ("ャ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . # . . .
                # # # # .
                . # # . .
                . # . . .
                `)
        } else if ("ュ".compare(mojiretu.charAt(mojiichi)) == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . # . .
                # # # # .
                `)
        } else if ("ョ".compare(mojiretu.charAt(mojiichi)) == 0) {
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
        mojiichi += 1
    }
}
let mojiichi = 0
let 文字数 = 0
let i = 0
let 文字列の配列: string[] = []
let LED状態 = 0
let y位置 = 0
let x位置 = 0
let 入力位置 = 0
let 配列: string[] = []
let 状態 = 0
状態 = 0
配列 = []
