import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), text }) {
    this.id = id;
    this.text = text;
  }
  get template() {
    return `<dt>${this.text}</dt>`;
  }
}
