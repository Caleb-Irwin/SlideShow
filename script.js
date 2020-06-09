class slideShow {
  constructor(id, picArray, speed = 4000) {
    this.play = true;
    this.target = document.getElementById(id);
    if (this.target == null) {
      console.error(`Slide Show: Invalid ID (${id})`);
    }
    this.cnv = this.target.getContext("2d");
    this.pictureUrlArray = picArray.filter((value) => {
      return value.match(/\.(jpeg|jpg|gif|png)$/);
    });
    this.speed = speed;
    this.imgElements = [];
    this.pictureUrlArray.forEach((element) => {
      let x = document.createElement("img");
      x.src = element;
      this.imgElements.push(x);
    });
    this.imgElements[0].onload = () => {
      this.cnv.drawImage(this.imgElements[0], 0, 0);
    };
    this.i = 1;
    setInterval(() => {
      if (this.play) {
        this.cnv.drawImage(
          this.imgElements[this.i % this.pictureUrlArray.length],
          0,
          0
        );
        this.i++;
      }
    }, speed);
  }
  playPause() {
    this.play = !this.play;
  }
  skipForward() {
    this.i++;
    this.cnv.drawImage(
      this.imgElements[this.i % this.pictureUrlArray.length],
      0,
      0
    );
  }
  skipBackward() {
    this.i--;
    if (this.i < 0) {
      this.i = this.pictureUrlArray.length - 1;
    }
    this.cnv.drawImage(
      this.imgElements[this.i % this.pictureUrlArray.length],
      0,
      0
    );
  }
}
