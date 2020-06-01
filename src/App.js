import React, { Component } from "react";

import Mustdo from "./components/mustdoCtrl";
import Donejob from "./components/doneCtrl";

class App extends Component {
  state = {
    mustDo: [],
    showpam: false,
    newJob: "",
    hasDone: [],
  };

  showctrl = () => {
    this.setState({ showpam: !this.state.showpam });
  };
  mover = (id) => {
    const mustDo = [...this.state.mustDo];
    const hasDone = [...this.state.hasDone];
    const deleteditem = mustDo.filter((p) => p.id !== id);
    const move = mustDo.filter((p) => p.id === id);
    hasDone.push(move[0]);
    this.setState({ mustDo: deleteditem, hasDone: hasDone });
  };
  deleter = (id) => {
    const hasDone = [...this.state.hasDone];
    const deletit = hasDone.filter((p) => p.id !== id);
    this.setState({ hasDone: deletit });
  };

  editor = (event, id) => {
    const { mustDo } = this.state;

    const indexNum = mustDo.findIndex((p) => p.id === id);
    const per = mustDo[indexNum];
    per.name = event.target.value;
    mustDo[indexNum] = per;
    this.setState({ mustDo: mustDo });
  };

  addTo = (event) => {
    this.setState({ newJob: event.target.value });
  };

  addnew = () => {
    const mustDo = [...this.state.mustDo];
    if (this.state.newJob != "") {
      const item = {
        id: Math.floor(Math.random() * 500),
        name: this.state.newJob,
      };

      mustDo.push(item);
      this.setState({ mustDo, newJob: "" });
    }
  };
  render() {
    const { mustDo, showpam, hasDone } = this.state;
    let actList = null;
    let doneList = null;
    if (showpam) {
      actList = (
        <Mustdo
          mustDo={mustDo}
          deleted={this.mover}
          actEditor={this.editor}
        ></Mustdo>
      );
      doneList = <Donejob hasDone={hasDone} deleting={this.deleter}></Donejob>;
    }
    return (
      <div className="site">
        <div className="title">
          <h1>To Do List</h1>
        </div>

        <div className="container">
          <div className="inputField">
            <input
              className="new-input"
              type="text"
              value={this.state.newJob}
              onChange={this.addTo}
              required
            />
            <label className="iner-text">Enter a new activity</label>
            <input type="checkbox" id="check" onChange={this.addnew} />
            <label for="check" className="bottom"></label>
          </div>
          <div className="planning-info">
            <p>Number of not complited activities is : {`${mustDo.length}`}</p>
            <p>Number of complited activities is : {`${hasDone.length}`}</p>
            <button className="btn" onClick={this.showctrl}>
              SHOW / HIDE MY LIST
            </button>
          </div>
        </div>
        <hr />
        {actList}
        {doneList}
      </div>
    );
  }
}

export default App;
