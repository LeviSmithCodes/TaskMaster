import { generateId } from "../utils.js";
import Item from "./Item.js";

export default class List {
  // constructor(data) {
  //   //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  //   this.id = data.id || generateId();
  //   this.name = data.name || "";
  //   this.items = data.items.map(i => new Item(i)) || []; //.map(i => new List(i)) || [];
  // }

  constructor({ id = generateId(), name, items = [] }) {
    this.id = id;
    this.name = name;
    this.items = items.map(i => new Item(i)); //.map(i => new List(i)) || []; // REVIEW wait, why are we doing this?
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get template() {
    return `
    <div class="col-12 col-lg-5 mt-5 mb-3 p-3 border border-dark bg-light">
      <h2 class="text-center mb-3 border-bottom border-dark">
        ${this.name}
      </h2>
      <dl class="ml-5">
        ${this.drawItems()}</dl>
      <form class="mx-auto" onsubmit="app.listController.addItem(event, '${
        this.id
      }')">
      <div class="form-group row justify-content-center">
        <div class="col-12 col-sm-8 col-lg-8">
          <input
            type="text"
            class="form-control"
            name="text"
            id="ItemInput"
            placeholder="Add an item here"
          />
        </div>
      </div>
      <div class="row form-group justify-content-center">
        <div class="col-sm-8">
          <button type="submit" class="btn text-white btn-add btn-block">
            Add Item
          </button>
        </div>
        <div class="col-sm-8 mt-3">
          <button type="button" class="btn btn-danger btn-block" onclick="app.listController.deleteList('${
            this.id
          }')">Delete List</button>
        </div>
      </div>
    </form>
  </div>`;
  }

  drawItems() {
    let template = "";
    this.items.forEach(item => (template += item.template));
    return template;
  }
}
