# Prototyping with Framer

# Create a background
bg = new BackgroundLayer backgroundColor: "#eee"

# new card
card = new Layer backgroundColor: "#12bbf0", width: 300, height: 200, borderRadius: 4, clip: true

card.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
card.center()
card.y-=250

#slider
slider = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
slider.x += 25
slider.y += 165

card.addSubLayer(slider)



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
