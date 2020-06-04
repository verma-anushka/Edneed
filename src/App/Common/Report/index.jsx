import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { Report as ReportAction, Unreport } from "../../../store/actions/report";

const Report = ({ children, kind, user_id, ref_id, report_id, report, unreport, reportState }) => { 

    const [type, setType] = useState("Report");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(
        () => {
            if(reportState.modalshow) {
                setShow(true);
                reportState.modalshow=false;
            }
        },
        [reportState.modalshow]
    );

    const onClick = () => {

        if(type === "Report") {
            setType("Unreport");
            report(kind, user_id, ref_id);

        } else if(type === "Unreport") {
            setType("Report");
            unreport(report_id);

        }
    }

    return (
        <React.Fragment>
            {
                children({
                    onClick,
                    loading: reportState.loading,
                    type
                })
            }
        
            <Modal show={show} onHide={()=>handleClose()} >
                
                <Modal.Header closeButton>
                    <Modal.Title style={{ textTransform: "capitalize" }} >{kind}</Modal.Title>
                </Modal.Header>
                
                <Modal.Body style={{ textTransform: "capitalize" }} >
                    {
                        `${reportState.message}`
                    }
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()} > Close </Button>
                </Modal.Footer>
            
            </Modal>
        
        </React.Fragment>
    );

}


Report.defaultProps = {
    kind       : "user",
    user_id    : undefined,
    ref_id     : undefined,
    report_id  : undefined
}

export const MapStateToProps = state => {
    return{
        reportState: state.report,
    }
};

export const MapDispatchToProps = dispatch => {

    return {
        report : (kind, user_id, ref_id) => dispatch(ReportAction(kind, user_id, ref_id)),
        unreport : (report_id) => dispatch(Unreport(report_id))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)( Report );

