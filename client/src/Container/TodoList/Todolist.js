import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    arr: [],
    items: "",
    editItem: false,
    newWord: ""
  };

  handleNewWord = x => {
    this.setState({ newWord: x.target.value });
  };

  handleChange = e => {
    this.setState({ items: e.target.value });
  };
  handleSubmit = () => {
    const joined = this.state.arr;
    joined.push({ name: this.state.items });
    this.setState({ arr: joined, items: "" });
  };

  handleDelete = index => {
    const joined = this.state.arr;
    var index2 = joined.indexOf(index);
    joined.splice(index2, 1);
    this.setState({ arr: joined, items: "" });
  };

  handleEdit = index => {
    this.setState({
      editItem: true,
      newWord: index.name,
      id: index.id
    });
  };

  handelSave = row => {
    for (var i in this.state.arr) {
      if (this.state.arr[i].id === row.id) {
        this.state.arr[i].name = this.state.newWord;
        break;
      }
    }
    this.setState({
      arr: this.state.arr,
      editItem: false
    });
  };

  render() {
    return (
      <div>
        <input
          className="inpt"
          type="text"
          value={this.state.items}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          add
        </button>

        {this.state.arr.map((row, i) => (
          <div key={i}>
            {this.state.editItem && this.state.id === row.id ? (
              <div>
                <input
                  type="text"
                  value={this.state.newWord}
                  onChange={this.handleNewWord}
                />
                <button onClick={() => this.handelSave(row)}>Save</button>
              </div>
            ) : (
              <div>
                {row.name}
                <button onClick={() => this.handleEdit(row)}>Edit</button>
                <button type="submit" onClick={() => this.handleDelete(row)}>
                  delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
