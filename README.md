# Synopsis
Built a simple contact list with React Router. 

# Code Example
```javascript
export default class UserDetails extends Component {

	render () {
		let { user_name } = this.props.params;
		let user = UserData.find(currentUser => currentUser.name === user_name);

		return (
			<div className="user-details">
				<div className="avatar">
					<img className="ud_img" src={user.photo} alt={user.name}/>
				</div>
				<ul className="info">
					<li className="ud_li"><Icon type="user"/>{user.name}</li>
					<li className="ud_li"><Icon type="envelope"/>{user.email}</li>
					<li className="ud_li"><Icon type="mobile"/>{user.phone}</li>
					<li className="ud_li"><Icon type="globe"/>{user.location}</li>
				</ul>
			</div>
		);
	}
}
```
# Motivation
To meet the instructions of...
"On your "home" component, show a list of all of the users in your database.
When I click on any of the users, I'm routed to a view with that user's info.
There should be a back button or icon to take me back to the home (list) view.
The users should be imported from a data module and be dynamically built into components."

# Deployed Code
[Check it here](http://tiy-2016q1-eh_cosmo-react_contact_list.surge.sh/)
