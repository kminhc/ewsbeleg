var AFastBackBtn, AFastBackBtn2, AFastBackBtn2R, AFastBackBtnM, AFastBackBtnM2, AFastBackBtnR, AFastBackBtnS, AFastBackBtnSR, Afastforward, Afastforward2, Afastforward2R, AfastforwardM, AfastforwardM2, AfastforwardR, AfastforwardS, AfastforwardSR, Aplay, Aplay2, Aplay2R, AplayM, AplayM2, AplayR, AplayS, AplaySR, LCtrlParent, LCtrlParentR, LFastBackBtn, LFastBackBtnM, LFastBackBtnR, LFastForwardBtn, LFastForwardBtnM, LFastForwardBtnR, LMagMinus, LMagMinus2, LMagPlus, LMagPlus2, LMainControl, LMainControlBtns, LMainWindow, LMuteBar, LMuteBar2, LMuteBtn, LMuteBtn2, LPauseBtn, LPauseBtnM, LPauseBtnR, LPlayBtn, LPlayBtnM, LPlayBtnR, LSecondTrack, Lbg, LbpmDisplay, LbpmDisplayR, LbpmLabel, LbpmLabelR, LcloseText, LcloseTrans, Lcontract, Lcontract2, LdisplayToggle, LdisplayToggle2, LdisplayToggle2M, LdisplayToggle2R, LdisplayToggle3, LdisplayToggle3R, LdisplayToggleM, LdisplayToggleR, Lexpand, Lexpand2, LfirstTrack, Llogo, LmainWaveForm, LmainWaveForm2, Lmarker, LmarkerR, LnewCloseBtn, LnewCloseBtnR, LnewDisplay, LnewDisplayR, LopenSongListButton, LopenSongListButtonR, Lsave, LsaveBtnText, LsaveLayer, LsaveText, Lsettings, LsettingsText, LskipToEndBtn, LskipToEndBtnM, LskipToEndBtnR, LskipToStart, LskipToStartM, LskipToStartR, Lsong1, Lsong1R, Lsong2, Lsong2R, Lsong3, Lsong3R, LsongDisplay, LsongDisplay2, LsongDisplay2R, LsongDisplay3, LsongDisplay3R, LsongDisplayR, LtitleDisplay, LtitleDisplayR, Ltrans, Ltrans2, LtransLayer, LvolDownBtn, LvolDownBtnR, LvolSlider, LvolSliderR, LvolUpBtn, LvolUpBtnR, LvolumeBtn, LvolumeBtnR, LwaveForm, LwaveForm2, LwaveForm2R, LwaveForm3, LwaveForm3R, LwaveFormR, PlayDisplay, PlayDisplayR, ScrollSongList, ScrollSongListR, ScrollTransList, SliderTimeline, SliderTimeline2, SliderTimeline2R, SliderTimeline3, SliderTimeline3R, SliderTimelineR, SvolSlider, SvolSliderR, title, trackSpeed, trackSpeed2, view, view2, view2R, view3, view3R, viewMain, viewMain2, viewR;

Lbg = new Layer({
  width: 1920,
  height: 1080,
  backgroundColor: "#262626"
});

title = "Titel/Interpret";

trackSpeed = 60;

trackSpeed2 = 60;

Llogo = new Layer({
  width: 500,
  x: Align.left(700),
  y: Align.top(),
  image: "images/titel.png"
});

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
  y: 25,
  width: 250,
  height: 130,
  scrollX: 0
});

view.scrollVertical = false;

LwaveForm = new Layer({
  x: 0,
  y: 15,
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view.content
});

LsongDisplay.addSubLayer(view);

LdisplayToggle = new Layer({
  height: 25,
  width: 300,
  x: 0,
  y: 0
});

LdisplayToggle.html = "<u>WAVE</u>/SPECTRUM";

LdisplayToggle.backgroundColor = "#656565";

LdisplayToggle.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsongDisplay.addSubLayer(LdisplayToggle);

LdisplayToggle.onTap(function() {
  if (LdisplayToggle.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggle.html = "WAVE/<u>SPECTRUM</u>";
    return LwaveForm.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle.html = "<u>WAVE</u>/SPECTRUM";
    return LwaveForm.image = "images/Deck_1_wave.png";
  }
});

SliderTimeline = new SliderComponent({
  min: 0,
  max: 8750,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline.fill.backgroundColor = "red";

SliderTimeline.x += 25;

SliderTimeline.y += 170;

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
  y: 25,
  width: 250,
  height: 130
});

view2.scrollVertical = false;

LwaveForm2 = new Layer({
  x: 0,
  y: 15,
  width: 9000,
  height: 110,
  image: "images/Deck_1_bpm.png",
  superLayer: view2.content
});

LsongDisplay2.addSubLayer(view2);

LdisplayToggle2 = new Layer({
  height: 25,
  width: 300,
  x: 0,
  y: 0
});

LdisplayToggle2.html = "WAVE/<u>SPECTRUM</u>";

LdisplayToggle2.backgroundColor = "#656565";

LdisplayToggle2.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsongDisplay2.addSubLayer(LdisplayToggle2);

LdisplayToggle2.onTap(function() {
  if (LdisplayToggle2.html === "WAVE/<u>SPECTRUM</u>") {
    LdisplayToggle2.html = "<u>WAVE</u>/SPECTRUM";
    return LwaveForm2.image = "images/Deck_1_wave.png";
  } else {
    LdisplayToggle2.html = "WAVE/<u>SPECTRUM</u>";
    return LwaveForm2.image = "images/Deck_1_bpm.png";
  }
});

SliderTimeline2 = new SliderComponent({
  min: 0,
  max: 8750,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline2.fill.backgroundColor = "red";

SliderTimeline2.x += 25;

SliderTimeline2.y += 170;

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
  y: 25,
  width: 250,
  height: 130
});

view3.scrollVertical = false;

LwaveForm3 = new Layer({
  x: 0,
  y: 15,
  width: 9000,
  height: 110,
  image: "images/Deck_1_wave.png",
  superLayer: view3.content
});

LsongDisplay3.addSubLayer(view3);

LdisplayToggle3 = new Layer({
  height: 25,
  width: 300,
  x: 0,
  y: 0
});

