# Prototyping with Framer
# Create a background
bg = new BackgroundLayer

Lbg = new Layer
    width: 1920
    height:1080
    backgroundColor:"#262626"

title = "Titel/Interpret"

# new LsongDisplay
LsongDisplay = new Layer
    backgroundColor: "#525252"
    width: 300
    height: 200
    borderRadius: 4
    y: Align.top(35)

LsongDisplay.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"


#Waveform Scrollimage
view = new ScrollComponent
    x:25
    y:25
    width:250
    height:130
view.scrollVertical = false

#Display content
LwaveForm = new Layer
    x:0
    y:15
    width:9000
    height:110
    image:"images/Deck_1_wave.png"
    superLayer: view.content
LsongDisplay.addSubLayer(view);

#Display Toggle Button
LdisplayToggle = new Layer
    height: 25
    width: 300
    x: 0
    y: 0
LdisplayToggle.html = "WAVE"
LdisplayToggle.backgroundColor = "#656565"
LdisplayToggle.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LsongDisplay.addSubLayer(LdisplayToggle);

#ontap for Display
LdisplayToggle.onTap ->
    if LdisplayToggle.html is "WAVE"
      LdisplayToggle.html = "SPECTRUM"
      LwaveForm.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggle.html = "WAVE"
      LwaveForm.image = "images/Deck_1_wave.png"

SliderTimeline = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline.x += 25
SliderTimeline.y += 170
LsongDisplay.addSubLayer(SliderTimeline)


# new LsongDisplay
LsongDisplay2 = new Layer
    backgroundColor: "#525252"
    y: Align.top(240)
    width: 300
    height: 200
    borderRadius: 4
LsongDisplay2.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"

#Waveform SliderTimeline
view2 = new ScrollComponent
    x:25
    y:25
    width:250
    height:130

view2.scrollVertical = false

LwaveForm2 = new Layer
    x:0
    y:15
    width:9000
    height:110
    image:"images/Deck_1_wave.png"
    superLayer: view2.content
LsongDisplay2.addSubLayer(view2);

#Display Toggle Button
LdisplayToggle2 = new Layer
    height: 25
    width: 300
    x: 0
    y: 0
LdisplayToggle2.html = "WAVE"
LdisplayToggle2.backgroundColor = "#656565"
LdisplayToggle2.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LsongDisplay2.addSubLayer(LdisplayToggle2);

#ontap for Display
LdisplayToggle2.onTap ->
    if LdisplayToggle2.html is "WAVE"
      LdisplayToggle2.html = "SPECTRUM"
      LwaveForm2.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggle2.html = "WAVE"
      LwaveForm2.image = "images/Deck_1_wave.png"

#SliderTimeline
SliderTimeline2 = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline2.x += 25
SliderTimeline2.y += 170

LsongDisplay2.addSubLayer(SliderTimeline2)

# new LsongDisplay
LsongDisplay3 = new Layer
    backgroundColor: "#525252"
    y: Align.top(445)
    width: 300
    height: 200
    borderRadius: 4
    visible: false

LsongDisplay3.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"


#Waveform SliderTimeline
view3 = new ScrollComponent
    x:25
    y:25
    width:250
    height:130

view3.scrollVertical = false

LwaveForm3 = new Layer
    x:0
    y:15
    width:9000
    height:110
    image:"images/Deck_1_wave.png"
    superLayer: view3.content
LsongDisplay3.addSubLayer(view3);

#Display Toggle Button
LdisplayToggle3 = new Layer
    height: 25
    width: 300
    x: 0
    y: 0
LdisplayToggle3.html = "WAVE"
LdisplayToggle3.backgroundColor = "#656565"
LdisplayToggle3.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LsongDisplay3.addSubLayer(LdisplayToggle3);

#ontap for Display
LdisplayToggle3.onTap ->
    if LdisplayToggle3.html is "WAVE"
      LdisplayToggle3.html = "SPECTRUM"
      LwaveForm3.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggle3.html = "WAVE"
      LwaveForm3.image = "images/Deck_1_wave.png"

#SliderTimeline
SliderTimeline3 = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline3.x += 25
SliderTimeline3.y += 170

LsongDisplay3.addSubLayer(SliderTimeline3)

# Create a ScrollComponent
ScrollSongList = new ScrollComponent
    z: 50
    width: 300
    height: 120
    visible: false
ScrollSongList.scrollHorizontal = false


