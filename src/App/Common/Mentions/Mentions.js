import React, { Component } from 'react';
import { connect } from "react-redux";

import { MapStateToProps, MapDispatchToProps } from "./MentionsMapDispatch";

import MentionsInput from "./MentionsInput";

// const limit=1000;

class Mentions extends Component {

    // componentDidMount() {
    //     this.props.userslist(limit);
    //     // console.log(this.props.usersState);   
    // }

  render() {

    // const allusers = this.props.usersState.data.map(user => ({
    //   id: user._id,
    //   display: user.fullName
    // }))

    // console.log(allusers);
    return (
        <div>
            <MentionsInput />
        </div>
    );
  }
}


export default connect(MapStateToProps, MapDispatchToProps)( Mentions );
