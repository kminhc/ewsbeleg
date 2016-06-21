var LCtrlParent, LCtrlParentR, LFastBackBtn, LFastBackBtnM, LFastBackBtnR, LFastForwardBtn, LFastForwardBtnM, LFastForwardBtnR, LMagMinus, LMagMinus2, LMagPlus, LMagPlus2, LMainControl, LMainControlBtns, LMainWindow, LMuteBar, LMuteBar2, LMuteBtn, LMuteBtn2, LPlayBtn, LPlayBtnM, LPlayBtnR, LSecondTrack, Lbg, LbpmDisplay, LbpmDisplayR, LbpmLabel, LbpmLabelR, LdisplayToggle, LdisplayToggle2, LdisplayToggle2M, LdisplayToggle2R, LdisplayToggle3, LdisplayToggle3R, LdisplayToggleM, LdisplayToggleR, LfirstTrack, LmainWaveForm, LmainWaveForm2, LnewCloseBtn, LnewCloseBtnR, LnewDisplay, LnewDisplayR, LopenSongListButton, LopenSongListButtonR, LskipToEndBtn, LskipToEndBtnM, LskipToEndBtnR, LskipToStart, LskipToStartM, LskipToStartR, Lsong1, Lsong1R, Lsong2, Lsong2R, Lsong3, Lsong3R, LsongDisplay, LsongDisplay2, LsongDisplay2R, LsongDisplay3, LsongDisplay3R, LsongDisplayR, LtitleDisplay, LtitleDisplayR, LvolDownBtn, LvolDownBtnR, LvolUpBtn, LvolUpBtnR, LvolumeBtn, LvolumeBtnR, LwaveForm, LwaveForm2, LwaveForm2R, LwaveForm3, LwaveForm3R, LwaveFormR, PlayDisplay, PlayDisplayR, ScrollSongList, ScrollSongListR, SliderTimeline, SliderTimeline2, SliderTimeline2R, SliderTimeline3, SliderTimeline3R, SliderTimelineR, bg, title, view, view2, view2R, view3, view3R, viewMain, viewMain2, viewR;

bg = new BackgroundLayer;

Lbg = new Layer({
  width: 1920,
  height: 1080,
  backgroundColor: "#262626"
});

title = "Titel/Interpret";

LsongDisplay = new Layer({
  backgroundColor: "#525252",
  width: 300,
  height: 200,
  borderRadius: 4,
  y: Align.top(35)
});

LsongDisplay.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

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
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view.content
});

LsongDisplay.addSubLayer(view);

LdisplayToggle = new Layer({
  height: 25,
  width: 60,
  x: 25,
  y: 5
});

LdisplayToggle.html = "Waveform";

LdisplayToggle.backgroundColor = "transparent";

LdisplayToggle.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LsongDisplay.addSubLayer(LdisplayToggle);

LdisplayToggle.onTap(function() {
  if (LdisplayToggle.html === "Waveform") {
    LdisplayToggle.html = "Spectrum";
    return LwaveForm.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle.html = "Waveform";
    return LwaveForm.image = "images/Deck_1_wave.png";
  }
});

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
  y: Align.top(240),
  width: 300,
  height: 200,
  borderRadius: 4
});

LsongDisplay2.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

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
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view2.content
});

LsongDisplay2.addSubLayer(view2);

LdisplayToggle2 = new Layer({
  height: 25,
  width: 60,
  x: 25,
  y: 5
});

LdisplayToggle2.html = "Waveform";

LdisplayToggle2.backgroundColor = "transparent";

LdisplayToggle2.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LsongDisplay2.addSubLayer(LdisplayToggle2);

LdisplayToggle2.onTap(function() {
  if (LdisplayToggle2.html === "Waveform") {
    LdisplayToggle2.html = "Spectrum";
    return LwaveForm2.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle2.html = "Waveform";
    return LwaveForm2.image = "images/Deck_1_wave.png";
  }
});

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
  backgroundColor: "#525252",
  y: Align.top(445),
  width: 300,
  height: 200,
  borderRadius: 4,
  visible: false
});

LsongDisplay3.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

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
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view3.content
});

LsongDisplay3.addSubLayer(view3);

LdisplayToggle3 = new Layer({
  height: 25,
  width: 60,
  x: 25,
  y: 5
});

