# Prototyping with Framer

# Create a background
new BackgroundLayer backgroundColor: "#151517"

#slider
slider = new SliderComponent
    min: 0
    max: 1
    value: 0.5
    knobSize: 30
slider.center()

lay = new Layer
    width: 150
    height: 200
    

# Create additional states (the original state is 'default')
logo.states.add
    second:
        y: 200
        scale: 1.5
        rotation: 225
    third:
        y: 300
        scale: 0.5
        blur: 25

# Create a spring animation
logo.states.animationOptions =
    curve: "spring(250,25,0)"

# Animate to the next state on click
logo.on Events.Click, ->
    logo.states.next()
