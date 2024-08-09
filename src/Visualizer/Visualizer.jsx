import React, { useRef, useState } from "react";
import Block from "../Components/Blocks/Block";
import selectionSort1 from "../Algorithms/SelectionSort";
export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
    let isGenerateArrayBtnDisabled = false;
  }

  componentDidMount() {
    this.resetArray();
  }

  selectionSort() {
    const copyOfArray = [...this.state.array];
    const animation = selectionSort1(copyOfArray);
    console.log(this.state.array);
    this.isGenerateArrayBtnDisabled = true;

    for (let i = 0; i < animation.swap.length; i++) {
      setTimeout(() => {
        console.log("Hello");
        const tmp = this.state.array[animation.swap[i][0]];
        this.state.array[animation.swap[i][0]] =
          this.state.array[animation.swap[i][1]];
        this.state.array[animation.swap[i][1]] = tmp;

        this.setState(this.state.array);
      }, 100 * (1 + i));
    }
  }

  resetArray() {
    const array = [];
    for (let index = 0; index < 125; index++) {
      array[index] = randIntBetweenRange(5, 500);
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((val, idx) => (
          <Block value={val} key={idx} />
        ))}
        <button
          disabled={this.isGenerateArrayBtnDisabled}
          onClick={() => this.resetArray()}
        >
          Generate Array
        </button>
        <button onClick={() => this.selectionSort()}>Sort</button>
      </>
    );
  }
}

function randIntBetweenRange(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function testing(array) {
  setTimeout((array) => {
    array[0] = 5;
    return array;
  }, 100);
}