LdisplayToggle3.html = "Waveform";

LdisplayToggle3.backgroundColor = "transparent";

LdisplayToggle3.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LsongDisplay3.addSubLayer(LdisplayToggle3);

LdisplayToggle3.onTap(function() {
  if (LdisplayToggle3.html === "Waveform") {
    LdisplayToggle3.html = "Spectrum";
    return LwaveForm3.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle3.html = "Waveform";
    return LwaveForm3.image = "images/Deck_1_wave.png";
  }
});

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
  z: 50,
  width: 300,
  height: 120,
  visible: false
});

ScrollSongList.scrollHorizontal = false;

LtitleDisplay = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#525252"
});

Utils.labelLayer(LtitleDisplay, title);

LtitleDisplay.addSubLayer(ScrollSongList);

ScrollSongList.y = Align.top(35);

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
  backgroundColor: "#656565",
  image: "images/icons/ordnerzu.png"
});

LtitleDisplay.addSubLayer(LopenSongListButton);

LopenSongListButton.x = Align.right;

LopenSongListButton.onTap(function() {
  if (ScrollSongList.visible === false) {
    ScrollSongList.visible = true;
    return LopenSongListButton.image = "images/icons/ordnerplus.png";
  } else {
    ScrollSongList.visible = false;
    return LopenSongListButton.image = "images/icons/ordnerzu.png";
  }
});

LnewDisplay = new Layer({
  x: Align.left(270),
  y: Align.top(570),
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#656565",
  image: "images/icons/neu.png"
});

LnewCloseBtn = new Layer({
  x: 270,
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#656565",
  image: "images/icons/close.png"
});

LnewCloseBtn.visible = false;

LnewDisplay.onTap(function() {
  LsongDisplay3.visible = true;
  LnewCloseBtn.visible = true;
  LsongDisplay3.addSubLayer(LnewCloseBtn);
  LnewDisplay.visible = false;
  return PlayDisplay.y += 205;
});

LnewCloseBtn.onTap(function() {
  LsongDisplay3.visible = false;
  LnewCloseBtn.visible = false;
  LnewDisplay.visible = true;
  return PlayDisplay.y -= 205;
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
  y: Align.top(445),
  width: 300,
  height: 120,
  borderRadius: 4,
  backgroundColor: "#525252"
});

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

LCtrlParent = new Layer({
  width: 300,
  height: 770,
  x: Align.left,
  y: Align.top,
  backgroundColor: "transparent"
});

LCtrlParent.y += 132;

LCtrlParent.x += 80;

LCtrlParent.addSubLayer(LtitleDisplay);

LCtrlParent.addSubLayer(LsongDisplay);

LCtrlParent.addSubLayer(LsongDisplay2);

LCtrlParent.addSubLayer(LsongDisplay3);

LCtrlParent.addSubLayer(PlayDisplay);

LCtrlParent.addSubLayer(LnewDisplay);

LsongDisplayR = new Layer({
  backgroundColor: "#525252",
  width: 300,
  height: 200,
  borderRadius: 4,
  y: Align.top(35)
});

LsongDisplayR.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

viewR = new ScrollComponent({
  x: 25,
  y: 15,
  width: 250,
  height: 130
});

viewR.scrollVertical = false;

LwaveFormR = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: viewR.content
});

LsongDisplayR.addSubLayer(viewR);

LdisplayToggleR = new Layer({
  height: 25,
  width: 60,
  x: 25,
  y: 5
});

LdisplayToggleR.html = "Waveform";

LdisplayToggleR.backgroundColor = "transparent";

LdisplayToggleR.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LsongDisplayR.addSubLayer(LdisplayToggleR);

LdisplayToggleR.onTap(function() {
  if (LdisplayToggleR.html === "Waveform") {
    LdisplayToggleR.html = "Spectrum";
    return LwaveFormR.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggleR.html = "Waveform";
    return LwaveFormR.image = "images/Deck_1_wave.png";
  }
});

SliderTimelineR = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimelineR.x += 25;

SliderTimelineR.y += 165;

LsongDisplayR.addSubLayer(SliderTimelineR);

LsongDisplay2R = new Layer({
  backgroundColor: "#525252",
  y: Align.top(240),
  width: 300,
  height: 200,
  borderRadius: 4
});