LdisplayToggle3.html = "<u>WAVE</u>/SPECTRUM";

LdisplayToggle3.backgroundColor = "#656565";

LdisplayToggle3.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsongDisplay3.addSubLayer(LdisplayToggle3);

LdisplayToggle3.onTap(function() {
  if (LdisplayToggle3.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggle3.html = "WAVE/<u>SPECTRUM</u>";
    return LwaveForm3.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggle3.html = "<u>WAVE</u>/SPECTRUM";
    return LwaveForm3.image = "images/Deck_1_wave.png";
  }
});

SliderTimeline3 = new SliderComponent({
  min: 0,
  max: 8750,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline3.x += 25;

SliderTimeline3.y += 170;

LsongDisplay3.addSubLayer(SliderTimeline3);

viewMain = new ScrollComponent({
  x: 60,
  y: 25,
  width: 1065,
  height: 200
});

viewMain.scrollVertical = false;

viewMain2 = new ScrollComponent({
  x: 60,
  y: 25,
  width: 1065,
  height: 200
});

viewMain2.scrollVertical = false;

ScrollSongList = new ScrollComponent({
  z: 50,
  width: 300,
  height: 120,
  visible: false,
  backgroundColor: "transparent"
});

ScrollSongList.scrollHorizontal = false;

LtitleDisplay = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#525252"
});

LtitleDisplay.html = title;

LtitleDisplay.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

LtitleDisplay.addSubLayer(ScrollSongList);

ScrollSongList.y = Align.top(35);

Lsong1 = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  superLayer: ScrollSongList.content,
  backgroundColor: "656565"
});

Lsong1.html = "Miranda / Ratatat";

Lsong1.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

Lsong1.onTap(function() {
  LtitleDisplay.html = "Miranda / Ratatat";
  return ScrollSongList.visible = false;
});

Lsong2 = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 35,
  superLayer: ScrollSongList.content,
  backgroundColor: "656565"
});

Lsong2.html = "Lied 2";

Lsong2.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

Lsong2.onTap(function() {
  LtitleDisplay.html = "Lied 2";
  return ScrollSongList.visible = false;
});

Lsong3 = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 70,
  superLayer: ScrollSongList.content,
  backgroundColor: "656565"
});

Lsong3.html = "Lied 3";

Lsong3.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

Lsong3.onTap(function() {
  LtitleDisplay.html = "Lied 3";
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
  width: 25,
  height: 25,
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

LskipToStart = new Layer({
  width: 35,
  height: 35,
  x: 35,
  y: 15,
  borderRadius: 4,
  image: "images/icons/endlinks.png"
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

LPauseBtn = new Layer({
  width: 70,
  height: 35,
  x: 115,
  y: 15,
  borderRadius: 4,
  visible: false,
  image: "images/icons/pause.png"
});

Aplay = new Animation({
  layer: view,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: trackSpeed
});

Aplay2 = new Animation({
  layer: view2,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: trackSpeed
});

AplayM = new Animation({
  layer: viewMain,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: trackSpeed
});

Afastforward = new Animation({
  layer: view,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 15
});

Afastforward2 = new Animation({
  layer: view2,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 15
});

AfastforwardM = new Animation({
  layer: viewMain,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 15
});

AplayS = new Animation({
  layer: SliderTimeline,
  properties: {
    value: 8750
  },
  curve: "linear",
  time: trackSpeed
});

AfastforwardS = new Animation({
  layer: SliderTimeline,
  properties: {
    value: 8750
  },
  curve: "linear",
  time: 15
});

AFastBackBtnS = new Animation({
  layer: SliderTimeline,
  properties: {
    value: 0
  },
  curve: "linear",
  time: 15
});

AFastBackBtn = new Animation({
  layer: view,
  properties: {
    scrollX: 0
  },
  curve: "linear",
  time: 15
});

AFastBackBtn2 = new Animation({
  layer: view2,
  properties: {
    scrollX: 0
  },
  curve: "linear",
  time: 15
});

AFastBackBtnM = new Animation({
  layer: viewMain,
  properties: {
    scrollX: 0
  },
  curve: "linear",
  time: 15
});

LFastBackBtn = new Layer({
  width: 35,
  height: 35,
  x: 75,
  y: 15,
  borderRadius: 4,
  image: "images/icons/zurück.png"
});

LskipToStart.onTap(function() {
  view.scrollX = 0;
  view2.scrollX = 0;
  viewMain.scrollX = 0;
  SliderTimeline.value = 0;
  AFastBackBtn = new Animation({
    layer: view,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtn2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  Afastforward = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  Afastforward2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  Aplay = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
  AplayS = new Animation({
    layer: SliderTimeline,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
  Aplay2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
  return AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
});

LskipToEndBtn.onTap(function() {
  view.scrollX = 8750;
  view2.scrollX = 8750;
  viewMain.scrollX = 8750;
  SliderTimeline.value = 8750;
  AFastBackBtn = new Animation({
    layer: view,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtn2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  Afastforward = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  Afastforward2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  Aplay = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
  AplayS = new Animation({
    layer: SliderTimeline,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
  Aplay2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
  return AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed
  });
});

LFastForwardBtn.onTap(function() {
  if (LPlayBtn.visible === true) {
    LPlayBtn.visible = false;
    LPauseBtn.visible = true;
  }
  if (view.scrollX === 8750) {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
  }
  Afastforward.start();
  Afastforward2.start();
  AfastforwardM.start();
  AfastforwardS.start();
  return Afastforward.onAnimationEnd(function() {
    LPlayBtn.visible = true;
    return LPauseBtn.visible = false;
  });
});

LFastBackBtn.onTap(function() {
  if (LPlayBtn.visible === true) {
    LPlayBtn.visible = false;
    LPauseBtn.visible = true;
  }
  if (view.scrollX === 0) {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
  }
  AFastBackBtn.start();
  AFastBackBtn2.start();
  AFastBackBtnM.start();
  AFastBackBtnS.start();
  return AFastBackBtn.onAnimationEnd(function() {
    LPlayBtn.visible = true;
    return LPauseBtn.visible = false;
  });
});

LPlayBtn.onTap(function() {
  if (LPlayBtn.visible === true) {
    LPlayBtn.visible = false;
    LPauseBtn.visible = true;
  }
  Aplay.onAnimationEnd(function() {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
    return Aplay = new Animation({
      layer: view,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  Aplay2.onAnimationEnd(function() {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
    return Aplay2 = new Animation({
      layer: view2,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed
    });
  });
  Aplay.start();
  Aplay2.start();
  AplayS.start();
  return AplayM.start();
});

LPauseBtn.onTap(function() {
  if (LPauseBtn.visible === true) {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
  }
  Aplay.stop();
  AplayS.stop();
  Aplay2.stop();
  AplayM.stop();
  AFastBackBtn.stop();
  AFastBackBtn2.stop();
  AFastBackBtnM.stop();
  Afastforward.stop();
  Afastforward2.stop();
  AfastforwardM.stop();
  AfastforwardS.stop();
  AFastBackBtnS.stop();
  Aplay = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / view.scrollX))
  });
  Aplay2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / view2.scrollX))
  });
  AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / viewMain.scrollX))
  });
  Afastforward = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / view.scrollX))
  });
  Afastforward2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / view2.scrollX))
  });
  AfastforwardM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewMain.scrollX))
  });
  AfastforwardS = new Animation({
    layer: SliderTimeline,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewMain.scrollX))
  });
  AFastBackBtnS = new Animation({
    layer: SliderTimeline,
    properties: {
      value: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / view.scrollX))
  });
  AplayS = new Animation({
    layer: SliderTimeline,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / view.scrollX))
  });
  AFastBackBtn = new Animation({
    layer: view,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / view.scrollX))
  });
  AFastBackBtn2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / view2.scrollX))
  });
  return AFastBackBtnM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewMain.scrollX))
  });
});

