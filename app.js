var LFastBackBtn, LFastForwardBtn, LMainWindow, LPlayBtn, LbpmDisplay, LbpmLabel, LnewCloseBtn, LnewDisplay, LopenSongListButton, LskipToEndBtn, LskipToStart, Lsong1, Lsong2, Lsong3, LsongDisplay, LsongDisplay2, LsongDisplay3, LtitleDisplay, LvolDownBtn, LvolUpBtn, LvolumeBtn, LwaveForm, LwaveForm2, LwaveForm3, PlayDisplay, ScrollSongList, SliderTimeline, SliderTimeline2, SliderTimeline3, bg, title, view, view2, view3;

bg = new BackgroundLayer({
  backgroundColor: "#eee"
});

title = "Titel/Interpret";

LsongDisplay = new Layer({
  backgroundColor: "#525252",
  width: 300,
  height: 200,
  borderRadius: 4
});

LsongDisplay.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

LsongDisplay.center();

LsongDisplay.y -= 230;

LsongDisplay.x -= 730;

view = new ScrollComponent({
  x: 25,
  y: 15,
  width: 250,
  height: 130
});

view.scrollVertical = false;

LwaveForm = new Layer({
  x: 0,
  y: 20,
  width: 1000,
  height: 110,
  image: "images/wave.png",
  superLayer: view.content
});

LsongDisplay.addSubLayer(view);

SliderTimeline = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline.x += 25;

SliderTimeline.y += 165;

LsongDisplay.addSubLayer(SliderTimeline);

LsongDisplay2 = new Layer({
  backgroundColor: "#525252",
  width: 300,
  height: 200,
  borderRadius: 4
});

LsongDisplay2.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

LsongDisplay2.center();

LsongDisplay2.y -= 25;

LsongDisplay2.x -= 730;

view2 = new ScrollComponent({
  x: 25,
  y: 15,
  width: 250,
  height: 130
});

view2.scrollVertical = false;

LwaveForm2 = new Layer({
  x: 0,
  y: 20,
  width: 1000,
  height: 110,
  image: "images/wave.png",
  superLayer: view2.content
});

LsongDisplay2.addSubLayer(view2);

SliderTimeline2 = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline2.x += 25;

SliderTimeline2.y += 165;

LsongDisplay2.addSubLayer(SliderTimeline2);

LsongDisplay3 = new Layer({
  backgroundColor: "#12bbf0",
  width: 300,
  height: 200,
  borderRadius: 4,
  visible: false
});

LsongDisplay3.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

LsongDisplay3.center();

LsongDisplay3.y += 180;

LsongDisplay3.x -= 730;

view3 = new ScrollComponent({
  x: 25,
  y: 15,
  width: 250,
  height: 130
});

view3.scrollVertical = false;

LwaveForm3 = new Layer({
  x: 0,
  y: 20,
  width: 1000,
  height: 110,
  image: "images/wave.png",
  superLayer: view3.content
});

LsongDisplay3.addSubLayer(view3);

SliderTimeline3 = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline3.x += 25;

SliderTimeline3.y += 165;

LsongDisplay3.addSubLayer(SliderTimeline3);

ScrollSongList = new ScrollComponent({
  width: 300,
  height: 120,
  visible: false
});

ScrollSongList.scrollHorizontal = false;

ScrollSongList.center();

ScrollSongList.x -= 730;

ScrollSongList.y -= 264;

LtitleDisplay = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#525252"
});

LtitleDisplay.center();

LtitleDisplay.x -= 730;

LtitleDisplay.y -= 350;

Utils.labelLayer(LtitleDisplay, title);

Lsong1 = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  superLayer: ScrollSongList.content
});

Utils.labelLayer(Lsong1, "Lied 1");

Lsong1.onTap(function() {
  Utils.labelLayer(LtitleDisplay, "Lied 1");
  return ScrollSongList.visible = false;
});