LsongDisplay2R.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

view2R = new ScrollComponent({
  x: 25,
  y: 15,
  width: 250,
  height: 130
});

view2R.scrollVertical = false;

LwaveForm2R = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view2R.content
});

LsongDisplay2R.addSubLayer(view2R);

LdisplayToggle2R = new Layer({
  height: 25,
  width: 60,
  x: 25,
  y: 5
});

LdisplayToggle2R.html = "Waveform";

LdisplayToggle2R.backgroundColor = "transparent";

LdisplayToggle2R.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LsongDisplay2R.addSubLayer(LdisplayToggle2R);

LdisplayToggle2R.onTap(function() {
  if (LdisplayToggle2R.html === "Waveform") {
    LdisplayToggle2R.html = "Spectrum";
    return LwaveForm2R.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle2R.html = "Waveform";
    return LwaveForm2R.image = "images/Deck_1_wave.png";
  }
});

SliderTimeline2R = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline2R.x += 25;

SliderTimeline2R.y += 165;

LsongDisplay2R.addSubLayer(SliderTimeline2R);

LsongDisplay3R = new Layer({
  backgroundColor: "#525252",
  y: Align.top(445),
  width: 300,
  height: 200,
  borderRadius: 4,
  visible: false
});

LsongDisplay3R.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

view3R = new ScrollComponent({
  x: 25,
  y: 15,
  width: 250,
  height: 130
});

view3R.scrollVertical = false;

LwaveForm3R = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view3R.content
});

LsongDisplay3R.addSubLayer(view3R);

LdisplayToggle3R = new Layer({
  height: 25,
  width: 60,
  x: 25,
  y: 5
});

LdisplayToggle3R.html = "Waveform";

LdisplayToggle3R.backgroundColor = "transparent";

LdisplayToggle3R.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LsongDisplay3R.addSubLayer(LdisplayToggle3R);

LdisplayToggle3R.onTap(function() {
  if (LdisplayToggle3R.html === "Waveform") {
    LdisplayToggle3R.html = "Spectrum";
    return LwaveForm3R.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle3R.html = "Waveform";
    return LwaveForm3R.image = "images/Deck_1_wave.png";
  }
});

SliderTimeline3R = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline3R.x += 25;

SliderTimeline3R.y += 165;

LsongDisplay3R.addSubLayer(SliderTimeline3R);

ScrollSongListR = new ScrollComponent({
  z: 50,
  width: 300,
  height: 120,
  visible: false
});

ScrollSongListR.scrollHorizontal = false;

LtitleDisplayR = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#525252"
});

Utils.labelLayer(LtitleDisplayR, title);

LtitleDisplayR.addSubLayer(ScrollSongListR);

ScrollSongListR.y = Align.top(35);

Lsong1R = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  superLayer: ScrollSongListR.content
});

Utils.labelLayer(Lsong1R, "Lied 1");

Lsong1R.onTap(function() {
  Utils.labelLayer(LtitleDisplayR, "Lied 1");
  return ScrollSongListR.visible = false;
});

Lsong2R = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 35,
  superLayer: ScrollSongListR.content
});

Utils.labelLayer(Lsong2R, "Lied 2");

Lsong2R.onTap(function() {
  Utils.labelLayer(LtitleDisplayR, "Lied 2");
  return ScrollSongListR.visible = false;
});

Lsong3R = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 70,
  superLayer: ScrollSongListR.content
});

Utils.labelLayer(Lsong3R, "Lied 3");

Lsong3R.onTap(function() {
  Utils.labelLayer(LtitleDisplayR, "Lied 3");
  return ScrollSongListR.visible = false;
});

LopenSongListButtonR = new Layer({
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#656565",
  image: "images/icons/ordnerzu.png"
});

LtitleDisplayR.addSubLayer(LopenSongListButtonR);

LopenSongListButtonR.x = Align.right;

LopenSongListButtonR.onTap(function() {
  if (ScrollSongListR.visible === false) {
    LopenSongListButtonR.image = "images/icons/ordnerplus.png";
    return ScrollSongListR.visible = true;
  } else {
    LopenSongListButtonR.image = "images/icons/ordnerzu.png";
    return ScrollSongListR.visible = false;
  }
});

