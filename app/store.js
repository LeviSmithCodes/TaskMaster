import List from "./Models/List.js";
const STORAGEKEY = "CONFERENCE.STATE";

let _state = {
  /** @type {List[]} */
  lists: [
    new List({
      name: "To-Do",
      items: [
        { text: "Hover over the checkbox (on desktop)" },
        { text: "Complete this item" },
        { text: "Create a new list" },
        { text: "Create a new item on that list" },
        { text: "Delete this list!" }
      ]
    })
  ]
};

//NOTE You should not need to change the code from this point down
// NOTE the above is a lie

class Store {
  /**
   * Provides access to application state data
   */
  constructor() {
    this.loadState();
  }
  get State() {
    return _state;
  }

  get Lists() {
    //NOTE use this getter to ensure the objects in list are all of type List
    return _state.lists.map(list => new List(list));
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("state", JSON.stringify(_state));
    // localStorage.setItem(STORAGEKEY, JSON.stringify(_state));
  }

  //NOTE this method will get the lists from local storage at the start of the app
  loadState() {
    try {
      let saved = JSON.parse(localStorage.getItem("state"));
      if (saved) {
        // _state = saved;
        _state.lists = saved.lists.map(l => new List(l)); // had to turn back POJOs into real lists. apparently "state" works the same
      }
      // let data = JSON.parse(localStorage.getItem(STORAGEKEY));
      // _state.lists = data.lists.map(l => new List(l));
    } catch (e) {}
  }
}

const store = new Store();
export default store;
