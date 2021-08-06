def on_pin_pressed_p0():
    配列.append(String.from_char_code(入力位置 + 65))
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global 入力位置
    if 状態 == 1:
        if 入力位置 == 0:
            basic.show_leds("""
                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
            """)
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # . # . #
                                # # # # #
                                # . # . #
            """)
            入力位置 = 49
            LED点滅(入力位置)
        elif 入力位置 == 25:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
            basic.show_leds("""
                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
            """)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            入力位置 += -1
            LED点滅(入力位置)
        else:
            入力位置 += -1
            LED点滅(入力位置)
input.on_button_pressed(Button.A, on_button_pressed_a)

def LED点滅(位置: number):
    global x位置, y位置, LED状態
    if 位置 <= 24:
        x位置 = 位置 % 5
        y位置 = Math.floor(位置 / 5)
    else:
        x位置 = 位置 % 5
        y位置 = Math.floor(位置 / 5) - 5
    if led.point(x位置, y位置):
        LED状態 = 1
    else:
        LED状態 = 0
    for index in range(4):
        led.toggle(x位置, y位置)
        basic.pause(100)

def on_button_pressed_ab():
    global 文字記憶
    文字記憶 = 配列
    文字記憶出力()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def 文字記憶出力():
    global i
    i = 0
    for index2 in range(len(文字記憶)):
        basic.show_string("" + (文字記憶[i]))
        i += 1
    i = 0
    for index3 in range(len(文字記憶)):
        basic.show_string(String.from_char_code(i))
        i += 1

def on_button_pressed_b():
    global 入力位置
    if 状態 == 1:
        if 入力位置 == 24:
            basic.show_leds("""
                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
            """)
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # . # . #
                                # # # # #
                                # . # . #
            """)
            入力位置 += 1
            LED点滅(入力位置)
        elif 入力位置 == 49:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
            basic.show_leds("""
                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
                                . . . . .
            """)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            入力位置 = 0
            LED点滅(入力位置)
        else:
            入力位置 += 1
            LED点滅(入力位置)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    配列.pop()
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_logo_pressed():
    global 入力位置, 状態
    if 状態 <= 1:
        入力位置 = 0
        basic.show_leds("""
            . # . . .
                        # # # # #
                        . # . . #
                        . # . . #
                        # . . . #
        """)
        basic.show_leds("""
            . . . # .
                        # # # # #
                        . . . # .
                        . . . # .
                        . # # . .
        """)
        basic.show_leds("""
            . # # . .
                        . . # . .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
        basic.show_leds("""
            . . # . .
                        # # # # #
                        . . # . #
                        . # . . #
                        # . . # #
        """)
        状態 = 1
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        LED点滅(入力位置)
    else:
        KataKana()
        状態 = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def KataKana():
    global mojiichi
    mojiichi = 0
    index4 = 0
    while index4 < mojisu:
        if "ア".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . . # . #
                                . . # # .
                                # # . . .
            """)
        elif "イ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . #
                                . . # # .
                                # # # . .
                                . . # . .
                                . . # . .
            """)
        elif "ウ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                # # # # #
                                # . . . #
                                . . . # .
                                . . # . .
            """)
        elif "エ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . # . .
                                . . # . .
                                . . # . .
                                # # # # #
            """)
        elif "オ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . # .
                                # # # # #
                                . . # # .
                                . # . # .
                                # . . # .
            """)
        elif "カ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                # # # # #
                                . . # . #
                                . # . . #
                                # . . # .
            """)
        elif "キ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                # # # # #
                                . . # . .
                                # # # # #
                                . . # . .
            """)
        elif "ク".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # # # #
                                . # . . #
                                # . . . #
                                . . . # .
                                . # # . .
            """)
        elif "ケ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . . .
                                . # # # #
                                # . . # .
                                . . . # .
                                . . # . .
            """)
        elif "コ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . . . . #
                                . . . . #
                                # # # # #
            """)
        elif "サ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . # .
                                # # # # #
                                . # . # .
                                . . . # .
                                . # # . .
            """)
        elif "シ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # . . #
                                . . . . #
                                # # . . #
                                . . . # .
                                # # # . .
            """)
        elif "ス".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . . . # .
                                . . # # .
                                # # . . #
            """)
        elif "セ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . . .
                                # # # # #
                                . # . . #
                                . # . . .
                                . # # # #
            """)
        elif "ソ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # . . . #
                                # . . . #
                                . # . . #
                                . . . # .
                                # # # . .
            """)
        elif "タ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # # # #
                                . # . . #
                                # . # # #
                                . . . . #
                                . # # # .
            """)
        elif "チ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # # # #
                                . . . # .
                                # # # # #
                                . . . # .
                                . # # . .
            """)
        elif "ツ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # . # . #
                                # . # . #
                                . . . . #
                                . . . # .
                                # # # . .
            """)
        elif "テ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # # # .
                                . . . . .
                                # # # # #
                                . . . # .
                                . # # . .
            """)
        elif "ト".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . . .
                                . # . . .
                                . # # . .
                                . # . # #
                                . # . . .
            """)
        elif "ナ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . # .
                                # # # # #
                                . . . # .
                                . . . # .
                                . # # . .
            """)
        elif "ニ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # # # .
                                . . . . .
                                . . . . .
                                . . . . .
                                # # # # #
            """)
        elif "ヌ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . . # . #
                                . . . # .
                                # # # . #
            """)
        elif "ネ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                # # # # #
                                . . . . #
                                . # # # .
                                # . # . #
            """)
        elif "ノ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . #
                                . . . . #
                                . . . . #
                                . . . # .
                                # # # . .
            """)
        elif "ハ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . # . # .
                                # . . . #
                                # . . . #
            """)
        elif "ヒ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # . . . .
                                # # # # #
                                # . . . .
                                # . . . .
                                # # # # #
            """)
        elif "フ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . . . . #
                                . . . # .
                                # # # . .
            """)
        elif "ヘ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . # . . .
                                # . # . .
                                . . . # .
                                . . . . #
            """)
        elif "ホ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                # # # # #
                                . . # . .
                                # . # . #
                                # . # . #
            """)
        elif "マ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                . # . # .
                                . . # . .
                                . . . # .
            """)
        elif "ミ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . .
                                # # # # #
                                . . . . .
                                # # # # #
            """)
        elif "ム".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                . # . . .
                                # . . . #
                                # # # # #
                                . . . . #
            """)
        elif "メ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . #
                                . # . . #
                                . . # # .
                                . . # # .
                                # # . . #
            """)
        elif "モ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . # . .
                                # # # # #
                                . . # . .
                                . . # # #
            """)
        elif "ヤ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . . .
                                # # # # #
                                . # . . #
                                . # . # .
                                . # . . .
            """)
        elif "ユ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # .
                                . . . # .
                                . . . # .
                                . . . # .
                                # # # # #
            """)
        elif "ヨ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                # # # # #
                                . . . . #
                                # # # # #
            """)
        elif "ラ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . .
                                # # # # #
                                . . . . #
                                # # # # .
            """)
        elif "リ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # . . . #
                                # . . . #
                                # . . . #
                                . . . # .
                                . # # . .
            """)
        elif "ル".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . # . # .
                                # . . # #
                                # . . # .
            """)
        elif "レ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # . . . .
                                # . . . .
                                # . . . #
                                # . . # .
                                # # # . .
            """)
        elif "ロ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                # . . . #
                                # # # # #
            """)
        elif "ワ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                # . . . #
                                # . . . #
                                . . . . #
                                . # # # .
            """)
        elif "ヲ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # # #
                                . . . . #
                                # # # # #
                                . . . . #
                                # # # # .
            """)
        elif "ン".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # . . #
                                . . . . #
                                . . . . #
                                . . . # .
                                # # # . .
            """)
        elif "゛".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # . # . .
                                # . # . .
                                # . # . .
                                . . . . .
                                . . . . .
            """)
        elif "゜".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                # # # . .
                                # . # . .
                                # # # . .
                                . . . . .
                                . . . . .
            """)
        elif "ー".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # # # # #
                                . . . . .
                                . . . . .
            """)
        elif "ッ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # # . # .
                                # # . # .
                                . . # . .
            """)
        elif "！".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . # . .
                                . . # . .
                                . . # . .
                                . . . . .
                                . . # . .
            """)
        elif "？".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . # # # .
                                # . . . #
                                . . # # .
                                . . . . .
                                . . # . .
            """)
        elif "、".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . # . . .
                                . . # . .
                                . . . # .
            """)
        elif "。".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . # # # .
                                . # . # .
                                . # # # .
            """)
        elif "　".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
        elif "・".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
        elif "：".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . # . .
                                . . . . .
                                . . # . .
                                . . . . .
            """)
        elif "；".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . # . .
                                . . . . .
                                . . # . .
                                . # . . .
            """)
        elif "＝".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                # # # # #
                                . . . . .
                                # # # # #
                                . . . . .
            """)
        elif "＿".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                # # # # #
            """)
        elif "ャ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . # . . .
                                # # # # .
                                . # # . .
                                . # . . .
            """)
        elif "ュ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                # # # . .
                                . . # . .
                                # # # # .
            """)
        elif "ョ".compare(mojiretu.charAt(mojiichi)) == 0:
            basic.show_leds("""
                . . . . .
                                # # # . .
                                # # # . .
                                . . # . .
                                # # # . .
            """)
        else:
            basic.show_icon(IconNames.NO)
        mojiichi += 1
        index4 += 1
i = 0
文字記憶: List[str] = []
LED状態 = 0
y位置 = 0
x位置 = 0
入力位置 = 0
配列: List[str] = []
状態 = 0
状態 = 0
配列 = []