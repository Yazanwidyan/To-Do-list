import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    arr: [],
    items: "",
    isInEditMode: false
  };

  handleChange = e => {
    this.setState({ items: e.target.value });
  };
  handleSubmit = () => {
    const join = this.state.arr;
    join.push(this.state.items);

    this.setState({ arr: join });
  };

  /*handleDelete= (index) =>{
    const postArray = Object.assign([], this.state.arr);
    postArray.splice(index,1);
    this.setState({ arr : postArray})
  }

 /* handleDelete = (index) => {
    const myItems = this.state.arr.filter(item=> {
      return item.index !== index
    })
    this.setState({items : myItems})
  };*/

  handleDelete = index => {
    const myItems = this.state.arr;
    const x = myItems.findIndex(item => item.index === index);
    myItems.splice(x);
    this.setState({ arr: myItems });
  };

  changeEdit = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  /*updateText=()=>{
 const newTxt= this.state.arr.map((items) => (
     {items}))
     this.setState({ newTxt:newTxt})

  
 }
*/
  render() {
    return (
      <div className="mainTodo">
        <input
          placeholder=" Type here"
          type="text"
          value={this.state.items}
          onChange={this.handleChange}
        />
        <button className="btn3" type="submit" onClick={this.handleSubmit}>
          Add
        </button>
        {this.state.isInEditMode ? (
          <div>
            <button> Save</button>
            <input type="text" defaultValue={this.state.items} />
          </div>
        ) : (
          <div>
           
            <span>Todo List</span>
            {this.state.arr.map((item, index) => (
              <div key={index}>
                {item} 
                <input className="check" type="checkbox" value="on" />
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.changeEdit}>Edit</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TodoList;
