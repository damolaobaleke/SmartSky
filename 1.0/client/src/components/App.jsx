import React,{useEffect} from 'react';
import {BrowserRouter ,Link, Route,Switch} from 'react-router-dom';
import AuthenticationPage from '../components/Home/Home';
import LandingPage from '../components/Landing/LandingPage';
import AboutPage from '../components/About Us/About Us';
import HowItWorksPage from '../components/How it Works/HowItWorks';
import ProfilePage from '../components/Profile/ProfilePage';
import Account from '../components/Profile/Account';
import PaymentMethod from '../components/Profile/Payment';
import Order from '../components/Profile/Orders';
import OrderDetails from '../components/Orders/OrderDetailsPage';
import './App.css';

const App=()=>{
  return(
	<BrowserRouter>
			<Switch>
				<div className="App">
					<Route exact path="/" component={LandingPage} />
					<Route path="/auth" component={AuthenticationPage}/>
					<Route path="/about" component={AboutPage}/>
					<Route path="/how-it-works" component={HowItWorksPage}/>
					<Route path="/profile" component={ProfilePage}/>
					<Route exact path="/profile/:id/account" component={Account}/>
					<Route exact path ="/profile/:id/payments" component={PaymentMethod}/>
					<Route exact path ="/profile/:id/orders" component={Order}/>
					<Route exact path ="/profile/:id/order/:orderid/details" component={OrderDetails}/>
				</div>
			</Switch>
	</BrowserRouter>
  )
}

export default App;
