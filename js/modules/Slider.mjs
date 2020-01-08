export default class Slider {
  constructor(interval, sliderClass) {
    this.interval = interval * 1000;
    this.sliders = [...document.getElementsByClassName(sliderClass)];
    this.sliderAmount = this.sliders.length;
    this.index = 0;
  }

  hideImg(sliders) {
    for (const slider of sliders) {
      slider.classList.add('hide-image');
      slider.classList.remove('show-image');
    }
  }

  showImg(sliders, index) {
    console.log(sliders[index]);
    sliders[index].classList.add('show-image');
    sliders[index].classList.remove('hide-image');
  }

  triggerSlider() {
    this.index++;
    console.log(this.sliders);

    if (this.index > this.sliderAmount - 1) {
      this.index = 0;
    }

    this.hideImg(this.sliders);
    this.showImg(this.sliders, this.index);
  }

  init() {
    setInterval(this.triggerSlider.bind(this), this.interval);
  }
}