#Titelleiste
LtitleDisplay = new Layer
    width: 300
    height: 30
    borderRadius: 4
    backgroundColor: "#525252"
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
    backgroundColor: "#656565"
    image: "images/icons/ordnerzu.png"
LtitleDisplay.addSubLayer(LopenSongListButton);
LopenSongListButton.x = Align.right

LopenSongListButton.onTap ->
    if ScrollSongList.visible is false
        ScrollSongList.visible = true
        LopenSongListButton.image = "images/icons/ordnerplus.png"
    else
      ScrollSongList.visible = false
      LopenSongListButton.image = "images/icons/ordnerzu.png"


LnewDisplay = new Layer
    x: Align.left(270)
    y: Align.top(570)
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#656565"
    image: "images/icons/neu.png"


LnewCloseBtn = new Layer
      x: 270
      width: 25
      height: 25
      borderRadius: 4
      backgroundColor: "#656565"
      image: "images/icons/close.png"
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
    image:"images/icons/endrechts.png"
LskipToEndBtn.onTap ->
    view.scrollX = 8750
    view2.scrollX = 8750

Afastforward = new Animation
    layer: view
    properties:
        scrollX: 8750
    curve: "linear"
    time: 15

Afastforward2 = new Animation
    layer: view2
    properties:
        scrollX: 8750
    curve: "linear"
    time: 15

LFastForwardBtn = new Layer
    width: 35
    height: 35
    x: 190
    y: 15
    borderRadius: 4
    image:"images/icons/vor.png"

LPlayBtn = new Layer
    width: 70
    height: 35
    x: 115
    y: 15
    borderRadius: 4
    image:"images/icons/play.png"

LPauseBtn = new Layer
    width: 70
    height: 35
    x: 115
    y: 15
    borderRadius: 4
    visible: false
    image:"images/icons/pause.png"

Aplay = new Animation
    layer: view
    properties:
        scrollX: 8750
    curve: "linear"
    time: 30

Aplay2 = new Animation
    layer: view2
    properties:
        scrollX: 8750
    curve: "linear"
    time: 30

AFastBackBtn = new Animation
    layer: view
    properties:
        scrollX: 0
    curve: "linear"
    time: 15

AFastBackBtn2 = new Animation
    layer: view2
    properties:
        scrollX: 0
    curve: "linear"
    time: 15

LFastBackBtn = new Layer
    width: 35
    height: 35
    x: 75
    y: 15
    borderRadius: 4
    image:"images/icons/zurück.png"

LFastForwardBtn.onTap ->
    if LPlayBtn.visible is true
        LPlayBtn.visible = false
        LPauseBtn.visible = true
    Afastforward.start()
    Afastforward2.start()
    Afastforward.onAnimationEnd ->
        LPlayBtn.visible = true
        LPauseBtn.visible = false

LFastBackBtn.onTap ->
    if LPlayBtn.visible is true
        LPlayBtn.visible = false
        LPauseBtn.visible = true
    AFastBackBtn.start()
    AFastBackBtn2.start()
    AFastBackBtn.onAnimationEnd ->
        LPlayBtn.visible = true
        LPauseBtn.visible = false

LPlayBtn.onTap ->
    if LPlayBtn.visible is true
        LPlayBtn.visible = false
        LPauseBtn.visible = true

    Aplay.onAnimationEnd ->
        LPlayBtn.visible = true
        LPauseBtn.visible = false
        Aplay = new Animation
            layer: view
            properties:
                scrollX: 8750
            curve: "linear"
            time: 30

        Aplay2.onAnimationEnd ->
            LPlayBtn.visible = true
            LPauseBtn.visible = false
            Aplay2 = new Animation
                layer: view2
                properties:
                    scrollX: 8750
                curve: "linear"
                time: 30

    Aplay.start()
    Aplay2.start()

LPauseBtn.onTap ->
    if LPauseBtn.visible is true
        LPlayBtn.visible = true
        LPauseBtn.visible = false
    Aplay.stop()
    Aplay2.stop()
    AFastBackBtn.stop()
    AFastBackBtn2.stop()
    Afastforward.stop()
    Afastforward2.stop()

    Aplay = new Animation
        layer: view
        properties:
            scrollX: 8750
        curve: "linear"
        time: (30 - (30/(8750/view.scrollX)))

    Aplay2 = new Animation
        layer: view2
        properties:
            scrollX: 8750
        curve: "linear"
        time: (30 - (30/(8750/view2.scrollX)))

    Afastforward = new Animation
        layer: view
        properties:
            scrollX: 8750
        curve: "linear"
        time: (15 - (15/(8750/view.scrollX)))

    Afastforward2 = new Animation
        layer: view2
        properties:
            scrollX: 8750
        curve: "linear"
        time: (15 - (15/(8750/view2.scrollX)))

    AFastBackBtn = new Animation
        layer: view
        properties:
            scrollX: 0
        curve: "linear"
        time: (0 + (15/(8750/view.scrollX)))

    AFastBackBtn2 = new Animation
        layer: view2
        properties:
            scrollX: 0
        curve: "linear"
        time: (0 + (15/(8750/view2.scrollX)))

