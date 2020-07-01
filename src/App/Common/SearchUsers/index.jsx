import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AsyncSelect from 'react-select/async';

import { SearchUsers as SearchUsersAction } from "../../../store/actions/searchUsers";

const curruserid="5ecb9ed670e1ef395d63113a";
const limit=20;

class SearchUsers extends Component {

	fetchData = (inputValue, callback) => {

		if (!inputValue) {
			callback([]);
		} else {
			setTimeout(() => {
				this.props.searchUsers(inputValue, curruserid, limit )
				const users = this.props.usersState 
				if(users.data.length){
					const options = users.data.map((userItem, userIndex) => {
										return {
											value:`${userItem._id}`, label:`${userItem.fullName}`
										}
									})
					callback(options);            
				}	
			});
		}
	}

	render() {

		return ( 
			<Fragment  >
				<>Select User:</>
				<AsyncSelect
					name="selectedUser"
					value={this.props.selectedUser}
					loadOptions={this.fetchData}
					placeholder="Search user..."
					onChange={(e) => { this.props.handleChange(e) }}
					defaultOptions={false}
					className="mb-3"
				/>
			</Fragment>
		)
	}

}

SearchUsers.defaultProps = {
    selectedUser : undefined,
	handleChange: undefined
}

SearchUsers.propTypes = {
	selectedUser: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}

export const MapStateToProps = state => {
    return {
        usersState: state.users
    }
};

export const MapDispatchToProps = dispatch => {
    return {
        searchUsers : (searchkey, curruserid, limit) => dispatch(SearchUsersAction(searchkey, curruserid, limit))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( SearchUsers );

