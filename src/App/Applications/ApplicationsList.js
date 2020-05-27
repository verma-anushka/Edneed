import React, { Component } from "react";
import { Row, Button, Alert, Spinner } from 'react-bootstrap';

import ApplicationsCard from "./ApplicationsCard";

class ApplicationsList extends Component {

    render() {
        const applications = this.props.applications;
        return (
            <React.Fragment> {
                Object.keys(applications.errors).length === 0 && applications.errors.constructor === Object ?
                    <React.Fragment> 
                        {
                            applications.loading ?
                                <div className="text-center p-3">
                                    <Spinner animation="border" variant="success" size="lg" ></Spinner>
                                </div>
                            :
                                applications.data.length ?
                                <Row style={{ marginTop:"15px" }}>{
                                    applications.data.map((application, applicationIndex) => {
                                        return (
                                                <ApplicationsCard
                                                    key={applicationIndex}
                                                    name={application.fullname}
                                                    about={application.owner_about}
                                                    email={application.email}
                                                    phoneno={application.phone}
                                                    createdAt={application.createdAt}
                                                    attachment={application.attachment}
                                                    attachmenttype={application.attachment_extension}
                                                    comment={application.comment}
                                                    title={application.ref_title}
                                                    kind={application.kind}
                                                /> 
                                        )}
                                    )}
                                </Row>
                                :
                                <div className="text-center p-3">No applications yet!</div>
                        }
                        {
                            applications.loadingmore ?
                                <div className="text-center p-3">
                                    <Spinner animation="border" variant="success" size="lg" ></Spinner>
                                </div>
                                :
                                applications.ismore && 
                                    <div  className="text-center">
                                        <Button variant="primary" onClick={()=>this.props.LoadMoreApplications(applications.skip)} style={{ backgroundColor:"rgb(150, 201, 70)", borderColor:"rgb(186, 230, 117)" }}>Load More</Button>    
                                    </div>
                        }
                    </React.Fragment>
                :
                <Alert variant="danger">{applications.errors}</Alert>                
            }                     
            </React.Fragment>
        )
    }
}

export default ApplicationsList;

