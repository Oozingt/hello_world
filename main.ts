basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        motorbit.MotorRun(motorbit.Motors.M1, 50)
        if (input.buttonIsPressed(Button.B)) {
            motorbit.MotorRun(motorbit.Motors.M1, 0)
        }
    }
})