LnewDisplayR = new Layer({
  x: Align.left(270),
  y: Align.top(570),
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#656565",
  image: "images/icons/neu.png"
});

LnewCloseBtnR = new Layer({
  x: 270,
  width: 30,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#656565",
  image: "images/icons/close.png"
});

LnewCloseBtnR.visible = false;

LnewDisplayR.onTap(function() {
  LsongDisplay3R.visible = true;
  LnewCloseBtnR.visible = true;
  LsongDisplay3R.addSubLayer(LnewCloseBtnR);
  LnewDisplayR.visible = false;
  return PlayDisplayR.y += 205;
});

LnewCloseBtnR.onTap(function() {
  LsongDisplay3R.visible = false;
  LnewCloseBtnR.visible = false;
  LnewDisplayR.visible = true;
  return PlayDisplayR.y -= 205;
});

LskipToEndBtnR = new Layer({
  width: 35,
  height: 35,
  x: 230,
  y: 15,
  borderRadius: 4,
  image: "images/icons/endrechts.png"
});

LFastForwardBtnR = new Layer({
  width: 35,
  height: 35,
  x: 190,
  y: 15,
  borderRadius: 4,
  image: "images/icons/vor.png"
});

LPlayBtnR = new Layer({
  width: 70,
  height: 35,
  x: 115,
  y: 15,
  borderRadius: 4,
  image: "images/icons/play.png"
});

LFastBackBtnR = new Layer({
  width: 35,
  height: 35,
  x: 75,
  y: 15,
  borderRadius: 4,
  image: "images/icons/zurück.png"
});

LskipToStartR = new Layer({
  width: 35,
  height: 35,
  x: 35,
  y: 15,
  borderRadius: 4,
  image: "images/icons/endlinks.png"
});

LvolumeBtnR = new Layer({
  width: 60,
  height: 46,
  x: 220,
  y: 60,
  borderRadius: 6,
  image: "images/icons/lauter.png"
});

LvolUpBtnR = new Layer({
  width: 40,
  height: 23,
  x: 175,
  y: 60,
  borderRadius: 6,
  image: "images/icons/pfeilhoch.png"
});

LvolDownBtnR = new Layer({
  width: 40,
  height: 23,
  x: 175,
  y: 83,
  borderRadius: 6,
  image: "images/icons/pfeilrunter.png"
});

LbpmDisplayR = new Layer({
  width: 70,
  height: 35,
  x: 100,
  y: 65,
  borderRadius: 4,
  backgroundColor: "#ffffff"
});

LbpmLabelR = new Layer({
  width: 70,
  height: 35,
  x: 25,
  y: 65,
  borderRadius: 4,
  image: "images/icons/bpm2.png"
});

PlayDisplayR = new Layer({
  y: Align.top(445),
  width: 300,
  height: 120,
  borderRadius: 4,
  backgroundColor: "#525252"
});

PlayDisplayR.addSubLayer(LskipToEndBtnR);

PlayDisplayR.addSubLayer(LFastForwardBtnR);

PlayDisplayR.addSubLayer(LFastForwardBtnR);

PlayDisplayR.addSubLayer(LFastBackBtnR);

PlayDisplayR.addSubLayer(LskipToStartR);

PlayDisplayR.addSubLayer(LPlayBtnR);

PlayDisplayR.addSubLayer(LvolumeBtnR);

PlayDisplayR.addSubLayer(LvolUpBtnR);

PlayDisplayR.addSubLayer(LvolDownBtnR);

PlayDisplayR.addSubLayer(LbpmDisplayR);

PlayDisplayR.addSubLayer(LbpmLabelR);

LCtrlParentR = new Layer({
  width: 300,
  height: 770,
  x: Align.left,
  y: Align.top,
  backgroundColor: "transparent"
});

LCtrlParentR.y += 132;

LCtrlParentR.x += 1540;

LCtrlParentR.addSubLayer(LtitleDisplayR);

LCtrlParentR.addSubLayer(LsongDisplayR);

LCtrlParentR.addSubLayer(LsongDisplay2R);

LCtrlParentR.addSubLayer(LsongDisplay3R);

LCtrlParentR.addSubLayer(PlayDisplayR);

LCtrlParentR.addSubLayer(LnewDisplayR);