LskipToStart = new Layer
    width: 35
    height: 35
    x: 35
    y: 15
    borderRadius: 4
    image:"images/icons/endlinks.png"
LskipToStart.onTap ->
    view.scrollX = 0
    view2.scrollX = 0

LvolumeBtn = new Layer
    width: 60
    height: 46
    x: 220
    y: 60
    borderRadius: 6
    image:"images/icons/lauter.png"

LvolUpBtn = new Layer
    width: 40
    height: 23
    x: 175
    y: 60
    borderRadius: 6
    image:"images/icons/pfeilhoch.png"

LvolDownBtn = new Layer
    width: 40
    height: 23
    x: 175
    y: 83
    borderRadius: 6
    image:"images/icons/pfeilrunter.png"

LbpmDisplay = new Layer
    width: 70
    height: 35
    x: 100
    y: 65
    borderRadius: 4
    backgroundColor: "#ffffff"

LbpmLabel = new Layer
    width: 70
    height: 35
    x: 25
    y: 65
    borderRadius: 4
    image:"images/icons/bpm2.png"

#-----Playbuttons-----#
PlayDisplay = new Layer
    y: Align.top(445)
    width: 300
    height: 120
    borderRadius: 4
    backgroundColor: "#525252"
PlayDisplay.addSubLayer(LskipToEndBtn);
PlayDisplay.addSubLayer(LFastForwardBtn);
PlayDisplay.addSubLayer(LPlayBtn);
PlayDisplay.addSubLayer(LPauseBtn);
PlayDisplay.addSubLayer(LFastBackBtn);
PlayDisplay.addSubLayer(LskipToStart);
PlayDisplay.addSubLayer(LvolumeBtn);
PlayDisplay.addSubLayer(LvolUpBtn);
PlayDisplay.addSubLayer(LvolDownBtn);
PlayDisplay.addSubLayer(LbpmDisplay);
PlayDisplay.addSubLayer(LbpmLabel);

LCtrlParent = new Layer
    width:300
    height: 770
    x: Align.left
    y: Align.top
    backgroundColor: "transparent"
LCtrlParent.y += 132
LCtrlParent.x += 80

LCtrlParent.addSubLayer(LtitleDisplay)
LCtrlParent.addSubLayer(LsongDisplay)
LCtrlParent.addSubLayer(LsongDisplay2)
LCtrlParent.addSubLayer(LsongDisplay3)
LCtrlParent.addSubLayer(PlayDisplay)
LCtrlParent.addSubLayer(LnewDisplay)

#RECHTE SEITE

# new LsongDisplay
LsongDisplayR = new Layer
    backgroundColor: "#525252"
    width: 300
    height: 200
    borderRadius: 4
    y: Align.top(35)

LsongDisplayR.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"


#Waveform SliderTimeline
viewR = new ScrollComponent
    x:25
    y:20
    width:250
    height:130

viewR.scrollVertical = false

LwaveFormR = new Layer
    x:0
    y:20
    width:9000
    height:110
    image:"images/Deck_1_wave.png"
    superLayer: viewR.content
LsongDisplayR.addSubLayer(viewR);

#Display Toggle Button
LdisplayToggleR = new Layer
    height: 25
    width: 300
    x: 0
    y: 0
LdisplayToggleR.html = "WAVE"
LdisplayToggleR.backgroundColor = "#656565"
LdisplayToggleR.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LsongDisplayR.addSubLayer(LdisplayToggleR);

#ontap for Display
LdisplayToggleR.onTap ->
    if LdisplayToggleR.html is "WAVE"
      LdisplayToggleR.html = "SPECTRUM"
      LwaveFormR.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggleR.html = "WAVE"
      LwaveFormR.image = "images/Deck_1_wave.png"

SliderTimelineR = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimelineR.x += 25
SliderTimelineR.y += 165

