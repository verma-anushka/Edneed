import React from 'react';

import { Button, Spinner } from "react-bootstrap";

import Report from "../Common/Report";

const kind      = "post";
const user_id   = "5ebaaa999ef9495b52fc92d3";
const ref_id    = "5da769652f316077b9cb0421";
const report_id = "5ed8ffb829249f49cdb29b02";

export default () => {

    return (
        <Report kind={kind} user_id={user_id} ref_id={ref_id} report_id={report_id} >
        {({ onClick, loading, type }) =>    
            <React.Fragment>
                <div className="text-center mb-2" >
                    {
                        loading ?
                            <Button variant="outline-danger" type="submit" className="mb-3">  
                                <Spinner animation="border" size="sm" variant="success" className="text-center" />
                            </Button>
                            :
                            <Button variant="outline-danger" type="submit" className="mb-3" onClick={() => onClick()} > {type} </Button>
                    }
                </div>
            </React.Fragment>
        }
        </Report>
    )
}


