import React, { Component } from "react";
import "./App.css";
import { Button, Input, Modal } from "antd";
import "antd/dist/antd.css";
import TaskItem from "./TaskItem";
import { addTask, deleteTask, editTask } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
      editModal: false,
      value: "",
      listOfTasks: [],
      toEdit: null,
      editedTask: ""
    };
  }
  addExpense = () => {
    let k = this.state.listOfTasks;
    k.push(this.state.value);
    this.setState({ listOfTasks: k, addModal: false, value: "" });
    this.props.store.dispatch(addTask(this.state.value));
  };
  showModal = () => {
    this.setState({
      addModal: true
    });
  };
  showEditModal = i => {
    this.setState({
      editModal: true,
      toEdit: i
    });
  };
  handleOk = e => {
    this.setState({
      addModal: false
    });
  };
  closeAddModal = e => {
    this.setState({
      addModal: false
    });
  };
  closeEditModal = e => {
    this.setState({
      editModal: false
    });
  };
  onChange = e => {
    this.setState({ value: e.target.value });
  };
  onEditStringChange = e => {
    this.setState({ editedTask: e.target.value });
  };
  delete = i => {
    let k = this.state.listOfTasks;
    k.splice(i, 1);
    this.setState({ listOfTasks: k });
    this.props.store.dispatch(deleteTask(i));
  };
  edit = () => {
    let k = this.state.listOfTasks;
    k[this.state.toEdit] = this.state.editedTask;
    this.setState({ listOfTasks: k, editModal: false, editedTask: "" });
    this.props.store.dispatch(
      editTask(this.state.editedTask, this.state.toEdit)
    );
  };
  render() {
    console.log(this.props.tasks);
    return (
      <div className="App">
        {this.props.tasks.map((task, i) => (
          <TaskItem
            task={task}
            key={i}
            delete={() => this.delete(i)}
            edit={() => this.showEditModal(i)}
          />
        ))}
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          title="Add Task"
          visible={this.state.addModal}
          onCancel={this.closeAddModal}
        >
          <Input onChange={this.onChange} value={this.state.value} />
          <Button type="primary" onClick={this.addExpense}>
            Add task
          </Button>
        </Modal>
        <Modal
          title="Edit Task"
          visible={this.state.editModal}
          onCancel={this.closeEditModal}
        >
          <Input
            onChange={this.onEditStringChange}
            value={this.state.editedTask}
          />
          <Button type="primary" onClick={this.edit}>
            Edit task
          </Button>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(App);
