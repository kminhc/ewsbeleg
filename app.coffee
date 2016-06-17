# Prototyping with Framer
# Create a background
bg = new BackgroundLayer

title = "Titel/Interpret"
# new LsongDisplay
LsongDisplay = new Layer
    backgroundColor: "#12bbf0"
    width: 300
    height: 200
    borderRadius: 4

LsongDisplay.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
LsongDisplay.center()
LsongDisplay.y -= 230
LsongDisplay.x -= 730

#Waveform SliderTimeline
view = new ScrollComponent
    x:25
    y:15
    width:250
    height:130

view.scrollVertical = false

LwaveForm = new Layer
    x:0
    y:20
    width:1000
    height:110
    image:"images/wave.png"
    superLayer: view.content

LsongDisplay.addSubLayer(view);

SliderTimeline = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline.x += 25
SliderTimeline.y += 165

LsongDisplay.addSubLayer(SliderTimeline)

# new LsongDisplay
LsongDisplay2 = new Layer
    backgroundColor: "#12bbf0"
    width: 300
    height: 200
    borderRadius: 4

LsongDisplay2.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
LsongDisplay2.center()
LsongDisplay2.y -= 25
LsongDisplay2.x -= 730

#Waveform SliderTimeline
view2 = new ScrollComponent
    x:25
    y:15
    width:250
    height:130

view2.scrollVertical = false

LwaveForm2 = new Layer
    x:0
    y:20
    width:1000
    height:110
    image:"images/wave.png"
    superLayer: view2.content

LsongDisplay2.addSubLayer(view2);
#SliderTimeline
SliderTimeline2 = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline2.x += 25
SliderTimeline2.y += 165

LsongDisplay2.addSubLayer(SliderTimeline2)

# new LsongDisplay
LsongDisplay3 = new Layer
    backgroundColor: "#12bbf0"
    width: 300
    height: 200
    borderRadius: 4
    visible: false

LsongDisplay3.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"
LsongDisplay3.center()
LsongDisplay3.y += 180
LsongDisplay3.x -= 730

#Waveform SliderTimeline
view3 = new ScrollComponent
    x:25
    y:15
    width:250
    height:130

view3.scrollVertical = false

LwaveForm3 = new Layer
    x:0
    y:20
    width:1000
    height:110
    image:"images/wave.png"
    superLayer: view3.content

LsongDisplay3.addSubLayer(view3);
#SliderTimeline
SliderTimeline3 = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline3.x += 25
SliderTimeline3.y += 165

LsongDisplay3.addSubLayer(SliderTimeline3)

# Create a ScrollComponent
ScrollSongList = new ScrollComponent
    width: 300
    height: 120
    visible: false
ScrollSongList.scrollHorizontal = false


#Titelleiste
LtitleDisplay = new Layer
    width: 300
    height: 30
    borderRadius: 4
    backgroundColor: "#12bbf0"

LtitleDisplay.center();
LtitleDisplay.x -= 730
LtitleDisplay.y -= 350
Utils.labelLayer(LtitleDisplay,title)
LtitleDisplay.addSubLayer(ScrollSongList);
ScrollSongList.y = Align.top(35)

# Create the content layers
Lsong1 = new Layer
    width: 300
    height: 30
    borderRadius: 4
    #backgroundColor: "#12bbf0"
    superLayer: ScrollSongList.content
Utils.labelLayer(Lsong1, "Lied 1");
Lsong1.onTap ->
    Utils.labelLayer(LtitleDisplay, "Lied 1")
    ScrollSongList.visible = false

Lsong2 = new Layer
    width: 300
    height: 30
    borderRadius: 4
    #backgroundColor: "#12bbf0"
    y: 35
    superLayer: ScrollSongList.content
Utils.labelLayer(Lsong2, "Lied 2");
Lsong2.onTap ->
    Utils.labelLayer(LtitleDisplay, "Lied 2")
    ScrollSongList.visible = false

Lsong3 = new Layer
    width: 300
    height: 30
    borderRadius: 4
    #backgroundColor: "#12bbf0"
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
    backgroundColor: "#adbbf0"
LtitleDisplay.addSubLayer(LopenSongListButton);
LopenSongListButton.x = Align.right

LopenSongListButton.onTap ->
    if ScrollSongList.visible is false
        ScrollSongList.visible = true
    else
      ScrollSongList.visible = false


LnewDisplay = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#adbbf0"
LnewDisplay.center();
LnewDisplay.y += 240
LnewDisplay.x -= 595

LnewCloseBtn = new Layer
      x: 270
      width: 30
      height: 30
      borderRadius: 4
      backgroundColor: "#adbbf0"
LnewCloseBtn.visible = false

LnewDisplay.onTap ->
    LsongDisplay3.visible = true
    LnewCloseBtn.visible = true
    LsongDisplay3.addSubLayer(LnewCloseBtn)
    #LsongDisplay3.visible = true
    LnewDisplay.visible = false
    PlayDisplay.y += 205

LnewCloseBtn.onTap ->
      LsongDisplay3.visible = false
      LnewCloseBtn.visible = false
      #LsongDisplay3.visible = true
      LnewDisplay.visible = true
      PlayDisplay.y -= 205

LskipToEndBtn = new Layer
    width: 35
    height: 35
    x: 230
    y: 15
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"

LFastForwardBtn = new Layer
    width: 35
    height: 35
    x: 190
    y: 15
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"

LPlayBtn = new Layer
    width: 70
    height: 35
    x: 115
    y: 15
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/icon.png"

LFastBackBtn = new Layer
    width: 35
    height: 35
    x: 75
    y: 15
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"

LskipToStart = new Layer
    width: 35
    height: 35
    x: 35
    y: 15
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"

LvolumeBtn = new Layer
    width: 60
    height: 46
    x: 220
    y: 60
    borderRadius: 6
    backgroundColor: "#770EC7"
    image:"images/background.png"

LvolUpBtn = new Layer
    width: 40
    height: 23
    x: 175
    y: 60
    borderRadius: 6
    backgroundColor: "#770EC7"
    image:"images/background.png"

LvolDownBtn = new Layer
    width: 40
    height: 23
    x: 175
    y: 83
    borderRadius: 6
    backgroundColor: "#770EC7"
    image:"images/background.png"

LbpmDisplay = new Layer
    width: 70
    height: 35
    x: 100
    y: 65
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"

LbpmLabel = new Layer
    width: 70
    height: 35
    x: 25
    y: 65
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"

#-----Playbuttons-----#
PlayDisplay = new Layer
    width: 300
    height: 120
    borderRadius: 4
    backgroundColor: "#adbbf0"
PlayDisplay.center();
PlayDisplay.x -= 730
PlayDisplay.y += 140
PlayDisplay.addSubLayer(LskipToEndBtn);
PlayDisplay.addSubLayer(LFastForwardBtn);
PlayDisplay.addSubLayer(LPlayBtn);
PlayDisplay.addSubLayer(LFastBackBtn);
PlayDisplay.addSubLayer(LskipToStart);
PlayDisplay.addSubLayer(LvolumeBtn);
PlayDisplay.addSubLayer(LvolUpBtn);
PlayDisplay.addSubLayer(LvolDownBtn);
PlayDisplay.addSubLayer(LbpmDisplay);
PlayDisplay.addSubLayer(LbpmLabel);
#----Mitte Fenster---#

LMainWindow = new Layer
    height: 610
    width: 1000
    borderRadius: 4
LMainWindow.center();
LMainWindow.y -= 25
LMainWindow.x -= 70
