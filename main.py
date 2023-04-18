def on_forever():
    if input.button_is_pressed(Button.A):
        motorbit.motor_run(motorbit.Motors.M1, 0)
    else:
        pass
basic.forever(on_forever)
