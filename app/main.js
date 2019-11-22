import ListController from "./Controllers/ListController.js";

//NOTE This should be good to go
class App {
  constructor() {
    this.listController = new ListController();
  }
}

window["app"] = new App();
