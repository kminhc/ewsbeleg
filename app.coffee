# Prototyping with Framer
# Create a background
bg = new BackgroundLayer backgroundColor: "#eee"

# new LsongChoice
LsongChoice = new Layer
    backgroundColor: "#12bbf0"
    width: 300
    height: 200
    borderRadius: 4

LsongChoice.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
LsongChoice.center()
LsongChoice.y+=250

#slider
slider = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
slider.x += 25
slider.y += 165

LsongChoice.addSubLayer(slider)

# Create a ScrollComponent
StimeLine = new ScrollComponent
    width: 120
    height: 120
StimeLine.scrollHorizontal = false
StimeLine.center()

#create a slider
view = new ScrollComponent
    x:25
    y:15
    width:250
    height:130

view.scrollVertical = false

LwaveForm = new Layer
    x:0
    y:0
    width:1000
    height:130
    image:"images/wave.png"
    superLayer: view.content

LsongChoice.addSubLayer(view);
# Create the content layers
Lsong1 = new Layer
    width: 120
    height: 50
    borderRadius: 4
    backgroundColor: "#12bbf0"
    superLayer: StimeLine.content

Lsong2 = new Layer
    width: 120
    height: 50
    borderRadius: 4
    backgroundColor: "#12bbf0"
    y: 55
    superLayer: StimeLine.content

Lsong3 = new Layer
    width: 120
    height: 50
    borderRadius: 4
    backgroundColor: "#12bbf0"
    y: 110
    superLayer: StimeLine.content
