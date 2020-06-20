import React, { Component } from 'react';
import { MentionsInput, Mention } from 'react-mentions'
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";


import "./mentions.css"
import { MapStateToProps, MapDispatchToProps } from "./MentionsMapDispatch";

const limit=1000;
const postid="5eea16ff4408001b6ca9de32"

class Mentions extends Component {

  constructor() {
    super();
    this.state = {
      keyword: '',
      text: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.keyword);
    this.props.saveanswer(postid, this.state.keyword);
  }

  getUsers = (si) => {
      var { keyword } = this.state;
      var ei = si+1; 
      while(ei<keyword.length && keyword[ei] !== " ") ei++;
      var query = keyword.substring(si+1, ei);
      // var hash = keyword.substring(si, ei);
      // console.log(query, hash);
      this.props.userslist(query, limit);
  }


  handleChange = (e, newValue) => {
    this.setState({ keyword: newValue });
  }

  func = (e) => {

      var si = this.state.keyword.search("@");
      if(si !== -1) {  
        this.getUsers(si);
      }
  }

  render() {

    const allusers = this.props.usersState.data.map(user => ({
      id: user._id,
      display: user.fullName
    }));

    console.log(this.state.keyword);
    // console.log(allusers);

    return (
      <Form onSubmit={this.onSubmit}>
            <MentionsInput
                value={this.state.keyword}
                onChange={this.handleChange}
                onKeyUp={this.func}
                placeholder="Type anything, use the @ symbol to tag other users."
                className="mentions"
                singleLine
            >
                <Mention
                    trigger="@"
                    data={allusers}
                    markup="@[__display__](hash:__id__)"
                    className="mentions__mention"
                />
            </MentionsInput>
            <Button variant="outline-success" type="submit" className="mb-3"> 
                Post 
                {" "}
                {/* <FontAwesomeIcon icon={ faEdit } /> */}
            </Button>
      </Form>
    );
  }
}

export default connect(MapStateToProps, MapDispatchToProps)( Mentions );

