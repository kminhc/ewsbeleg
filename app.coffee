# Prototyping with Framer
# Create a background
bg = new BackgroundLayer backgroundColor: "#eee"

# new LsongDisplay
LsongDisplay = new Layer
    backgroundColor: "#12bbf0"
    width: 300
    height: 200
    borderRadius: 4

LsongDisplay.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
LsongDisplay.center()
LsongDisplay.y+=250

#SliderTimeline
SliderTimeline = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline.x += 25
SliderTimeline.y += 165

LsongDisplay.addSubLayer(SliderTimeline)

# Create a ScrollComponent
ScrollSongList = new ScrollComponent
    width: 120
    height: 120
ScrollSongList.scrollHorizontal = false
ScrollSongList.center()

#Waveform SliderTimeline
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

LsongDisplay.addSubLayer(view);

# Create the content layers
Lsong1 = new Layer
    width: 120
    height: 50
    borderRadius: 4
    backgroundColor: "#12bbf0"
    superLayer: ScrollSongList.content

Lsong2 = new Layer
    width: 120
    height: 50
    borderRadius: 4
    backgroundColor: "#12bbf0"
    y: 55
    superLayer: ScrollSongList.content

Lsong3 = new Layer
    width: 120
    height: 50
    borderRadius: 4
    backgroundColor: "#12bbf0"
    y: 110
    superLayer: ScrollSongList.content