LsongDisplayR.addSubLayer(SliderTimelineR)

# new LsongDisplay
LsongDisplay2R = new Layer
    backgroundColor: "#525252"
    y: Align.top(240)
    width: 300
    height: 200
    borderRadius: 4

LsongDisplay2R.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"


#Waveform SliderTimeline
view2R = new ScrollComponent
    x:25
    y:20
    width:250
    height:130

view2R.scrollVertical = false

LwaveForm2R = new Layer
    x:0
    y:20
    width:9000
    height:110
    image:"images/Deck_1_wave.png"
    superLayer: view2R.content
LsongDisplay2R.addSubLayer(view2R);

#Display Toggle Button
LdisplayToggle2R = new Layer
    height: 25
    width: 300
    x: 0
    y: 0
LdisplayToggle2R.html = "WAVE"
LdisplayToggle2R.backgroundColor = "656565"
LdisplayToggle2R.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LsongDisplay2R.addSubLayer(LdisplayToggle2R);

#ontap for Display
LdisplayToggle2R.onTap ->
    if LdisplayToggle2R.html is "WAVE"
      LdisplayToggle2R.html = "SPECTRUM"
      LwaveForm2R.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggle2R.html = "WAVE"
      LwaveForm2R.image = "images/Deck_1_wave.png"

#SliderTimeline
SliderTimeline2R = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline2R.x += 25
SliderTimeline2R.y += 170

LsongDisplay2R.addSubLayer(SliderTimeline2R)

# new LsongDisplay
LsongDisplay3R = new Layer
    backgroundColor: "#525252"
    y: Align.top(445)
    width: 300
    height: 200
    borderRadius: 4
    visible: false

LsongDisplay3R.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)"


#Waveform SliderTimeline
view3R = new ScrollComponent
    x:25
    y:20
    width:250
    height:130

view3R.scrollVertical = false

LwaveForm3R = new Layer
    x:0
    y:15
    width:9000
    height:110
    image:"images/Deck_1_wave.png"
    superLayer: view3R.content
LsongDisplay3R.addSubLayer(view3R);

#Display Toggle Button
LdisplayToggle3R = new Layer
    height: 25
    width: 300
    x: 0
    y: 0
LdisplayToggle3R.html = "WAVE"
LdisplayToggle3R.backgroundColor = "656565"
LdisplayToggle3R.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LsongDisplay3R.addSubLayer(LdisplayToggle3R);

#ontap for Display
LdisplayToggle3R.onTap ->
    if LdisplayToggle3R.html is "WAVE"
      LdisplayToggle3R.html = "SPECTRUM"
      LwaveForm3R.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggle3R.html = "WAVE"
      LwaveForm3R.image = "images/Deck_1_wave.png"

#SliderTimeline
SliderTimeline3R = new SliderComponent
    min: 0
    max: 1
    knobSize: 10
    width: 250
    height: 5
SliderTimeline3R.x += 25
SliderTimeline3R.y += 175

LsongDisplay3R.addSubLayer(SliderTimeline3R)

# Create a ScrollComponent
ScrollSongListR = new ScrollComponent
    z: 50
    width: 300
    height: 120
    visible: false
ScrollSongListR.scrollHorizontal = false


#Titelleiste
LtitleDisplayR = new Layer
    width: 300
    height: 30
    borderRadius: 4
    backgroundColor: "#525252"
Utils.labelLayer(LtitleDisplayR,title)
LtitleDisplayR.addSubLayer(ScrollSongListR);
ScrollSongListR.y = Align.top(35)

# Create the content layers
Lsong1R = new Layer
    width: 300
    height: 30
    borderRadius: 4
    #backgroundColor: "#12bbf0"
    superLayer: ScrollSongListR.content
Utils.labelLayer(Lsong1R, "Lied 1");
Lsong1R.onTap ->
    Utils.labelLayer(LtitleDisplayR, "Lied 1")
    ScrollSongListR.visible = false

Lsong2R = new Layer
    width: 300
    height: 30
    borderRadius: 4
    #backgroundColor: "#12bbf0"
    y: 35
    superLayer: ScrollSongListR.content
Utils.labelLayer(Lsong2R, "Lied 2");
Lsong2R.onTap ->
    Utils.labelLayer(LtitleDisplayR, "Lied 2")
    ScrollSongListR.visible = false

Lsong3R = new Layer
    width: 300
    height: 30
    borderRadius: 4
    #backgroundColor: "#12bbf0"
    y: 70
    superLayer: ScrollSongListR.content
