# Prototyping with Framer
# Create a background
bg = new BackgroundLayer backgroundColor: "#eee"
title = "Titel/Interpret"
# new LsongDisplay
LsongDisplay = new Layer
    backgroundColor: "#12bbf0"
    width: 300
    height: 200
    borderRadius: 4

LsongDisplay.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
LsongDisplay.center()
LsongDisplay.y -= 215
LsongDisplay.x -= 20

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
    width: 157
    height: 120
    visible: false
ScrollSongList.scrollHorizontal = false
ScrollSongList.center()
ScrollSongList.x -= 290
ScrollSongList.y -= 215

#Titelleiste
LtitleDisplay = new Layer
    width: 157
    height: 30
    borderRadius: 4
    backgroundColor: "#12bbf0"

LtitleDisplay.center();
LtitleDisplay.x -= 290
LtitleDisplay.y -= 300
Utils.labelLayer(LtitleDisplay,title)
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
    width: 157
    height: 30
    borderRadius: 4
    backgroundColor: "#12bbf0"
    superLayer: ScrollSongList.content
Utils.labelLayer(Lsong1, "Lied 1");
Lsong1.onTap ->
    Utils.labelLayer(LtitleDisplay, "Lied 1")
    ScrollSongList.visible = false

Lsong2 = new Layer
    width: 157
    height: 30
    borderRadius: 4
    backgroundColor: "#12bbf0"
    y: 35
    superLayer: ScrollSongList.content
Utils.labelLayer(Lsong2, "Lied 2");
Lsong2.onTap ->
    Utils.labelLayer(LtitleDisplay, "Lied 2")
    ScrollSongList.visible = false

Lsong3 = new Layer
    width: 157
    height: 30
    borderRadius: 4
    backgroundColor: "#12bbf0"
    y: 70
    superLayer: ScrollSongList.content
Utils.labelLayer(Lsong3, "Lied 3");
Lsong3.onTap ->
    Utils.labelLayer(LtitleDisplay, "Lied 3")
    ScrollSongList.visible = false

LopenSongListButton = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#12bbf0"
LopenSongListButton.center();
LopenSongListButton.x -= 200
LopenSongListButton.y -= 300
LopenSongListButton.onTap ->
    if ScrollSongList.visible is false
        ScrollSongList.visible = true
    else
      ScrollSongList.visible = false
