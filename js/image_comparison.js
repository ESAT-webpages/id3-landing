const imageComparisonSlider = document.querySelector('[data-component="image-comparison-slider"]');


var r = document.querySelector(':root');

// Create a function for getting a variable value
function getValRoo() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
 // alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function setValRoot(_val) {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--clipVideo', _val);
}

function setSliderstate(e, element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');

  if (e.type === 'input') {
    sliderRange.classList.add('image-comparison__range--active');
    return;
  }

  sliderRange.classList.remove('image-comparison__range--active');
  element.removeEventListener('mousemove', moveSliderThumb);
}

function moveSliderThumb(e) {
  const sliderRange = document.querySelector('[data-image-comparison-range]');
  const thumb = document.querySelector('[data-image-comparison-thumb]');
  let position = e.layerY - 20;

  if (e.layerY <= sliderRange.offsetTop) {
    position = -20;
  }

  if (e.layerY >= sliderRange.offsetHeight) {
    position = sliderRange.offsetHeight - 20;
  }

  thumb.style.top = `${position}px`;
}

function moveSliderRange(e, element) {
  const value = e.target.value;
  const slider = element.querySelector('[data-image-comparison-slider]');
  const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');

  console.log(value);


  setValRoot(value+'%');

  slider.style.left = `${value}%`;
  imageWrapperOverlay.style.width = `${value}%`;

  imageWrapperOverlay.style.border='20px solid green';

  element.addEventListener('mousemove', moveSliderThumb);
  setSliderstate(e, element);
}

function init(element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');

  console.log('imageComparisonSlider');

  if ('ontouchstart' in window === false) {
    sliderRange.addEventListener('mouseup', e => setSliderstate(e, element));
    sliderRange.addEventListener('mousedown', moveSliderThumb);
  }

  sliderRange.addEventListener('input', e => moveSliderRange(e, element));
  sliderRange.addEventListener('change', e => moveSliderRange(e, element));
}

init(imageComparisonSlider);