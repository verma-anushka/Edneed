import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Spinner, Button } from 'react-bootstrap';

import ApproveRolesHoc from "./ApproveRolesHoc";
import ApproveRolesCard from "./ApproveRolesCard";
import { MapStateToProps, MapDispatchToProps } from "./ApproveRolesMapDispatch";

const limit=2;

class ApproveRolesList extends Component {

    render() {
        return (
            <ApproveRolesHoc limit={limit}  render={({ rolereqs, accept, reject, loadmore }) => {    
                return <Container>
                    {
                        rolereqs.loading ?
                            <div className="text-center p-3">
                                <Spinner animation="border" size="sm" variant="success" />
                            </div>
                            :
                            rolereqs.data.length ?
                                <Row>
                                    {
                                        rolereqs.data.map((rolereqItem, rolereqItemIndex) => 
                                            <ApproveRolesCard
                                                key={rolereqItemIndex}
                                                name={rolereqItem.user_fullName}
                                                photo={rolereqItem.user_photo}
                                                cover={rolereqItem.user_cover}
                                                role={rolereqItem.role_type}
                                                requestid={rolereqItem._id}
                                                accept={accept}
                                                reject={reject}
                                            />
                                        )
                                    }
                                </Row>
                                :
                                <div className="text-center p-3">No requests for approval!</div>
                    }

                    {
                        rolereqs.loadingmore ?
                            <div className="text-center p-3">
                                <Button variant="outline-success" >
                                    <Spinner animation="border" variant="success" size="sm" />
                                </Button>  
                            </div>
                            :
                            rolereqs.ismore && 
                                <div className="text-center p-3">
                                    <Button variant="outline-success" onClick={()=>loadmore(rolereqs.skip)} >Load More</Button>
                                </div>
                    }
                </Container>

            }}>
            </ApproveRolesHoc>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( ApproveRolesList );
