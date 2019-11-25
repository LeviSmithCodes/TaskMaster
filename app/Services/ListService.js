import List from "../Models/List.js";
import Item from "../Models/Item.js";
import _store from "../store.js";

//Public
class ListService {
  deleteList(listId) {
    let foundList = _store.State.lists.find(list => list.id == listId);
    for (let i = 0; i < _store.State.lists.length; i++) {
      if (_store.State.lists[i] == foundList) {
        _store.State.lists.splice(i, 1);
      }
    }
    _store.saveState();
  }
  addList(newList) {
    let list = new List(newList);
    _store.State.lists.push(list);
    _store.saveState();
  }

  deleteItem(listId, itemId) {
    let foundList = _store.State.lists.find(list => list.id == listId);
    foundList.items = foundList.items.filter(item => item.id != itemId);
    _store.saveState();
  }
  addItem(itemData) {
    let item = new Item(itemData);
    let foundList = _store.State.lists.find(list => list.id == item.listId); // hooooo boy
    foundList.items.push(item);
    _store.saveState();
  }

  //Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
