import { Component } from "react";
import { connect } from "react-redux";

import { MapStateToProps, MapDispatchToProps } from "./ApproveRolesMapDispatch";

const kind="pageaccess";
const pageid="5efad29b7899e543dae1f409";

class ApproveRolesHoc extends Component {

    componentDidMount() {
        this.props.getRoleRequests(kind, pageid, this.props.limit);
    }

    LoadMore = (skip) => {
        this.props.getMoreRoleRequests(kind, pageid, this.props.limit, skip);
    }

    AcceptRoleReq = (id) => {
        this.props.acceptRoleRequest(id);
    }

    RejectRoleReq = (id) => {
        this.props.rejectRoleRequest(id);
    }

    render() {
        return this.props.render({
            rolereqs : this.props.rolereqs,
            loadmore : this.LoadMore,
            accept   : this.AcceptRoleReq,
            reject   : this.RejectRoleReq
        })
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( ApproveRolesHoc );