Utils.labelLayer(Lsong3R, "Lied 3");
Lsong3R.onTap ->
    Utils.labelLayer(LtitleDisplayR, "Lied 3")
    ScrollSongListR.visible = false

LopenSongListButtonR = new Layer
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#656565"
    image: "images/icons/ordnerzu.png"
LtitleDisplayR.addSubLayer(LopenSongListButtonR);
LopenSongListButtonR.x = Align.right

LopenSongListButtonR.onTap ->
    if ScrollSongListR.visible is false
        LopenSongListButtonR.image = "images/icons/ordnerplus.png"
        ScrollSongListR.visible = true
    else
      LopenSongListButtonR.image = "images/icons/ordnerzu.png"
      ScrollSongListR.visible = false



LnewDisplayR = new Layer
    x: Align.left(270)
    y: Align.top(570)
    width: 30
    height: 30
    borderRadius: 4
    backgroundColor: "#656565"
    image: "images/icons/neu.png"

LnewCloseBtnR = new Layer
      x: 270
      width: 25
      height: 25
      borderRadius: 4
      backgroundColor: "#656565"
      image: "images/icons/close.png"
LnewCloseBtnR.visible = false

LnewDisplayR.onTap ->
    LsongDisplay3R.visible = true
    LnewCloseBtnR.visible = true
    LsongDisplay3R.addSubLayer(LnewCloseBtnR)
    #LsongDisplay3R.visible = true
    LnewDisplayR.visible = false
    PlayDisplayR.y += 205

LnewCloseBtnR.onTap ->
      LsongDisplay3R.visible = false
      LnewCloseBtnR.visible = false
      #LsongDisplay3R.visible = true
      LnewDisplayR.visible = true
      PlayDisplayR.y -= 205

LskipToEndBtnR = new Layer
    width: 35
    height: 35
    x: 230
    y: 15
    borderRadius: 4
    image:"images/icons/endrechts.png"
LskipToEndBtnR.onTap ->
    viewR.scrollX = 8750
    view2R.scrollX = 8750

AfastforwardR = new Animation
    layer: viewR
    properties:
        scrollX: 8750
    curve: "linear"
    time: 15

Afastforward2R = new Animation
    layer: view2R
    properties:
        scrollX: 8750
    curve: "linear"
    time: 15

LFastForwardBtnR = new Layer
    width: 35
    height: 35
    x: 190
    y: 15
    borderRadius: 4
    image:"images/icons/vor.png"

LPlayBtnR = new Layer
    width: 70
    height: 35
    x: 115
    y: 15
    borderRadius: 4
    image:"images/icons/play.png"

LPauseBtnR = new Layer
    width: 70
    height: 35
    x: 115
    y: 15
    borderRadius: 4
    visible: false
    image:"images/icons/pause.png"

AplayR = new Animation
    layer: viewR
    properties:
        scrollX: 8750
    curve: "linear"
    time: 30

Aplay2R = new Animation
    layer: view2R
    properties:
        scrollX: 8750
    curve: "linear"
    time: 30

AFastBackBtnR = new Animation
    layer: viewR
    properties:
        scrollX: 0
    curve: "linear"
    time: 15

AFastBackBtn2R = new Animation
    layer: view2R
    properties:
        scrollX: 0
    curve: "linear"
    time: 15

LFastBackBtnR = new Layer
    width: 35
    height: 35
    x: 75
    y: 15
    borderRadius: 4
    image:"images/icons/zurück.png"

LFastForwardBtnR.onTap ->
    if LPlayBtnR.visible is true
        LPlayBtnR.visible = false
        LPauseBtnR.visible = true
    AfastforwardR.start()
    Afastforward2R.start()
    AfastforwardR.onAnimationEnd ->
        LPlayBtnR.visible = true
        LPauseBtnR.visible = false

LFastBackBtnR.onTap ->
    if LPlayBtnR.visible is true
        LPlayBtnR.visible = false
        LPauseBtnR.visible = true
    AFastBackBtnR.start()
    AFastBackBtn2R.start()
    AFastBackBtnR.onAnimationEnd ->
        LPlayBtnR.visible = true
        LPauseBtnR.visible = false

LPlayBtnR.onTap ->
    if LPlayBtnR.visible is true
        LPlayBtnR.visible = false
        LPauseBtnR.visible = true

    AplayR.onAnimationEnd ->
        LPlayBtnR.visible = true
        LPauseBtnR.visible = false

    AplayR.start()
    Aplay2R.start()