LvolumeBtn = new Layer({
  width: 60,
  height: 46,
  x: 220,
  y: 60,
  borderRadius: 6,
  image: "images/icons/lauter.png"
});

SvolSlider = new SliderComponent({
  height: 120,
  width: 5,
  knobSize: 10,
  backgroundColor: "#333333",
  x: 15,
  y: 10
});

SvolSlider.fill.backgroundColor = "lightgrey";

LvolSlider = new Layer({
  height: 140,
  width: 35,
  visible: false,
  backgroundColor: "525252"
});

LvolumeBtn.addSubLayer(LvolSlider);

LvolSlider.x = Align.center(-5);

LvolSlider.y = Align.top(60);

LvolSlider.addSubLayer(SvolSlider);

LvolumeBtn.onTap(function() {
  if (LvolSlider.visible === false) {
    return LvolSlider.visible = true;
  } else {
    return LvolSlider.visible = false;
  }
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

LbpmDisplay.html = 130;

LbpmDisplay.style = {
  fontSize: "20px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LvolDownBtn.onTap(function() {
  if (LPauseBtn.visible === true) {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
  }
  Aplay.stop();
  AplayS.stop();
  Aplay2.stop();
  AplayM.stop();
  if (parseInt(LbpmDisplay.html) !== 0) {
    LbpmDisplay.html = parseInt(LbpmDisplay.html) - 5;
    trackSpeed += 5;
  }
  Aplay = new Animation({
    layer: view,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / view.scrollX))
  });
  Aplay2 = new Animation({
    layer: view2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / view2.scrollX))
  });
  AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / viewMain.scrollX))
  });
  return AplayS = new Animation({
    layer: SliderTimeline,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: trackSpeed - (trackSpeed / (8750 / view.scrollX))
  });
});

LvolUpBtn.onTap(function() {
  if (LPauseBtn.visible === true) {
    LPlayBtn.visible = true;
    LPauseBtn.visible = false;
  }
  Aplay.stop();
  AplayS.stop();
  Aplay2.stop();
  AplayM.stop();
  if (parseInt(LbpmDisplay.html) !== 185) {
    LbpmDisplay.html = parseInt(LbpmDisplay.html) + 5;
    trackSpeed -= 5;
    Aplay = new Animation({
      layer: view,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed - (trackSpeed / (8750 / view.scrollX))
    });
    Aplay2 = new Animation({
      layer: view2,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed - (trackSpeed / (8750 / view2.scrollX))
    });
    AplayM = new Animation({
      layer: viewMain,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed - (trackSpeed / (8750 / viewMain.scrollX))
    });
    return AplayS = new Animation({
      layer: SliderTimeline,
      properties: {
        value: 8750
      },
      curve: "linear",
      time: trackSpeed - (trackSpeed / (8750 / view.scrollX))
    });
  }
});

LbpmLabel = new Layer({
  width: 70,
  height: 35,
  x: 25,
  y: 65,
  borderRadius: 4,
  image: "images/icons/bpm2.png"
});

Lsave = new Layer({
  width: 70,
  height: 35,
  y: Align.top(30),
  x: Align.right(-820),
  z: 100,
  borderRadius: 4,
  image: "images/icons/download.png"
});

Lsettings = new Layer({
  width: 70,
  height: 35,
  y: Align.top(30),
  x: Align.left(30),
  z: 100,
  borderRadius: 4,
  image: "images/icons/tool.png"
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

PlayDisplay.addSubLayer(LPauseBtn);

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
  y: 20,
  width: 250,
  height: 130
});

viewR.scrollVertical = false;

LwaveFormR = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 110,
  image: "images/Deck_2_wave.png",
  superLayer: viewR.content
});

LsongDisplayR.addSubLayer(viewR);

LdisplayToggleR = new Layer({
  height: 25,
  width: 300,
  x: 0,
  y: 0
});

LdisplayToggleR.html = "<u>WAVE</u>/SPECTRUM";

LdisplayToggleR.backgroundColor = "#656565";

LdisplayToggleR.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsongDisplayR.addSubLayer(LdisplayToggleR);

LdisplayToggleR.onTap(function() {
  if (LdisplayToggleR.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggleR.html = "WAVE/<u>SPECTRUM</u>";
    return LwaveFormR.image = "images/Deck_2_bpm.png";
  } else {
    LdisplayToggleR.html = "<u>WAVE</u>/SPECTRUM";
    return LwaveFormR.image = "images/Deck_2_wave.png";
  }
});

