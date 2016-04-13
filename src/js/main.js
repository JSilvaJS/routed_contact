import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Link } from 'react-router';

export default class Main extends Component {
	render () {
		return (
			<div className="main">
				<div className="main-header-wrapper">
				<h2>Amigos Mios</h2> 
				</div>
				<div className="left-nav">
				<div className="eckhart-quote"></div>
				</div>
				<div className="right-nav">
				<div className="alan-quote"></div>
				</div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/UserDetails">UserDetails</Link>
					<Link to="/FormData">FormData</Link>
				</nav>
				{this.props.children}
				<img className="shadow-bg" src="http://i.imgur.com/KIv2Lf4.png"/>
				<div className="main-footer-wrapper">
				<footer>&copy;Cool Footer, LLC</footer>
				</div>
			</div> 
		)
	}
}