LPauseBtnR.onTap ->
    if LPauseBtnR.visible is true
        LPlayBtnR.visible = true
        LPauseBtnR.visible = false
    AplayR.stop()
    Aplay2R.stop()
    AFastBackBtnR.stop()
    AFastBackBtn2R.stop()
    AfastforwardR.stop()
    Afastforward2R.stop()

    AplayR = new Animation
        layer: viewR
        properties:
            scrollX: 8750
        curve: "linear"
        time: (30 - (30/(8750/viewR.scrollX)))

    Aplay2R = new Animation
        layer: view2R
        properties:
            scrollX: 8750
        curve: "linear"
        time: (30 - (30/(8750/view2R.scrollX)))

    AfastforwardR = new Animation
        layer: viewR
        properties:
            scrollX: 8750
        curve: "linear"
        time: (15 - (15/(8750/viewR.scrollX)))

    Afastforward2R = new Animation
        layer: view2R
        properties:
            scrollX: 8750
        curve: "linear"
        time: (15 - (15/(8750/view2R.scrollX)))

    AFastBackBtnR = new Animation
        layer: viewR
        properties:
            scrollX: 0
        curve: "linear"
        time: (0 + (15/(8750/viewR.scrollX)))

    AFastBackBtn2R = new Animation
        layer: view2R
        properties:
            scrollX: 0
        curve: "linear"
        time: (0 + (15/(8750/view2R.scrollX)))

LskipToStartR = new Layer
    width: 35
    height: 35
    x: 35
    y: 15
    borderRadius: 4
    image:"images/icons/endlinks.png"
LskipToStartR.onTap ->
    viewR.scrollX = 0
    view2R.scrollX = 0

LvolumeBtnR = new Layer
    width: 60
    height: 46
    x: 220
    y: 60
    borderRadius: 6
    image:"images/icons/lauter.png"

LvolUpBtnR = new Layer
    width: 40
    height: 23
    x: 175
    y: 60
    borderRadius: 6
    image:"images/icons/pfeilhoch.png"

LvolDownBtnR = new Layer
    width: 40
    height: 23
    x: 175
    y: 83
    borderRadius: 6
    image:"images/icons/pfeilrunter.png"

LbpmDisplayR = new Layer
    width: 70
    height: 35
    x: 100
    y: 65
    borderRadius: 4
    backgroundColor: "#ffffff"

LbpmLabelR = new Layer
    width: 70
    height: 35
    x: 25
    y: 65
    borderRadius: 4
    image:"images/icons/bpm2.png"

#-----Playbuttons-----#
PlayDisplayR = new Layer
    y: Align.top(445)
    width: 300
    height: 120
    borderRadius: 4
    backgroundColor: "#525252"
PlayDisplayR.addSubLayer(LskipToEndBtnR);
PlayDisplayR.addSubLayer(LFastForwardBtnR);
PlayDisplayR.addSubLayer(LFastForwardBtnR);
PlayDisplayR.addSubLayer(LFastBackBtnR);
PlayDisplayR.addSubLayer(LskipToStartR);
PlayDisplayR.addSubLayer(LPlayBtnR);
PlayDisplayR.addSubLayer(LPauseBtnR);
PlayDisplayR.addSubLayer(LvolumeBtnR);
PlayDisplayR.addSubLayer(LvolUpBtnR);
PlayDisplayR.addSubLayer(LvolDownBtnR);
PlayDisplayR.addSubLayer(LbpmDisplayR);
PlayDisplayR.addSubLayer(LbpmLabelR);

LCtrlParentR = new Layer
    width:300
    height: 770
    x: Align.left
    y: Align.top
    backgroundColor: "transparent"
LCtrlParentR.y += 132
LCtrlParentR.x += 1540

LCtrlParentR.addSubLayer(LtitleDisplayR)
LCtrlParentR.addSubLayer(LsongDisplayR)
LCtrlParentR.addSubLayer(LsongDisplay2R)
LCtrlParentR.addSubLayer(LsongDisplay3R)
LCtrlParentR.addSubLayer(PlayDisplayR)
LCtrlParentR.addSubLayer(LnewDisplayR)

#----Mitte Fenster---#

LfirstTrack = new Layer
    width: 1150
    height: 250
    backgroundColor: "#656565"
    x: Align.left
    y: Align.top

LSecondTrack = new Layer
    backgroundColor: "#656565"
    width: 1150
    height: 250
    x: Align.left
    y: Align.top(255)

