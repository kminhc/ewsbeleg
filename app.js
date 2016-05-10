var bg, card, slider;

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

card.y -= 250;

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

logo.states.add({
  second: {
    y: 200,
    scale: 1.5,
    rotation: 225
  },
  third: {
    y: 300,
    scale: 0.5,
    blur: 25
  }
});

logo.states.animationOptions = {
  curve: "spring(250,25,0)"
};

logo.on(Events.Click, function() {
  return logo.states.next();
});
