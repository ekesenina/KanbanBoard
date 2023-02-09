import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./js/Header";
import Main from "./js/Main";
import Description from "./js/Description";
import Footer from "./js/Footer";
import dataMock from "./dataMock.json";
import { Layout } from "./js/Layout";

// let initialTask = dataMock;
let initialTask =
  (localStorage.data && JSON.parse(localStorage.data)) || dataMock;
let statusList = Object.keys(initialTask);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: initialTask,
    };
  }

  addTask = (name) => {
    let newTask = {};
    newTask.id = this.createTaskArr().length + 1;
    newTask.name = name;
    newTask.description = "";

    let data = this.state.task;

    data[statusList[0]].push(newTask);
    this.writeTask(data);
  };

  moveTask = (id, taskId) => {
    let data = this.state.task;
    let currentList = data[statusList[taskId]];
    let nextList = data[statusList[taskId + 1]];

    currentList.forEach((task, index) => {
      if (String(task.id) === id) {
        nextList.push(task);
        currentList.splice(index, 1);
      }
    });

    this.writeTask(data);
  };

  editDescription = (taskId, description) => {
    let data = this.state.task;
    for (let key in data) {
      data[key].forEach(
        (task) => task.id === taskId && (task.description = description)
      );
    }

    this.writeTask(data);
  };

  resetBoard = () => {
    let data = { Backlog: [], Ready: [], InProgress: [], Finished: [] };
    this.writeTask(data);
  };

  loadMock = () => {
    this.writeTask(dataMock);
    document.location.reload();
  };

  writeTask = (task) => {
    localStorage.data = JSON.stringify(task);
    this.setState({ task: task });
  };

  createTaskArr = () => {
    let arrOfTaskArr = Object.values(this.state.task);
    let allTasks = [];

    arrOfTaskArr.forEach((taskArr) => {
      taskArr && taskArr.map((task) => allTasks.push(task));
    });

    return allTasks;
  };

  render() {
    let userMenuData = [
      { href: "", title: "Profile", action: null },
      { href: "", title: "Log Out", action: null },
      { href: "/", title: "Load mock", action: this.loadMock },
      { href: "/", title: "Reset", action: this.resetBoard },
    ];

    return (
      <>
        <div>
          <Header userMenuData={userMenuData} />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                key={"0"}
                index
                element={
                  <Main
                    task={this.state.task}
                    addTask={this.addTask}
                    moveTask={this.moveTask}
                  />
                }
              />

              {this.createTaskArr().map((task, index) => (
                <Route
                  key={`${index + 1}`}
                  path={`${task.id}`}
                  element={
                    <Description
                      task={task}
                      editDescription={this.editDescription}
                    />
                  }
                />
              ))}

              <Route
                key={"0-404"}
                path="*"
                element={
                  <Main
                    task={this.state.task}
                    addTask={this.addTask}
                    moveTask={this.moveTask}
                  />
                }
              />
            </Route>
          </Routes>

          <Footer task={this.state.task} />
        </div>
      </>
    );
  }
}
export default App;
