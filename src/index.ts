//hướng đối tượng
//đóng gói, kế thừa, đa hình, trừu tượng
//giúp dễ dàng sử dụng và tái sử dụng
//trong mỗi object cần hàm khởi tạo
class PageObject {
  private _title: string;
  protected pageNumber?: number;
  constructor(title: string) {
    this._title = title;
  }
  get title(): string {
    return `Custom infor ${this._title}`;
  }

  set title(newTitle: string) {
    if (newTitle == "") {
      throw new Error("Invalid title");
    }
    this._title = newTitle;
  }

  openPage() {
    console.log(`Page ${this._title} was opened`);
  }
}

let page = new PageObject("General Page");
console.log(page.title);
page.title = "";
console.log(page.title);

let page2 = new PageObject("Page 2");
console.log(page2.title);
page2.openPage();

//tính kế thừa
class HomePage extends PageObject {
  chart: string;
  constructor(title: string, chart: string) {
    super(title);
    this.chart = chart;
  }

  isOnPage() {
    console.log("Page is active");
  }

  openPage() {
    console.log(`Page Home Page was opened`);
  }
}

let homePage = new HomePage("New Page", "Revenue Chart");

//đa hình
// => overide logic mới lên method của class original đã defined
