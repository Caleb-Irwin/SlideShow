//Made Class slideShow
class slideShow {
  //Constructor takes 2 or 3 arguments, namly the id of the target canvas, an array of urls to pictures and possiply the speed, which defalts to 4s
  constructor(id, picArray, speed = 4000) {
    //Sets play to true
    this.play = true;
    //Gets target canvas
    this.target = document.getElementById(id);
    //Checks is target exists
    if (this.target == null) {
      console.error(`Slide Show: Invalid ID (${id})`);
    }
    //Initalizes Canvas
    this.cnv = this.target.getContext("2d");
    //Filters array for pictures
    this.pictureUrlArray = picArray.filter((value) => {
      return value.match(/\.(jpeg|jpg|gif|png)$/);
    });
    //Adds Speed
    this.speed = speed;
    //Start imgElemts array. An array of img elements that are not part of the dom.
    this.imgElements = [];
    //For each image it creates an elemnt and pushes it to imgElements
    this.pictureUrlArray.forEach((element) => {
      let x = document.createElement("img");
      x.src = element;
      this.imgElements.push(x);
    });
    //When the first image loads it draws it
    this.imgElements[0].onload = () => {
      this.cnv.drawImage(this.imgElements[0], 0, 0);
    };
    //Sets the iteraror i to one
    this.i = 1;
    //On each interval it checks if play is true then it draws image and itterates i
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
  //Invers play
  playPause() {
    this.play = !this.play;
  }
  //Increments i and draws
  skipForward() {
    this.i++;
    this.cnv.drawImage(
      this.imgElements[this.i % this.pictureUrlArray.length],
      0,
      0
    );
  }
  //decrements i, checks if it is less than 0, resolves that and draws
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
