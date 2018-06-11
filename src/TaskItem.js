import React, { Component } from 'react';
import { Button } from 'antd';
import './TaskItem.css';


class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item">
        <p>{this.props.task}</p>
        <Button onClick={this.props.edit}>Edit</Button>
       <Button onClick={this.props.delete}>Delete</Button>
      </div>
    );
  }
}

export default TaskItem;