LfirstTrack = new Layer({
  width: 1150,
  height: 250,
  x: Align.left,
  y: Align.top
});

LSecondTrack = new Layer({
  width: 1150,
  height: 250,
  x: Align.left,
  y: Align.top(255)
});

LMuteBar = new Layer({
  backgroundColor: "transparent",
  height: 180,
  width: 30,
  x: Align.left(25),
  y: Align.top(35)
});

LfirstTrack.addSubLayer(LMuteBar);

LMuteBtn = new Layer({
  backgroundColor: "#525252",
  y: 40,
  width: 30,
  height: 30,
  borderRadius: 4,
  image: "images/icons/mute.png"
});

LMuteBar.addSubLayer(LMuteBtn);

LMagPlus = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 75,
  borderRadius: 4,
  image: "images/icons/lupeplus.png"
});

LMuteBar.addSubLayer(LMagPlus);

LMagPlus.onTap(function() {
  if (LmainWaveForm.image === "images/Deck_1_bpm.png") {
    LmainWaveForm.image = "images/Deck_1_bpm_klein.png";
  }
  if (LmainWaveForm.image === "images/Deck_1_wave.png") {
    LmainWaveForm.image = "images/Deck_1_klein.png";
  }
  if (LmainWaveForm.image === "images/Deck_1_gross.png") {
    LmainWaveForm.image = "images/Deck_1_wave.png";
  }
  if (LmainWaveForm.image === "images/Deck_1_bpm_gross.png") {
    return LmainWaveForm.image = "images/Deck_1_bpm.png";
  }
});

LMagMinus = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 110,
  borderRadius: 4,
  image: "images/icons/lupeminus.png"
});

LMuteBar.addSubLayer(LMagMinus);

LMagMinus.onTap(function() {
  if (LmainWaveForm.image === "images/Deck_1_bpm.png") {
    LmainWaveForm.image = "images/Deck_1_bpm_gross.png";
  }
  if (LmainWaveForm.image === "images/Deck_1_wave.png") {
    LmainWaveForm.image = "images/Deck_1_gross.png";
  }
  if (LmainWaveForm.image === "images/Deck_1_klein.png") {
    LmainWaveForm.image = "images/Deck_1_wave.png";
  }
  if (LmainWaveForm.image === "images/Deck_1_bpm_klein.png") {
    return LmainWaveForm.image = "images/Deck_1_bpm.png";
  }
});

LMuteBar2 = new Layer({
  backgroundColor: "transparent",
  height: 180,
  width: 30,
  x: Align.left(25),
  y: Align.top(35)
});

LSecondTrack.addSubLayer(LMuteBar2);

LMuteBtn2 = new Layer({
  backgroundColor: "#525252",
  y: 40,
  width: 30,
  height: 30,
  borderRadius: 4,
  image: "images/icons/mute.png"
});

LMuteBar2.addSubLayer(LMuteBtn2);

LMagPlus2 = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 75,
  borderRadius: 4,
  image: "images/icons/lupeplus.png"
});

LMuteBar2.addSubLayer(LMagPlus2);

LMagPlus2.onTap(function() {
  if (LmainWaveForm2.image === "images/Deck_1_bpm.png") {
    LmainWaveForm2.image = "images/Deck_1_bpm_klein.png";
  }
  if (LmainWaveForm2.image === "images/Deck_1_wave.png") {
    LmainWaveForm2.image = "images/Deck_1_klein.png";
  }
  if (LmainWaveForm2.image === "images/Deck_1_gross.png") {
    LmainWaveForm2.image = "images/Deck_1_wave.png";
  }
  if (LmainWaveForm2.image === "images/Deck_1_bpm_gross.png") {
    return LmainWaveForm2.image = "images/Deck_1_bpm.png";
  }
});

LMagMinus2 = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 110,
  borderRadius: 4,
  image: "images/icons/lupeminus.png"
});

LMuteBar2.addSubLayer(LMagMinus2);

LMagMinus2.onTap(function() {
  if (LmainWaveForm2.image === "images/Deck_1_bpm.png") {
    LmainWaveForm2.image = "images/Deck_1_bpm_gross.png";
  }
  if (LmainWaveForm2.image === "images/Deck_1_wave.png") {
    LmainWaveForm2.image = "images/Deck_1_gross.png";
  }
  if (LmainWaveForm2.image === "images/Deck_1_klein.png") {
    LmainWaveForm2.image = "images/Deck_1_wave.png";
  }
  if (LmainWaveForm2.image === "images/Deck_1_bpm_klein.png") {
    return LmainWaveForm2.image = "images/Deck_1_bpm.png";
  }
});

