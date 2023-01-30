function changeColor(value) {
    const colorValue = (value * 2.55).toFixed(); // scale value to 0-255 range
    const color = `rgb(${255 - colorValue}, ${colorValue}, 0)`; // calculate color in RGB format
    document.body.style.backgroundColor = color; // change the background color of the page
  }
  