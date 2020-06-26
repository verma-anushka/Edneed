import React, { Component } from 'react';
import { MentionsInput, Mention } from 'react-mentions'
import { connect } from "react-redux";
import { Form, Button, Spinner, Row, Col } from "react-bootstrap";

import AnswersList from "./AnswersList";

import "./mentions.css"
import { MapStateToProps, MapDispatchToProps } from "./MentionsMapDispatch";

const limit=50;
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

    var si = this.state.keyword.indexOf("@");
    while(si !== -1) {  
      this.getUsers(si);
      si = this.state.keyword.indexOf("@", si+1);
    }
  }

  render() {

    const { saveanswer } = this.props.usersState;
    // console.log(this.props.usersState);
    const allusers = this.props.usersState.users.data.map(user => ({
      id: user._id,
      display: user.fullName
    }));

    // console.log(this.state.keyword);
    // console.log(allusers);

    return (
      <React.Fragment>
      <Form onSubmit={this.onSubmit}>

        {/* <Row style={{ margin:"15px" }}>
          <Col md={{ offset:1, span:10 }} lg={{ offset:1, span:10 }} sm={12}> */}
            <MentionsInput
                value={this.state.keyword}
                onChange={this.handleChange}
                onKeyUp={this.func}
                placeholder="Enter your answer"
                className="mentions"
            >
                <Mention
                    trigger="@"
                    data={allusers}
                    markup="@[__display__](hash:__id__)" 
                    className="mentions__mention"
                />
            </MentionsInput>
          {/* </Col>
        </Row> */}
        {
          saveanswer.loading ?
            <div className="text-center p-3">
              <Spinner animation="border" variant="success" size="lg" ></Spinner>
            </div>
          : 
            <div  className="text-center">
              <Button variant="outline-success" type="submit" className="mb-3"> 
                Post 
                {" "}
              </Button>
            </div>
        }
      </Form>

      <AnswersList />
      </React.Fragment>
    );
  }
}

export default connect(MapStateToProps, MapDispatchToProps)( Mentions );

