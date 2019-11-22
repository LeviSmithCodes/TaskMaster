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
    let delConfirmation = confirm(
      "Are you sure you want to check off this item?"
    );
    if (delConfirmation) {
      ListService.deleteItem(listId, itemId);
      _drawLists();
    }
  }

  addList(event) {
    // FIXME make body responsive in height to accomodate more lists
    event.preventDefault();
    let formData = event.target;
    let newList = {
      name: formData.name.value
      // items: []
    };

    ListService.addList(newList);
    formData.reset();

    _drawLists();
  }

  deleteList(listId) {
    let delConfirmation = confirm("Are you sure you want to delete this list?");
    if (delConfirmation) {
      ListService.deleteList(listId);
      _drawLists();
    }
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
