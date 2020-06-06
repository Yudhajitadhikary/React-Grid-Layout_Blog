import React, { Component } from "react";
// import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from "./components/demoComponent";
const ResponsiveGridLayout = WidthProvider(Responsive);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
    this.onHandle = this.onHandle.bind(this);
  }
  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  }
  render() {
    var layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
    ];
    var layout1 = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 6, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 6, h: 1 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
    ];

    var layout = { lg: this.state.value === true ? layout : layout1 };

    return (
      <div>
        <button style={{ marginLeft: "45%" }} onClick={this.onHandle}>
          {this.state.value === true ? "Increase" : "Decrease"} Grid by 2
          columns
        </button>
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={281}
          width={1200}
        >
          <div key="a" style={{ backgroundColor: "yellow" }}>
            <DemoComponent color={"yellow"} />
          </div>
          <div key="b" style={{ backgroundColor: "green" }}>
            <DemoComponent color={"green"} />
          </div>
          <div key="c" style={{ backgroundColor: "red" }}>
            <DemoComponent color={"red"} />
          </div>
          <div key="d" style={{ backgroundColor: "blue" }}>
            <DemoComponent color={"blue"} />
          </div>
          <div key="e" style={{ backgroundColor: "violet" }}>
            <DemoComponent color={"violet"} />
          </div>
         <div key="f" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
        </ResponsiveGridLayout>
      </div>
    );
  }
}
