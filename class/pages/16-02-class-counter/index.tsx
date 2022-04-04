import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // state는 리액트 component에서 제공해주는 기능임.그렇기때문에 state라는 이름을 함부로 바꾸면 안됨.
  // useState를 따로 만들 필요 없음. state를 쓰면 useState가 자동으로 만들어짐."component" 안에 있는 기능!
  state = {
    count: 0,
  };

  // 함수 aaa는 우리가 만든 거라 이름 마음대로 해도됌.
  /* 	aaa() {
		
	} */

  /* // prev를 사용해서도 동일하게 만들수 있음!
	onClickCounter() {
		console.log(this.state.count)
		this.setState({
			count: this.state.count + 1
		})
	} */

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  // render는 리액트 component에서 제공해주는 기능임.그렇기때문에 render라는 이름을 함부로 바꾸면 안됨.
  render() {
    return (
      <div>
        {/* state를 적으면 자동으로 this가 나옴.this는 내 자신을 의미? */}
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!</button>
      </div>
    );
  }
}
