import Navbar from './Navbar';
import Home from "./Home";
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Create from './Create';
function App() {
  return (
		<Router>
			<div className="App">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Simp-Blog</title>
				</Helmet>
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
