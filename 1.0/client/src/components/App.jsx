import React,{useEffect} from 'react';
import {BrowserRouter ,Link, Route,Switch} from 'react-router-dom';
import HomePage from '../components/Home/Home';
import './App.css';

const App=()=>{
  return(
		<BrowserRouter>
			<Switch>
				<div className="App">
					<Route exact path="/" component={HomePage} />

				</div>
			</Switch>
		</BrowserRouter>
  )
}

export default App;
