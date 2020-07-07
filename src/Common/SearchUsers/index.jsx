import React, { Component, Fragment } from "react";
import { Form, Spinner, ListGroup, ListGroupItem} from "react-bootstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SearchUsers as SearchUsersAction } from "../../store/actions/searchUsers";

import dummy from "../../assets/images/dummy_cover_photo.jpg";

let typing, inputValue;
const curruserid="5ecb9ed670e1ef395d63113a";
const limit=20;

class SearchUsers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			selected: false
		}
	}

    selectOption = (selectedUserId, name) => {
        document.getElementById('search_user_input').value = name;
        this.setState({
			text: name,
			selected: true
		})
        this.props.onSelect(selectedUserId);
    }

    handleHeaderSearchInput = e => {

        inputValue = e.target.value 
		this.setState({ text: inputValue })

        if(inputValue === ""){
            this.props.onSelect("");
        }

        clearTimeout(typing);
        typing = setTimeout(() => {
			this.props.searchUsers(inputValue, curruserid, limit);
        }, 800)

        if (!inputValue) {
            clearTimeout(typing)
        }
    }

	render () {
		const users = this.props.usersState;
		return (<Fragment>	
					<Form.Label>Select User:</Form.Label>
					<Form.Control 
						type="text" 
						autoComplete={false} 
						className="mb-3" 
						id="search_user_input" 
						placeholder="Search Users" 
						onKeyUp={(e)=>this.handleHeaderSearchInput(e)} 
						onFocus={()=>this.setState({ selected: false })} 
					/>
					{
						(!this.state.selected && this.state.text) && <ListGroup className="mt-0" style={{height:200, overflow:"scroll"}}>
						{
							users.loading ?
								<ListGroupItem className="text-center">
									<Spinner animation="border" variant="success" />
								</ListGroupItem>
								:
							users.data.length>0 ?
								users.data.map(dataItem => {
									return <ListGroupItem style={{ cursor:"pointer" }} onClick={()=>this.selectOption(dataItem._id, dataItem.fullName)}>
												{
													dataItem.photo ?
														<img style={{ width:"25px", height:"25px", borderRadius:"50%" }} src={`https://api.webunide.com/fs${dataItem.photo}`} alt={dataItem.fullName} />
														:
														<img style={{ width:"25px", height:"25px", borderRadius:"50%" }} src={dummy} alt={dataItem.fullName} />
												}
												{" "}
												{dataItem.fullName}
											</ListGroupItem>
								})
								:
								inputValue && <ListGroupItem>No such user exists!</ListGroupItem>
						}
						</ListGroup>
					}
				</Fragment>
		);
	}	
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

