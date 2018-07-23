import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// class Component {
//   constructor(props) {
//     this.props = props || {}
//   }

//   setState(state) {
//     this.state = state
//     this.render()
//   }

// }

// class Foo extends Component {
//   render() {
//       return `Hello, ${this.props.bar}`
//   }
// }

// console.log(new Foo({ bar: 'bat' }).render())