SliderTimelineR = new SliderComponent({
  min: 0,
  max: 8750,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimelineR.fill.backgroundColor = "blue";

SliderTimelineR.x += 25;

SliderTimelineR.y += 170;

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
  y: 20,
  width: 250,
  height: 130
});

view2R.scrollVertical = false;

LwaveForm2R = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 110,
  image: "images/Deck_2_bpm.png",
  superLayer: view2R.content
});

LsongDisplay2R.addSubLayer(view2R);

LdisplayToggle2R = new Layer({
  height: 25,
  width: 300,
  x: 0,
  y: 0
});

LdisplayToggle2R.html = "WAVE/<u>SPECTRUM</u>";

LdisplayToggle2R.backgroundColor = "656565";

LdisplayToggle2R.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsongDisplay2R.addSubLayer(LdisplayToggle2R);

LdisplayToggle2R.onTap(function() {
  if (LdisplayToggle2R.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggle2R.html = "WAVE/<u>SPECTRUM</u>";
    return LwaveForm2R.image = "images/Deck_2_bpm.png";
  } else {
    LdisplayToggle2R.html = "<u>WAVE</u>/SPECTRUM";
    return LwaveForm2R.image = "images/Deck_2_wave.png";
  }
});

SliderTimeline2R = new SliderComponent({
  min: 0,
  max: 8750,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline2R.fill.backgroundColor = "blue";

SliderTimeline2R.x += 25;

SliderTimeline2R.y += 170;

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
  y: 20,
  width: 250,
  height: 130
});

view3R.scrollVertical = false;

LwaveForm3R = new Layer({
  x: 0,
  y: 15,
  width: 9000,
  height: 110,
  image: "images/Deck_2_wave.png",
  superLayer: view3R.content
});

LsongDisplay3R.addSubLayer(view3R);

LdisplayToggle3R = new Layer({
  height: 25,
  width: 300,
  x: 0,
  y: 0
});

LdisplayToggle3R.html = "<u>WAVE</u>/SPECTRUM";

LdisplayToggle3R.backgroundColor = "656565";

LdisplayToggle3R.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsongDisplay3R.addSubLayer(LdisplayToggle3R);

LdisplayToggle3R.onTap(function() {
  if (LdisplayToggle3R.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggle3R.html = "WAVE/<u>SPECTRUM</u>";
    return LwaveForm3R.image = "images/Deck_2_bpm.png";
  } else {
    LdisplayToggle3R.html = "<u>WAVE</u>/SPECTRUM";
    return LwaveForm3R.image = "images/Deck_2_wave.png";
  }
});

SliderTimeline3R = new SliderComponent({
  min: 0,
  max: 8750,
  knobSize: 10,
  width: 250,
  height: 5
});

SliderTimeline3R.x += 25;

SliderTimeline3R.y += 175;

LsongDisplay3R.addSubLayer(SliderTimeline3R);

ScrollSongListR = new ScrollComponent({
  z: 50,
  width: 300,
  height: 120,
  visible: false,
  backgroundColor: "transparent"
});

ScrollSongListR.scrollHorizontal = false;

LtitleDisplayR = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  backgroundColor: "#525252"
});

LtitleDisplayR.html = title;

LtitleDisplayR.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

LtitleDisplayR.addSubLayer(ScrollSongListR);

ScrollSongListR.y = Align.top(35);

Lsong1R = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  superLayer: ScrollSongListR.content,
  backgroundColor: "656565"
});

Lsong1R.html = "Rugs / Ratatat";

Lsong1R.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

Lsong1R.onTap(function() {
  LtitleDisplayR.html = "Rugs / Ratatat";
  return ScrollSongListR.visible = false;
});

Lsong2R = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 35,
  superLayer: ScrollSongListR.content,
  backgroundColor: "656565"
});

Lsong2R.html = "Lied 2";

Lsong2R.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

Lsong2R.onTap(function() {
  LtitleDisplayR.html = "Lied 2";
  return ScrollSongListR.visible = false;
});

Lsong3R = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  y: 70,
  superLayer: ScrollSongListR.content,
  backgroundColor: "656565"
});

Lsong3R.html = "Lied 3";

Lsong3R.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

Lsong3R.onTap(function() {
  LtitleDisplayR.html = "Lied 3";
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
  width: 25,
  height: 25,
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

LskipToStartR = new Layer({
  width: 35,
  height: 35,
  x: 35,
  y: 15,
  borderRadius: 4,
  image: "images/icons/endlinks.png"
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

LPauseBtnR = new Layer({
  width: 70,
  height: 35,
  x: 115,
  y: 15,
  borderRadius: 4,
  visible: false,
  image: "images/icons/pause.png"
});

AplayR = new Animation({
  layer: viewR,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 30
});

Aplay2R = new Animation({
  layer: view2R,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 30
});

AplayM2 = new Animation({
  layer: viewMain2,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 30
});

AplaySR = new Animation({
  layer: SliderTimelineR,
  properties: {
    value: 8750
  },
  curve: "linear",
  time: 30
});

AfastforwardSR = new Animation({
  layer: SliderTimelineR,
  properties: {
    value: 8750
  },
  curve: "linear",
  time: 15
});

AFastBackBtnSR = new Animation({
  layer: SliderTimelineR,
  properties: {
    value: 0
  },
  curve: "linear",
  time: 15
});

AfastforwardR = new Animation({
  layer: viewR,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 15
});

Afastforward2R = new Animation({
  layer: view2R,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 15
});

AfastforwardM2 = new Animation({
  layer: viewMain2,
  properties: {
    scrollX: 8750
  },
  curve: "linear",
  time: 15
});

AFastBackBtnR = new Animation({
  layer: viewR,
  properties: {
    scrollX: 0
  },
  curve: "linear",
  time: 15
});

AFastBackBtn2R = new Animation({
  layer: view2R,
  properties: {
    scrollX: 0
  },
  curve: "linear",
  time: 15
});

AFastBackBtnM2 = new Animation({
  layer: viewMain2,
  properties: {
    scrollX: 0
  },
  curve: "linear",
  time: 15
});

LFastBackBtnR = new Layer({
  width: 35,
  height: 35,
  x: 75,
  y: 15,
  borderRadius: 4,
  image: "images/icons/zurück.png"
});

LskipToStartR.onTap(function() {
  viewR.scrollX = 0;
  view2R.scrollX = 0;
  viewMain2.scrollX = 0;
  SliderTimelineR.value = 0;
  AplaySR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
  AFastBackBtnR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtn2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AfastforwardR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  Afastforward2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AplayR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
  Aplay2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
  return AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
});

LskipToEndBtnR.onTap(function() {
  viewR.scrollX = 8750;
  view2R.scrollX = 8750;
  viewMain2.scrollX = 8750;
  SliderTimelineR.value = 8750;
  AplaySR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
  AFastBackBtnR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtn2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnSR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 0
    },
    curve: "linear",
    time: 15
  });
  AfastforwardR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  Afastforward2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardSR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 0
    },
    curve: "linear",
    time: 15
  });
  AplayR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
  Aplay2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
  return AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: trackSpeed2
  });
});

