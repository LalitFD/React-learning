import { Component } from "react";
import counter from "./component/counter";
import Counter from "./component/counter";

class App extends Component {
  render() {
    let customerName = "Cheeku Singh";
    let customerAge = 25;
    let address = "Rajmohalla, Indore (MP)";
    let fruitList = ["Mango", "Cheeku", "Banana", "Papaya", "Orange", "Apple"];

    return <>
      <h1>Name: {customerName}</h1>
      <h1>Age: {customerAge}</h1>
      <h1>address: {address}</h1>
      <ul>{fruitList.map((item, index) => {
        return <li key={index}>{item}</li>
      })}</ul>

      <Counter />
    </>
  }
}

export default App;