LMainWindow = new Layer({
  height: 610,
  width: 1150,
  borderRadius: 4,
  x: Align.left,
  y: Align.top
});

LMainWindow.y += 167;

LMainWindow.x += 385;

LMainWindow.addSubLayer(LfirstTrack);

LMainWindow.addSubLayer(LSecondTrack);

viewMain = new ScrollComponent({
  x: 60,
  y: 15,
  width: 1070,
  height: 200
});

viewMain.scrollVertical = false;

LmainWaveForm = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 200,
  image: "images/Deck_1_wave.png",
  superLayer: viewMain.content
});

LfirstTrack.addSubLayer(viewMain);

LdisplayToggleM = new Layer({
  height: 25,
  width: 60,
  x: 55,
  y: 5
});

LdisplayToggleM.html = "Waveform";

LdisplayToggleM.backgroundColor = "transparent";

LdisplayToggleM.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LfirstTrack.addSubLayer(LdisplayToggleM);

LdisplayToggleM.onTap(function() {
  if (LdisplayToggleM.html === "Waveform") {
    LdisplayToggleM.html = "Spectrum";
    return LmainWaveForm.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggleM.html = "Waveform";
    return LmainWaveForm.image = "images/Deck_1_wave.png";
  }
});

viewMain2 = new ScrollComponent({
  x: 60,
  y: 15,
  width: 1070,
  height: 200
});

viewMain2.scrollVertical = false;

LmainWaveForm2 = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 200,
  image: "images/Deck_1_wave.png",
  superLayer: viewMain2.content
});

LSecondTrack.addSubLayer(viewMain2);

LdisplayToggle2M = new Layer({
  height: 25,
  width: 60,
  x: 55,
  y: 5
});

LdisplayToggle2M.html = "Waveform";

LdisplayToggle2M.backgroundColor = "transparent";

LdisplayToggle2M.style = {
  fontFamily: "Futura-CondensedExtraBold",
  fontSize: "25px",
  textAlign: "center",
  color: "black"
};

LSecondTrack.addSubLayer(LdisplayToggle2M);

LdisplayToggle2M.onTap(function() {
  if (LdisplayToggle2M.html === "Waveform") {
    LdisplayToggle2M.html = "Spectrum";
    return LmainWaveForm2.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle2M.html = "Waveform";
    return LmainWaveForm2.image = "images/Deck_1_wave.png";
  }
});

LMainControl = new Layer({
  width: 1150,
  height: 100,
  x: Align.left,
  y: Align.top(510)
});

LMainWindow.addSubLayer(LMainControl);

LMainControlBtns = new Layer({
  width: 225,
  height: 35,
  backgroundColor: "transparent"
});

LMainControl.addSubLayer(LMainControlBtns);

LskipToEndBtnM = new Layer({
  width: 35,
  height: 35,
  x: 190,
  borderRadius: 4,
  image: "images/icons/endrechts.png"
});

LFastForwardBtnM = new Layer({
  width: 35,
  height: 35,
  x: 150,
  borderRadius: 4,
  image: "images/icons/vor.png"
});

LPlayBtnM = new Layer({
  width: 70,
  height: 35,
  x: 80,
  borderRadius: 4,
  image: "images/icons/play.png"
});

LFastBackBtnM = new Layer({
  width: 35,
  height: 35,
  x: 40,
  borderRadius: 4,
  image: "images/icons/zurück.png"
});

LskipToStartM = new Layer({
  width: 35,
  height: 35,
  borderRadius: 4,
  image: "images/icons/endlinks.png"
});

LMainControlBtns.addSubLayer(LskipToStartM);

LMainControlBtns.addSubLayer(LFastBackBtnM);

LMainControlBtns.addSubLayer(LPlayBtnM);

LMainControlBtns.addSubLayer(LFastForwardBtnM);

LMainControlBtns.addSubLayer(LskipToEndBtnM);

LMainControlBtns.x += 463;

LMainControlBtns.y += 10;
