class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  constructor(url, size) {
    this.url = url;
    this.size = new Size(size.width, size.height);
  }
  getUrl() {
    return this.url;
  }
  setUrl(url) {
    this.url = url;
  }
  setSize(width, height) {
    this.size = new Size(width, height);
  }
  getSize() {
    return this.size;
  }
  cloneImage() {
    return new Image(this.url, this.size);
  }
}

