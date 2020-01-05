import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    arr : [],
    items : ''        

  };
  
  handleChange =(e)=>{
    this.setState({items : e.target.value})
  }
  handleSubmit=()=>{
    const qays= this.state.arr;
    qays.push(this.state.items)
    
    this.setState({arr: qays})
  }
  handleDelete =()=>{
    
  }

  render() {
    return (
      <div className="mainTodo">
        <input
          type="text"
          value ={this.state.items}
          onChange = {this.handleChange}
        />
        <button className="btn3" type="submit" onClick={this.handleSubmit}>
          Add
        </button>
        <div>
          {this.state.arr.map((items, index)=> <div key={index}>{items} <button >Delete</button></div>)}
        </div>
      </div>
    );
  }
}

export default TodoList;
