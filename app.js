var bg, card, layerA, layerB, layerC, scroll, slider;

bg = new BackgroundLayer({
  backgroundColor: "#eee"
});

card = new Layer({
  backgroundColor: "#12bbf0",
  width: 300,
  height: 200,
  borderRadius: 4,
  clip: true
});

card.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";

card.center();

card.y += 250;

slider = new SliderComponent({
  min: 0,
  max: 1,
  knobSize: 10,
  width: 250,
  height: 5
});

slider.x += 25;

slider.y += 165;

card.addSubLayer(slider);

scroll = new ScrollComponent({
  width: 120,
  height: 120
});

scroll.scrollHorizontal = false;

scroll.center();

layerA = new Layer({
  width: 120,
  height: 50,
  backgroundColor: "#12bbf0",
  superLayer: scroll.content
});

layerA.html = "Lied 1";

layerB = new Layer({
  width: 120,
  height: 50,
  backgroundColor: "#12bbf0",
  y: 55,
  superLayer: scroll.content
});

layerC = new Layer({
  width: 120,
  height: 50,
  backgroundColor: "#12bbf0",
  y: 110,
  superLayer: scroll.content
});
