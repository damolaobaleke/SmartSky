import React,{useEffect} from 'react';
import {BrowserRouter ,Link, Route,Switch} from 'react-router-dom';
import HomePage from '../components/Home/Home';
import LandingPage from '../components/Landing/LandingPage';
import './App.css';

const App=()=>{
  return(
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/landing" component={LandingPage}/>
				</Switch>
			</div>
		</BrowserRouter>
  )
}

export default App;