LFastForwardBtnR.onTap(function() {
  if (LPlayBtnR.visible === true) {
    LPlayBtnR.visible = false;
    LPauseBtnR.visible = true;
  }
  if (viewR.scrollX === 8750) {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
  }
  AfastforwardR.start();
  Afastforward2R.start();
  AfastforwardM2.start();
  AfastforwardSR.start();
  return AfastforwardR.onAnimationEnd(function() {
    LPlayBtnR.visible = true;
    return LPauseBtnR.visible = false;
  });
});

LFastBackBtnR.onTap(function() {
  if (LPlayBtnR.visible === true) {
    LPlayBtnR.visible = false;
    LPauseBtnR.visible = true;
  }
  if (viewR.scrollX === 0) {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
  }
  AFastBackBtnR.start();
  AFastBackBtn2R.start();
  AFastBackBtnM2.start();
  AFastBackBtnSR.start();
  return AFastBackBtnR.onAnimationEnd(function() {
    LPlayBtnR.visible = true;
    return LPauseBtnR.visible = false;
  });
});

LPlayBtnR.onTap(function() {
  if (LPlayBtnR.visible === true) {
    LPlayBtnR.visible = false;
    LPauseBtnR.visible = true;
  }
  AplayR.onAnimationEnd(function() {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
    return AplayR = new Animation({
      layer: viewR,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  Aplay2R.onAnimationEnd(function() {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
    return Aplay2R = new Animation({
      layer: view2R,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  AplayM2.onAnimationEnd(function() {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
    return AplayM2 = new Animation({
      layer: viewMain2,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  AplaySR.onAnimationEnd(function() {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
    return AplaySR = new Animation({
      layer: SliderTimelineR,
      properties: {
        value: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  AplayR.start();
  Aplay2R.start();
  AplayM2.start();
  return AplaySR.start();
});

LPauseBtnR.onTap(function() {
  if (LPauseBtnR.visible === true) {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
  }
  AplayR.stop();
  Aplay2R.stop();
  AplayM2.stop();
  AplaySR.stop();
  AFastBackBtnR.stop();
  AFastBackBtn2R.stop();
  AFastBackBtnM2.stop();
  AFastBackBtnSR.stop();
  AfastforwardR.stop();
  Afastforward2R.stop();
  AfastforwardM2.stop();
  AfastforwardSR.stop();
  AplayR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewR.scrollX))
  });
  Aplay2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / view2R.scrollX))
  });
  AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewMain2.scrollX))
  });
  AfastforwardR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewR.scrollX))
  });
  Afastforward2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / view2R.scrollX))
  });
  AfastforwardM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewMain2.scrollX))
  });
  AFastBackBtnR = new Animation({
    layer: viewR,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewR.scrollX))
  });
  AFastBackBtn2R = new Animation({
    layer: view2R,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / view2R.scrollX))
  });
  AFastBackBtnM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewMain2.scrollX))
  });
  AfastforwardSR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewMain2.scrollX))
  });
  AFastBackBtnSR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewR.scrollX))
  });
  return AplaySR = new Animation({
    layer: SliderTimelineR,
    properties: {
      value: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewR.scrollX))
  });
});

LvolumeBtnR = new Layer({
  width: 60,
  height: 46,
  x: 220,
  y: 60,
  borderRadius: 6,
  image: "images/icons/lauter.png"
});

SvolSliderR = new SliderComponent({
  height: 120,
  width: 5,
  knobSize: 10,
  backgroundColor: "#333333",
  x: 15,
  y: 10
});

SvolSliderR.fill.backgroundColor = "lightgrey";

LvolSliderR = new Layer({
  height: 140,
  width: 35,
  backgroundColor: "525252",
  visible: false
});

LvolumeBtnR.addSubLayer(LvolSliderR);

LvolSliderR.x = Align.center(-5);

LvolSliderR.y = Align.top(60);

LvolSliderR.addSubLayer(SvolSliderR);

LvolumeBtnR.onTap(function() {
  if (LvolSliderR.visible === false) {
    return LvolSliderR.visible = true;
  } else {
    return LvolSliderR.visible = false;
  }
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

LbpmDisplayR.html = 130;

LbpmDisplayR.style = {
  fontSize: "20px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LvolDownBtnR.onTap(function() {
  if (LPauseBtnR.visible === true) {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
  }
  AplayR.stop();
  Aplay2R.stop();
  AplayM2.stop();
  AplaySR.stop();
  if (parseInt(LbpmDisplayR.html) !== 0) {
    LbpmDisplayR.html = parseInt(LbpmDisplayR.html) - 5;
    trackSpeed2 += 5;
    AplayR = new Animation({
      layer: viewR,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / viewR.scrollX))
    });
    Aplay2R = new Animation({
      layer: view2R,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / view2R.scrollX))
    });
    AplayM2 = new Animation({
      layer: viewMain2,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / viewMain2.scrollX))
    });
    return AplaySR = new Animation({
      layer: SliderTimelineR,
      properties: {
        value: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / viewR.scrollX))
    });
  }
});

