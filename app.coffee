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
LsongDisplay2.y += 10
LsongDisplay2.x -= 20

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
    backgroundColor: "#adbbf0"
LopenSongListButton.center();
LopenSongListButton.x -= 200
LopenSongListButton.y -= 300
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
LnewDisplay.y += 150
LnewDisplay.x += 115


#--------Playbuttons------------------------------------
PlayButton1 = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#770EC7"
    image:"images/background.png"
PlayButton1.x = 0;
PlayButton1.y = 0;


PlayButton2 = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#770EC7"
PlayButton2.x = 30;
PlayButton2.y = 0;

PlayButton3 = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#770EC7"
PlayButton3.x = 60;
PlayButton3.y = 0;

PlayButton4 = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#770EC7"
PlayButton4.x = 90;
PlayButton4.y = 0;

PlayButton5 = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#770EC7"
PlayButton5.x = 120;
PlayButton5.y = 0;

PlayButton6 = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#770EC7"
PlayButton6.x = 150;
PlayButton6.y = 0;
