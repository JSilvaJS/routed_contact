import React, { Component } from 'react';
import UserData from './user_data';
import UserDetails from './user_details';
import Icon from './icon';
import FormView from './form_data';
import { Link, hashHistory } from 'react-router';

export default class UserList extends Component {

	getUser(user) {
		return (
			<Link className="ul-link-text" to="/UserDetails"><li className="peeps_li">
				<img className="peeps_img" key={user.name} src={user.photo}/>{user.name}
			</li></Link>
		);
	}

	render() {
		return(
			<div className="user-list">
			<div className="header_div">
				<h1 className="peeps_header">My Peeps</h1>
				<Link className="ul-link-text" to="/FormData"><button className="header_btn" alt="Add Peep"><Icon type="user-plus"/></button></Link>
				</div>
				 <ul>{UserData.map(::this.getUser)}</ul>
			</div>
		);
	}
}

