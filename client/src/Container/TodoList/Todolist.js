import React, { useState } from "react";
import "./TodoList.css";

export default () => {
  const [state, setState] = useState({
    arr: [],
    items: {},
    isInEditMode: false,
    selectedItem: {},
    index: "",
    selectedIndex: "",
    updatedItems: ""
  });

  const handleChange = e => {
    e.persist();
    setState(prevState => ({ ...prevState, items: e.target.value }));
  };

  const handleSubmit = () => {
    const join = state.arr;
    join.push({
      id: state.arr.length + 1,
      name: state.items
    });

    setState(prevState => ({ ...prevState, arr: join, items: "" }));
  };

  const handleDelete = item => {
    const myItems = state.arr.filter(elem => elem.id !== item);
    setState(prevState => ({ ...prevState, arr: myItems }));
  };

  const changeEdit = (item, index) => {
    setState(prevState => ({
      ...prevState,
      isInEditMode: !state.isInEditMode,
      selectedItem: item,
      selectedIndex: index
    }));
  };

  const saveNewItem = () => {
    const items = state.arr;
    for (let i in items) {
      if (i.toString() === state.selectedIndex.toString()) {
        items[i].name = state.updatedItems;
        break;
      }
    }
    setState(prevState => ({
      ...prevState,
      arr: items,
      isInEditMode: !state.isInEditMode
    }));
  };

  const itemsChange = e => {
    e.persist();
    setState(prevState => ({ ...prevState, updatedItems: e.target.value }));
  };

  return (
    <div className="main-todo">
      <input
        placeholder=" Type here"
        type="text"
        value={state.items.name}
        onChange={handleChange}
      />
      <button className="btn3" type="submit" onClick={handleSubmit}>
        Add
      </button>
      {state.isInEditMode ? (
        <div>
          <input
            type="text"
            defaultValue={state.selectedItem?.name || ""}
            onChange={itemsChange}
          />
          <button className="btn3" onClick={() => saveNewItem()}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <span> Todo List</span>
          {state.arr.map((item, index) => (
            <div key={index} className="new__arr">
              {item.name}
              <div
                className="fa fa-trash"
                onClick={() => handleDelete(item.id)}
              ></div>
              <div
                className="fa fa-pencil"
                onClick={() => changeEdit(item, index)}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
