import ListService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.State.lists;
  lists.forEach(list => (template += list.template));
  // debugger;
  document.querySelector("#lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addItem(event, listId) {
    // debugger;
    event.preventDefault();
    let formData = event.target;
    let itemData = {
      text: formData.text.value,
      listId
    };
    ListService.addItem(itemData);
    formData.reset();
    _drawLists();
  }

  deleteItem(listId, itemId) {
    ListService.deleteItem(listId, itemId);
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