LvolUpBtnR.onTap(function() {
  if (LPauseBtnR.visible === true) {
    LPlayBtnR.visible = true;
    LPauseBtnR.visible = false;
  }
  AplayR.stop();
  Aplay2R.stop();
  AplayM2.stop();
  AplaySR.stop();
  if (parseInt(LbpmDisplayR.html) !== 185) {
    LbpmDisplayR.html = parseInt(LbpmDisplayR.html) + 5;
    trackSpeed2 -= 5;
    AplayR = new Animation({
      layer: viewR,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / viewR.scrollX))
    });
    Aplay2R = new Animation({
      layer: view2R,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / view2R.scrollX))
    });
    AplayM2 = new Animation({
      layer: viewMain2,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / viewMain2.scrollX))
    });
    return AplaySR = new Animation({
      layer: SliderTimelineR,
      properties: {
        value: 8750
      },
      curve: "linear",
      time: trackSpeed2 - (trackSpeed2 / (8750 / viewR.scrollX))
    });
  }
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

PlayDisplayR.addSubLayer(LPauseBtnR);

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
  backgroundColor: "#656565",
  x: Align.left,
  y: Align.top
});

LSecondTrack = new Layer({
  backgroundColor: "#656565",
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
  y: Align.top(10)
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

LMuteBtn.onTap(function() {
  if (LmainWaveForm.opacity === 1) {
    LmainWaveForm.opacity = 0.5;
    LwaveForm.opacity = 0.5;
    return LwaveForm2.opacity = 0.5;
  } else {
    LmainWaveForm.opacity = 1;
    LwaveForm.opacity = 1;
    return LwaveForm2.opacity = 1;
  }
});

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

Lexpand = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 145,
  borderRadius: 4,
  image: "images/icons/grpfeile.png"
});

LMuteBar.addSubLayer(Lexpand);

Lcontract = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 180,
  borderRadius: 4,
  image: "images/icons/klpfeile.png"
});

LMuteBar.addSubLayer(Lcontract);

LMagMinus = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 110,
  borderRadius: 4,
  image: "images/icons/lupeminus.png"
});

LMuteBar.addSubLayer(LMagMinus);

LMuteBar2 = new Layer({
  backgroundColor: "transparent",
  height: 180,
  width: 30,
  x: Align.left(25),
  y: Align.top(10)
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

LMuteBtn2.onTap(function() {
  if (LmainWaveForm2.opacity === 1) {
    LmainWaveForm2.opacity = 0.5;
    LwaveFormR.opacity = 0.5;
    return LwaveForm2R.opacity = 0.5;
  } else {
    LmainWaveForm2.opacity = 1;
    LwaveFormR.opacity = 1;
    return LwaveForm2R.opacity = 1;
  }
});

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
  if (LmainWaveForm2.image === "images/Deck_2_bpm.png") {
    LmainWaveForm2.image = "images/Deck_2_bpm_klein.png";
  }
  if (LmainWaveForm2.image === "images/Deck_2_wave.png") {
    LmainWaveForm2.image = "images/Deck_2_klein.png";
  }
  if (LmainWaveForm2.image === "images/Deck_2_gross.png") {
    LmainWaveForm2.image = "images/Deck_2_wave.png";
  }
  if (LmainWaveForm2.image === "images/Deck_2_bpm_gross.png") {
    return LmainWaveForm2.image = "images/Deck_2_bpm.png";
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
  if (LmainWaveForm2.image === "images/Deck_2_bpm.png") {
    LmainWaveForm2.image = "images/Deck_2_bpm_gross.png";
  }
  if (LmainWaveForm2.image === "images/Deck_2_wave.png") {
    LmainWaveForm2.image = "images/Deck_2_gross.png";
  }
  if (LmainWaveForm2.image === "images/Deck_2_klein.png") {
    LmainWaveForm2.image = "images/Deck_2_wave.png";
  }
  if (LmainWaveForm2.image === "images/Deck_2_bpm_klein.png") {
    return LmainWaveForm2.image = "images/Deck_2_bpm.png";
  }
});

Lexpand2 = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 145,
  borderRadius: 4,
  image: "images/icons/grpfeile.png"
});

LMuteBar2.addSubLayer(Lexpand2);

Lcontract2 = new Layer({
  backgroundColor: "#525252",
  width: 30,
  height: 30,
  y: 180,
  borderRadius: 4,
  image: "images/icons/klpfeile.png"
});

LMuteBar2.addSubLayer(Lcontract2);

LMainWindow = new Layer({
  height: 610,
  width: 1150,
  borderRadius: 4,
  x: Align.left,
  y: Align.top,
  backgroundColor: "transparent"
});

LMainWindow.y += 167;

LMainWindow.x += 385;

LMainWindow.addSubLayer(LfirstTrack);

LMainWindow.addSubLayer(LSecondTrack);

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
  width: 1150,
  x: 0,
  y: 0
});

LdisplayToggleM.html = "<u>WAVE</u>/SPECTRUM";

LdisplayToggleM.backgroundColor = "#525252";

LdisplayToggleM.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LfirstTrack.addSubLayer(LdisplayToggleM);

LdisplayToggleM.onTap(function() {
  if (LdisplayToggleM.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggleM.html = "WAVE/<u>SPECTRUM</u>";
    return LmainWaveForm.image = "images/Deck_1_bpm.png";
  } else {
    LdisplayToggleM.html = "<u>WAVE</u>/SPECTRUM";
    return LmainWaveForm.image = "images/Deck_1_wave.png";
  }
});

LmainWaveForm2 = new Layer({
  x: 0,
  y: 20,
  width: 9000,
  height: 200,
  image: "images/Deck_2_wave.png",
  superLayer: viewMain2.content
});

LSecondTrack.addSubLayer(viewMain2);

LdisplayToggle2M = new Layer({
  height: 25,
  width: 1150,
  x: 0,
  y: 0
});

LdisplayToggle2M.html = "<u>WAVE</u>/SPECTRUM";

LdisplayToggle2M.backgroundColor = "#525252";

LdisplayToggle2M.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LSecondTrack.addSubLayer(LdisplayToggle2M);

