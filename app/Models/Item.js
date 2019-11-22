import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), text, listId }) {
    this.id = id;
    this.text = text;
    this.listId = listId;
  }
  get template() {
    return `<li>${this.text}</li>
    <button class="btn btn-danger" type="button" onclick="app.listController.deleteItem('${this.listId}','${this.id}')">delete me</button>`;
  }
}
