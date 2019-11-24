import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), text, listId }) {
    this.id = id;
    this.text = text;
    this.listId = listId;
  }
  get template() {
    return `<dt><i class="far fa-square list-item-with-check" onclick="app.listController.deleteItem('${this.listId}','${this.id}')"></i> ${this.text}</dt>`; // TODO self stretch: Make these empty boxes that fill with a check on hover
  }
}
