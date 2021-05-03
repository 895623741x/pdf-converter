import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DropZone from "./Homepage/DropZone";

import "./App.css";

function App() {
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
		<Router>
			<Switch>
				<Route exact path="/" component={DropZone} />
			</Switch>
		</Router>
	);
}

export default App;
