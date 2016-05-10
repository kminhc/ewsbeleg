var lay, slider;

new BackgroundLayer({
  backgroundColor: "#151517"
});

slider = new SliderComponent({
  min: 0,
  max: 1,
  value: 0.5,
  knobSize: 30
});

slider.center();

lay = new Layer({
  width: 150,
  height: 200
});

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