LdisplayToggle2M.onTap(function() {
  if (LdisplayToggle2M.html === "<u>WAVE</u>/SPECTRUM") {
    LdisplayToggle2M.html = "WAVE/<u>SPECTRUM</u>";
    return LmainWaveForm2.image = "images/Deck_2_bpm.png";
  } else {
    LdisplayToggle2M.html = "<u>WAVE</u>/SPECTRUM";
    return LmainWaveForm2.image = "images/Deck_2_wave.png";
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
  y: 20,
  backgroundColor: "transparent"
});

LMainControl.addSubLayer(LMainControlBtns);

LMainControl.addSubLayer(Lsave);

LMainControl.addSubLayer(Lsettings);

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

LPauseBtnM = new Layer({
  width: 70,
  height: 35,
  x: 80,
  borderRadius: 4,
  visible: false,
  image: "images/icons/pause.png"
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

LMainControlBtns.addSubLayer(LPauseBtnM);

LMainControlBtns.addSubLayer(LFastForwardBtnM);

LMainControlBtns.addSubLayer(LskipToEndBtnM);

LMainControlBtns.x += 463;

LMainControlBtns.y += 10;

Lmarker = new Layer({
  width: 50,
  height: 180,
  x: 540,
  y: 45,
  backgroundColor: "red",
  opacity: 0.3
});

LfirstTrack.addSubLayer(Lmarker);

LmarkerR = new Layer({
  width: 50,
  height: 180,
  x: 595,
  y: 45,
  backgroundColor: "blue",
  opacity: 0.3
});

LSecondTrack.addSubLayer(LmarkerR);

Lexpand.onTap(function() {
  if (Lmarker.width !== 530) {
    Lmarker.width += 10;
    return Lmarker.x -= 10;
  }
});

Lcontract.onTap(function() {
  if (Lmarker.width !== 50) {
    Lmarker.width -= 10;
    return Lmarker.x += 10;
  }
});

Lexpand2.onTap(function() {
  if (LmarkerR.width !== 530) {
    return LmarkerR.width += 10;
  }
});

Lcontract2.onTap(function() {
  if (LmarkerR.width !== 50) {
    return LmarkerR.width -= 10;
  }
});

view.onMove(function() {
  SliderTimeline.value = view.scrollX;
  SliderTimeline2.value = view2.scrollX;
  view2.scrollX = view.scrollX;
  return viewMain.scrollX = view.scrollX;
});

view2.onMove(function() {
  SliderTimeline.value = view.scrollX;
  SliderTimeline2.value = view2.scrollX;
  view.scrollX = view2.scrollX;
  return viewMain.scrollX = view2.scrollX;
});

viewMain.onMove(function() {
  SliderTimeline.value = view.scrollX;
  SliderTimeline2.value = view2.scrollX;
  view.scrollX = viewMain.scrollX;
  return view2.scrollX = viewMain.scrollX;
});

view3.onMove(function() {
  return SliderTimeline3.value = view3.scrollX;
});

viewR.onMove(function() {
  SliderTimelineR.value = viewR.scrollX;
  SliderTimeline2R.value = view2R.scrollX;
  view2R.scrollX = viewR.scrollX;
  return viewMain2.scrollX = viewR.scrollX;
});

view2R.onMove(function() {
  SliderTimelineR.value = viewR.scrollX;
  SliderTimeline2R.value = view2R.scrollX;
  viewR.scrollX = view2R.scrollX;
  return viewMain2.scrollX = view2R.scrollX;
});

viewMain2.onMove(function() {
  SliderTimelineR.value = viewR.scrollX;
  SliderTimeline2R.value = view2R.scrollX;
  viewR.scrollX = viewMain2.scrollX;
  return view2R.scrollX = viewMain2.scrollX;
});

view3R.onMove(function() {
  return SliderTimeline3R.value = view3R.scrollX;
});

LskipToStartM.onTap(function() {
  viewMain.scrollX = 0;
  viewMain2.scrollX = 0;
  AFastBackBtnM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30
  });
  return AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30
  });
});

LskipToEndBtnM.onTap(function() {
  viewMain.scrollX = 8750;
  viewMain2.scrollX = 8750;
  AFastBackBtnM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AFastBackBtnM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AfastforwardM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15
  });
  AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30
  });
  return AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30
  });
});

LFastForwardBtnM.onTap(function() {
  if (LPlayBtnM.visible === true) {
    LPlayBtnM.visible = false;
    LPauseBtnM.visible = true;
  }
  if (viewMain.scrollX === 8750) {
    LPlayBtnM.visible = true;
    LPauseBtnM.visible = false;
  }
  AfastforwardM.start();
  AfastforwardM2.start();
  return AfastforwardM.onAnimationEnd(function() {
    LPlayBtnM.visible = true;
    return LPauseBtnM.visible = false;
  });
});

LFastBackBtnM.onTap(function() {
  if (LPlayBtnM.visible === true) {
    LPlayBtnM.visible = false;
    LPauseBtnM.visible = true;
  }
  if (viewMain.scrollX === 0) {
    LPlayBtnM.visible = true;
    LPauseBtnM.visible = false;
  }
  AFastBackBtnM.start();
  AFastBackBtnM2.start();
  return AFastBackBtnM.onAnimationEnd(function() {
    LPlayBtnM.visible = true;
    return LPauseBtnM.visible = false;
  });
});

