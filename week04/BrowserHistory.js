class PageNode {
  constructor(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
  }
}

class BrowserHistory {
  constructor() {
    this.currentPage = null;
  }

  visitPage(url) {
    const newPage = new PageNode(url);
    if (this.currentPage) {
      this.currentPage.next = newPage;
      newPage.prev = this.currentPage;
    }
    this.currentPage = newPage;
  }

  back() {
    if (this.currentPage && this.currentPage.prev) {
      this.currentPage = this.currentPage.prev;
      console.log("Going back to:", this.currentPage.url);
    } else {
      console.log("No more pages to go back");
    }
  }

  forward() {
    if (this.currentPage && this.currentPage.next) {
      this.currentPage = this.currentPage.next;
      console.log("Going forward to:", this.currentPage.url);
    } else {
      console.log("No more pages to go forward");
    }
  }
}

const history = new BrowserHistory();
history.visitPage('www.google.com');
history.visitPage('www.youtube.com');
history.visitPage('www.facebook.com');
history.visitPage('www.instagram.com');
console.log(history.currentPage)
history.back();
history.back();
history.forward();
history.forward();
history.forward();
