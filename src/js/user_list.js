import React, { Component } from 'react';
import UserData from './user_data';
import UserDetails from './user_details';
import Icon from './icon';
import FormData from './form_data';
import { Link } from 'react-router';

export default class UserList extends Component {

	// constructor(...rest) {
	// 	super(...rest);
	// 	this.state = {UserData};
	// }

	getUser(user) {
		return (
			<Link className="ul-link-text" to={`/UserDetails/${user.name}`} key={user.name}><li key={user.name} className="peeps_li">
				<img className="peeps_img" key={user.name} src={user.photo}/>{user.name}
			</li></Link>
			//<button onclick={() => this.removeUser(UserData)}>Remove</button>
		);
	}

	// removeUser(UserData) {
	// 	UserData.splice(0, UserData.indexOf(UserData), 1);
	// 	this.setState({UserData});
	// }

	render() {
		// let { UserData } = this.state;
		return(
			<div className="user-list">
			<div className="header_div">
				<h1 className="peeps_header"></h1>
				<Link className="ul-link-text" to="/FormData"><button className="header_btn" alt="Add Peep"><Icon type="user-plus"/></button></Link>
				</div>
				 <ul>{UserData.map(::this.getUser)}</ul>
			</div>
		);
	}
}