LPlayBtnM.onTap(function() {
  AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewMain.scrollX))
  });
  AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewMain2.scrollX))
  });
  if (LPlayBtnM.visible === true) {
    LPlayBtnM.visible = false;
    LPauseBtnM.visible = true;
  }
  AplayM.onAnimationEnd(function() {
    LPlayBtnM.visible = true;
    LPauseBtnM.visible = false;
    return AplayM = new Animation({
      layer: viewMain,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  AplayM2.onAnimationEnd(function() {
    LPlayBtnM.visible = true;
    LPauseBtnM.visible = false;
    return AplayM2 = new Animation({
      layer: viewMain2,
      properties: {
        scrollX: 8750
      },
      curve: "linear",
      time: 30
    });
  });
  AplayM2.start();
  return AplayM.start();
});

LPauseBtnM.onTap(function() {
  var AFastBackBtn2M;
  if (LPauseBtnM.visible === true) {
    LPlayBtnM.visible = true;
    LPauseBtnM.visible = false;
  }
  AplayM.stop();
  AplayM2.stop();
  AFastBackBtnM.stop();
  AFastBackBtnM2.stop();
  AfastforwardM.stop();
  AfastforwardM2.stop();
  AplayM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewMain.scrollX))
  });
  AplayM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 30 - (30 / (8750 / viewMain2.scrollX))
  });
  AfastforwardM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewMain.scrollX))
  });
  AfastforwardM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 8750
    },
    curve: "linear",
    time: 15 - (15 / (8750 / viewMain2.scrollX))
  });
  AFastBackBtnM = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewMain.scrollX))
  });
  AFastBackBtn2M = new Animation({
    layer: viewMain,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewMain.scrollX))
  });
  return AFastBackBtnM2 = new Animation({
    layer: viewMain2,
    properties: {
      scrollX: 0
    },
    curve: "linear",
    time: 0 + (15 / (8750 / viewMain2.scrollX))
  });
});

LsaveLayer = new Layer({
  width: 1150,
  height: 120,
  backgroundColor: "525252",
  visible: false,
  x: Align.left,
  y: Align.top(615)
});

LMainWindow.addSubLayer(LsaveLayer);

ScrollTransList = new ScrollComponent({
  width: 150,
  height: 120,
  visible: false,
  backgroundColor: "transparent"
});

ScrollTransList.scrollHorizontal = false;

LtransLayer = new Layer({
  width: 150,
  height: 30,
  borderRadius: 4,
  x: Align.left(505),
  y: 20
});

LsaveLayer.addSubLayer(LtransLayer);

LsaveText = new Layer({
  width: 300,
  height: 30,
  borderRadius: 4,
  x: Align.left(75),
  y: 20,
  html: "Wählen Sie die gewünschte Übergangsart",
  backgroundColor: "transparent"
});

LsaveText.style = {
  fontSize: "20px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsaveLayer.addSubLayer(LsaveText);

LtransLayer.html = "Übergang?";

LtransLayer.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LtransLayer.addSubLayer(ScrollTransList);

ScrollTransList.y = Align.top(35);

Ltrans = new Layer({
  width: 150,
  height: 30,
  borderRadius: 4,
  superLayer: ScrollTransList.content,
  backgroundColor: "656565"
});

Ltrans.html = "Linear";

Ltrans.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

Ltrans.onTap(function() {
  LtransLayer.html = "Linear";
  return ScrollTransList.visible = false;
});

Ltrans2 = new Layer({
  width: 150,
  height: 30,
  borderRadius: 4,
  y: 35,
  z: 100,
  superLayer: ScrollTransList.content,
  backgroundColor: "656565"
});

Ltrans2.html = "Bezier";

Ltrans2.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

Ltrans2.onTap(function() {
  LtransLayer.html = "Bezier";
  return ScrollTransList.visible = false;
});

LtransLayer.onTap(function() {
  if (ScrollTransList.visible === false) {
    return ScrollTransList.visible = true;
  } else {
    return ScrollTransList.visible = false;
  }
});

LcloseTrans = new Layer({
  width: 70,
  height: 35,
  y: Align.top(30),
  x: Align.right(-820),
  z: 100,
  borderRadius: 4,
  image: "images/icons/download.png"
});

LcloseText = new Layer({
  width: 70,
  height: 35,
  y: Align.top(60),
  x: Align.right(-820),
  z: 100,
  borderRadius: 4,
  html: "Speichern",
  backgroundColor: "transparent"
});

LcloseText.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LsaveLayer.addSubLayer(LcloseTrans);

LsaveLayer.addSubLayer(LcloseText);

LsaveBtnText = new Layer({
  width: 70,
  height: 35,
  y: Align.top(60),
  x: Align.right(-820),
  z: 100,
  borderRadius: 4,
  html: "Speichern",
  backgroundColor: "transparent"
});

LsaveBtnText.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LMainControl.addSubLayer(LsaveBtnText);

LsettingsText = new Layer({
  width: 70,
  height: 35,
  y: Align.top(60),
  x: Align.left(19),
  z: 100,
  borderRadius: 4,
  html: "Einstellungen",
  backgroundColor: "transparent"
});

LsettingsText.style = {
  fontSize: "15px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

LMainControl.addSubLayer(LsettingsText);

LcloseTrans.onTap(function() {
  if (LsaveLayer.visible === true) {
    LsaveLayer.visible = false;
    Lsave.image = "images/icons/download.png";
    return LsaveBtnText.html = "Speichern";
  } else {
    return LsaveLayer.visible = true;
  }
});

Lsave.onTap(function() {
  if (LsaveLayer.visible === false) {
    LsaveLayer.visible = true;
    Lsave.image = "images/icons/close.png";
    return LsaveBtnText.html = "Abbrechen";
  } else {
    LsaveLayer.visible = false;
    Lsave.image = "images/icons/download.png";
    return LsaveBtnText.html = "Speichern";
  }
});

SliderTimeline.on("change:value", function() {
  view.scrollX = this.value;
  view2.scrollX = this.value;
  viewMain.scrollX = this.value;
  return SliderTimeline2.value = this.value;
});

SliderTimeline2.on("change:value", function() {
  view.scrollX = this.value;
  view2.scrollX = this.value;
  viewMain.scrollX = this.value;
  return SliderTimeline.value = this.value;
});

SliderTimelineR.on("change:value", function() {
  viewR.scrollX = this.value;
  view2R.scrollX = this.value;
  viewMain2.scrollX = this.value;
  return SliderTimeline2R.value = this.value;
});

SliderTimeline2R.on("change:value", function() {
  viewR.scrollX = this.value;
  view2R.scrollX = this.value;
  viewMain2.scrollX = this.value;
  return SliderTimelineR.value = this.value;
});

SliderTimeline3R.on("change:value", function() {
  return view3R.scrollX = this.value;
});

SliderTimeline3.on("change:value", function() {
  return view3.scrollX = this.value;
});