LMuteBar = new Layer
    backgroundColor: "transparent"
    height: 180
    width: 30
    x: Align.left(25)
    y: Align.top(35)
LfirstTrack.addSubLayer(LMuteBar)

LMuteBtn = new Layer
    backgroundColor: "#525252"
    y: 40
    width: 30
    height: 30
    borderRadius: 4
    image:"images/icons/mute.png"
LMuteBar.addSubLayer(LMuteBtn)

LMagPlus = new Layer
    backgroundColor: "#525252"
    width: 30
    height: 30
    y: 75
    borderRadius: 4
    image:"images/icons/lupeplus.png"
LMuteBar.addSubLayer(LMagPlus)

LMagPlus.onTap ->
    if LmainWaveForm.image is "images/Deck_1_bpm.png"
      LmainWaveForm.image = "images/Deck_1_bpm_klein.png"
    if LmainWaveForm.image is "images/Deck_1_wave.png"
      LmainWaveForm.image = "images/Deck_1_klein.png"
    if LmainWaveForm.image is "images/Deck_1_gross.png"
      LmainWaveForm.image = "images/Deck_1_wave.png"
    if LmainWaveForm.image is "images/Deck_1_bpm_gross.png"
      LmainWaveForm.image = "images/Deck_1_bpm.png"

LMagMinus = new Layer
    backgroundColor: "#525252"
    width: 30
    height: 30
    y: 110
    borderRadius: 4
    image:"images/icons/lupeminus.png"
LMuteBar.addSubLayer(LMagMinus)

LMagMinus.onTap ->
    if LmainWaveForm.image is "images/Deck_1_bpm.png"
      LmainWaveForm.image = "images/Deck_1_bpm_gross.png"
    if LmainWaveForm.image is "images/Deck_1_wave.png"
      LmainWaveForm.image = "images/Deck_1_gross.png"
    if LmainWaveForm.image is "images/Deck_1_klein.png"
      LmainWaveForm.image = "images/Deck_1_wave.png"
    if LmainWaveForm.image is "images/Deck_1_bpm_klein.png"
      LmainWaveForm.image = "images/Deck_1_bpm.png"

Lexpand = new Layer
    backgroundColor: "#525252"
    width: 30
    height: 30
    y: 145
    borderRadius: 4
    image:"images/icons/grpfeile.png"
LMuteBar.addSubLayer(Lexpand)

LMagMinus = new Layer
    backgroundColor: "#525252"
    width: 30
    height: 30
    y: 110
    borderRadius: 4
    image:"images/icons/lupeminus.png"
LMuteBar.addSubLayer(LMagMinus)

LMuteBar2 = new Layer
    backgroundColor: "transparent"
    height: 180
    width: 30
    x: Align.left(25)
    y: Align.top(35)
LSecondTrack.addSubLayer(LMuteBar2)

LMuteBtn2 = new Layer
    backgroundColor: "#525252"
    y: 40
    width: 30
    height: 30
    borderRadius: 4
    image:"images/icons/mute.png"
LMuteBar2.addSubLayer(LMuteBtn2)

LMagPlus2 = new Layer
    backgroundColor: "#525252"
    width: 30
    height: 30
    y: 75
    borderRadius: 4
    image:"images/icons/lupeplus.png"
LMuteBar2.addSubLayer(LMagPlus2)

LMagPlus2.onTap ->
    if LmainWaveForm2.image is "images/Deck_1_bpm.png"
      LmainWaveForm2.image = "images/Deck_1_bpm_klein.png"
    if LmainWaveForm2.image is "images/Deck_1_wave.png"
      LmainWaveForm2.image = "images/Deck_1_klein.png"
    if LmainWaveForm2.image is "images/Deck_1_gross.png"
      LmainWaveForm2.image = "images/Deck_1_wave.png"
    if LmainWaveForm2.image is "images/Deck_1_bpm_gross.png"
      LmainWaveForm2.image = "images/Deck_1_bpm.png"

LMagMinus2 = new Layer
    backgroundColor: "#525252"
    width: 30
    height: 30
    y: 110
    borderRadius: 4
    image:"images/icons/lupeminus.png"
LMuteBar2.addSubLayer(LMagMinus2)