Lsong2 = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 35,
  superLayer: ScrollSongList.content
});

Utils.labelLayer(Lsong2, "Lied 2");

Lsong2.onTap(function() {
  Utils.labelLayer(LtitleDisplay, "Lied 2");
  return ScrollSongList.visible = false;
});

Lsong3 = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 70,
  superLayer: ScrollSongList.content
});

Utils.labelLayer(Lsong3, "Lied 3");

Lsong3.onTap(function() {
  Utils.labelLayer(LtitleDisplay, "Lied 3");
  return ScrollSongList.visible = false;
});

LopenSongListButton = new Layer({
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#adbbf0"
});

LopenSongListButton.center();

LopenSongListButton.x -= 595;

LopenSongListButton.y -= 350;

LopenSongListButton.onTap(function() {
  if (ScrollSongList.visible === false) {
    return ScrollSongList.visible = true;
  } else {
    return ScrollSongList.visible = false;
  }
});

LnewDisplay = new Layer({
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#525252"
});

LnewDisplay.center();

LnewDisplay.y += 240;

LnewDisplay.x -= 595;

LnewCloseBtn = new Layer({
  x: 270,
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#adbbf0"
});

LnewCloseBtn.visible = false;

LnewDisplay.onTap(function() {
  LsongDisplay3.visible = true;
  LnewCloseBtn.visible = true;
  LsongDisplay3.addSubLayer(LnewCloseBtn);
  return LnewDisplay.visible = false;
});

LnewCloseBtn.onTap(function() {
  LsongDisplay3.visible = false;
  LnewCloseBtn.visible = false;
  return LnewDisplay.visible = true;
});

LskipToEndBtn = new Layer({
  width: 35,
  height: 35,
  x: 230,
  y: 15,
  borderRadius: 4,
  image: "images/icons/endrechts.png"
});

LFastForwardBtn = new Layer({
  width: 35,
  height: 35,
  x: 190,
  y: 15,
  borderRadius: 4,
  image: "images/icons/vor.png"
});

LPlayBtn = new Layer({
  width: 70,
  height: 35,
  x: 115,
  y: 15,
  borderRadius: 4,
  image: "images/icons/play.png"
});

LFastBackBtn = new Layer({
  width: 35,
  height: 35,
  x: 75,
  y: 15,
  borderRadius: 4,
  image: "images/icons/zurück.png"
});

LskipToStart = new Layer({
  width: 35,
  height: 35,
  x: 35,
  y: 15,
  borderRadius: 4,
  image: "images/icons/endlinks.png"
});

LvolumeBtn = new Layer({
  width: 60,
  height: 46,
  x: 220,
  y: 60,
  borderRadius: 6,
  image: "images/icons/lauter.png"
});

LvolUpBtn = new Layer({
  width: 40,
  height: 23,
  x: 175,
  y: 60,
  borderRadius: 6,
  image: "images/icons/pfeilhoch.png"
});

LvolDownBtn = new Layer({
  width: 40,
  height: 23,
  x: 175,
  y: 83,
  borderRadius: 6,
  image: "images/icons/pfeilrunter.png"
});

LbpmDisplay = new Layer({
  width: 70,
  height: 35,
  x: 100,
  y: 65,
  borderRadius: 4,
  backgroundColor: "#ffffff"
});

LbpmLabel = new Layer({
  width: 70,
  height: 35,
  x: 25,
  y: 65,
  borderRadius: 4,
  image: "images/icons/bpm2.png"
});

PlayDisplay = new Layer({
  width: 300,
  height: 120,
  borderRadius: 4,
  backgroundColor: "#525252"
});

PlayDisplay.center();

PlayDisplay.x -= 730;

PlayDisplay.y += 140;

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

LMainWindow = new Layer({
  height: 610,
  width: 1000,
  borderRadius: 4
});

LMainWindow.center();

LMainWindow.y -= 25;

LMainWindow.x -= 70;
