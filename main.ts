let desress = 0
basic.forever(function () {
    desress = input.compassHeading()
    if (desress < 45) {
        basic.showString("N")
    } else {
        if (desress < 135) {
            basic.showString("E")
        } else {
            if (desress < 225) {
                basic.showString("S")
            } else {
                if (desress < 315) {
                    basic.showString("W")
                } else {
                    basic.showString("N")
                }
            }
        }
    }
})
