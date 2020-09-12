function warning() {
  alert("This shows a lot of flashing lights and sounds");
}
window.onload = warning();

var keyData = {
  q: {
    sound: new Howl({
      urls: ["sounds/bubbles.mp3"],
    }),
    color: "#1abc9c",
  },
  w: {
    sound: new Howl({
      urls: ["sounds/clay.mp3"],
    }),
    color: "#2ecc71",
  },
  e: {
    sound: new Howl({
      urls: ["sounds/confetti.mp3"],
    }),
    color: "#3498db",
  },
  r: {
    sound: new Howl({
      urls: ["sounds/corona.mp3"],
    }),
    color: "#9b59b6",
  },
  t: {
    sound: new Howl({
      urls: ["sounds/dotted-spiral.mp3"],
    }),
    color: "#34495e",
  },
  y: {
    sound: new Howl({
      urls: ["sounds/flash-1.mp3"],
    }),
    color: "#16a085",
  },
  u: {
    sound: new Howl({
      urls: ["sounds/flash-2.mp3"],
    }),
    color: "#27ae60",
  },
  i: {
    sound: new Howl({
      urls: ["sounds/flash-3.mp3"],
    }),
    color: "#2980b9",
  },
  o: {
    sound: new Howl({
      urls: ["sounds/glimmer.mp3"],
    }),
    color: "#8e44ad",
  },
  p: {
    sound: new Howl({
      urls: ["sounds/moon.mp3"],
    }),
    color: "#2c3e50",
  },
  a: {
    sound: new Howl({
      urls: ["sounds/pinwheel.mp3"],
    }),
    color: "#f1c40f",
  },
  s: {
    sound: new Howl({
      urls: ["sounds/piston-1.mp3"],
    }),
    color: "#e67e22",
  },
  d: {
    sound: new Howl({
      urls: ["sounds/piston-2.mp3"],
    }),
    color: "#e74c3c",
  },
  f: {
    sound: new Howl({
      urls: ["sounds/prism-1.mp3"],
    }),
    color: "#95a5a6",
  },
  g: {
    sound: new Howl({
      urls: ["sounds/prism-2.mp3"],
    }),
    color: "#f39c12",
  },
  h: {
    sound: new Howl({
      urls: ["sounds/prism-3.mp3"],
    }),
    color: "#d35400",
  },
  j: {
    sound: new Howl({
      urls: ["sounds/splits.mp3"],
    }),
    color: "#1abc9c",
  },
  k: {
    sound: new Howl({
      urls: ["sounds/squiggle.mp3"],
    }),
    color: "#2ecc71",
  },
  l: {
    sound: new Howl({
      urls: ["sounds/strike.mp3"],
    }),
    color: "#3498db",
  },
  z: {
    sound: new Howl({
      urls: ["sounds/suspension.mp3"],
    }),
    color: "#9b59b6",
  },
  x: {
    sound: new Howl({
      urls: ["sounds/timer.mp3"],
    }),
    color: "#34495e",
  },
  c: {
    sound: new Howl({
      urls: ["sounds/ufo.mp3"],
    }),
    color: "#16a085",
  },
  v: {
    sound: new Howl({
      urls: ["sounds/veil.mp3"],
    }),
    color: "#27ae60",
  },
  b: {
    sound: new Howl({
      urls: ["sounds/wipe.mp3"],
    }),
    color: "#2980b9",
  },
  n: {
    sound: new Howl({
      urls: ["sounds/zig-zag.mp3"],
    }),
    color: "#8e44ad",
  },
  m: {
    sound: new Howl({
      urls: ["sounds/moon.mp3"],
    }),
    color: "#2c3e50",
  },
};

var width = view.size.width;
var height = view.size.height;

var text = new PointText(new Point(width / 2, height / 2));
text.fontSize = 100;
text.justification = "center";
text.fillColor = "white";
text.content = "Press any key";

var circles = [];

function onKeyDown(event) {
  if (keyData[event.key]) {
    initialiseCircles();
  }
}

function initialiseCircles() {
  point = calcPosition();
  genenerateCircle(point);
}

function calcPosition() {
  //use window height and width to calculate random integar
  var maxPoint = new Point(width, height);
  var randomPoint = Point.random();
  return (point = maxPoint * randomPoint);
}

function genenerateCircle(point) {
  //create new circle (ussing random point calculated)
  var circle = new Path.Circle(new Point(point), 500);
  //fill with corresponding colour
  circle.fillColor = keyData[event.key].color;
  //play corresponding sound
  keyData[event.key].sound.play();
  //add the new circle to the array
  circles.push(circle);

  return circle;
}

function onFrame(event) {
  //for each circle in the array
  for (var i = 0; i < circles.length; i++) {
    //shrink
    circles[i].scale(0.9);
    //fade color
    circles[i].fillColor.hue += 1;
    //remove when too small
    if (circles[i].area < 1) {
      circles[i].remove();
      circles.splice(i, 1);
    }
  }
}