LMagMinus2.onTap ->
    if LmainWaveForm2.image is "images/Deck_1_bpm.png"
      LmainWaveForm2.image = "images/Deck_1_bpm_gross.png"
    if LmainWaveForm2.image is "images/Deck_1_wave.png"
      LmainWaveForm2.image = "images/Deck_1_gross.png"
    if LmainWaveForm2.image is "images/Deck_1_klein.png"
      LmainWaveForm2.image = "images/Deck_1_wave.png"
    if LmainWaveForm2.image is "images/Deck_1_bpm_klein.png"
      LmainWaveForm2.image = "images/Deck_1_bpm.png"

LMainWindow = new Layer
    height: 610
    width: 1150
    borderRadius: 4
    x: Align.left
    y: Align.top
    backgroundColor: "transparent"
LMainWindow.y += 167
LMainWindow.x += 385
LMainWindow.addSubLayer(LfirstTrack)
LMainWindow.addSubLayer(LSecondTrack)

viewMain = new ScrollComponent
    x:60
    y:25
    width:1070
    height:200

viewMain.scrollVertical = false

LmainWaveForm = new Layer
    x:0
    y:20
    width:9000
    height:200
    image:"images/Deck_1_wave.png"
    superLayer: viewMain.content
LfirstTrack.addSubLayer(viewMain)

#Display Toggle Button
LdisplayToggleM = new Layer
    height: 25
    width: 1150
    x: 0
    y: 0
LdisplayToggleM.html = "WAVE"
LdisplayToggleM.backgroundColor = "#525252"
LdisplayToggleM.style=
  fontSize: "15px"
  textAlign: "center"
  color: "black"
  fontWeight: "bold"
LfirstTrack.addSubLayer(LdisplayToggleM);

#ontap for Display
LdisplayToggleM.onTap ->
    if LdisplayToggleM.html is "WAVE"
      LdisplayToggleM.html = "SPECTRUM"
      LmainWaveForm.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggleM.html = "WAVE"
      LmainWaveForm.image = "images/Deck_1_wave.png"

viewMain2 = new ScrollComponent
    x:60
    y:25
    width:1070
    height:200

viewMain2.scrollVertical = false

LmainWaveForm2 = new Layer
    x:0
    y:20
    width:9000
    height:200
    image:"images/Deck_1_wave.png"
    superLayer: viewMain2.content
LSecondTrack.addSubLayer(viewMain2)

#Display Toggle Button
LdisplayToggle2M = new Layer
    height: 25
    width: 1150
    x: 0
    y: 0
LdisplayToggle2M.html = "WAVE"
LdisplayToggle2M.backgroundColor = "#525252"
LdisplayToggle2M.style=
    fontSize: "15px"
    textAlign: "center"
    color: "black"
    fontWeight: "bold"
LSecondTrack.addSubLayer(LdisplayToggle2M);

#ontap for Display
LdisplayToggle2M.onTap ->
    if LdisplayToggle2M.html is "WAVE"
      LdisplayToggle2M.html = "SPECTRUM"
      LmainWaveForm2.image = "images/Deck_1_bpm.png"
    else
      LdisplayToggle2M.html = "WAVE"
      LmainWaveForm2.image = "images/Deck_1_wave.png"

LMainControl = new Layer
    width: 1150
    height: 100
    x: Align.left
    y: Align.top(510)
LMainWindow.addSubLayer(LMainControl)


LMainControlBtns = new Layer
    width: 225
    height: 35
    backgroundColor: "transparent"

LMainControl.addSubLayer(LMainControlBtns)

LskipToEndBtnM = new Layer
    width: 35
    height: 35
    x: 190
    borderRadius: 4
    image:"images/icons/endrechts.png"

LFastForwardBtnM = new Layer
    width: 35
    height: 35
    x: 150
    borderRadius: 4
    image:"images/icons/vor.png"

LPlayBtnM = new Layer
    width: 70
    height: 35
    x: 80
    borderRadius: 4
    image:"images/icons/play.png"

LFastBackBtnM = new Layer
    width: 35
    height: 35
    x: 40
    borderRadius: 4
    image:"images/icons/zurück.png"

LskipToStartM = new Layer
    width: 35
    height: 35
    borderRadius: 4
    image:"images/icons/endlinks.png"

LMainControlBtns.addSubLayer(LskipToStartM);
LMainControlBtns.addSubLayer(LFastBackBtnM);
LMainControlBtns.addSubLayer(LPlayBtnM);
LMainControlBtns.addSubLayer(LFastForwardBtnM);
LMainControlBtns.addSubLayer(LskipToEndBtnM);

LMainControlBtns.x += 463
LMainControlBtns.y += 10
