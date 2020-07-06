import React, { Component } from "react";
import { Row, Button, Alert, Spinner } from 'react-bootstrap';

import QuestionsCard from "./QuestionsCardFollow&Save";

class QuestionsList extends Component {

    render() {
        const questions = this.props.questions;
        return (
            <React.Fragment> {
                Object.keys(questions.error).length === 0 && questions.error.constructor === Object ?
                    <React.Fragment> 
                        {
                            questions.loading ?
                            <div className="text-center p-3">
                                <Spinner animation="border" variant="success" size="lg" ></Spinner>
                            </div>
                            :
                            questions.data.length ?
                            <Row style={{ margin:"15px" }}>{
                                questions.data.map((questionsItem, questionsItemIndex) => {
                                    return (
                                        questionsItem.ref ? 
                                            <QuestionsCard
                                                key={questionsItemIndex}
                                                name={questionsItem.ref_owner_fullname}
                                                profileImg={questionsItem.ref_owner_photo}
                                                questionText={questionsItem.ref_text}
                                                questionImg={questionsItem.ref_photo}
                                                createdAt={questionsItem.ref_createdAt}
                                            /> 
                                            :
                                            <></>
                                    )}
                                )}
                            </Row>
                            :
                            <div className="text-center p-3">No questions yet!</div>
                        }
                        {
                            questions.loadingmore ?
                            <div className="text-center p-3">
                                 <Spinner animation="border" variant="success" size="lg" ></Spinner>
                            </div>
                                :
                                questions.ismore && 
                                    <div  className="text-center">
                                        <Button variant="primary" onClick={()=>this.props.LoadMoreQuestions(questions.skip)} style={{ backgroundColor:"rgb(150, 201, 70)", borderColor:"rgb(186, 230, 117)" }}>Load More</Button>    
                                    </div>
                        }
                    </React.Fragment>
                :
                <Alert variant="danger">{questions.error}</Alert>                
            }                     
            </React.Fragment>
        )
    }
}

export default QuestionsList;
