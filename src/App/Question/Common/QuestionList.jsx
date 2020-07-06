import React from "react";
import QuestionHoc from "../../../Hoc/QuestionHoc";
import QuestionListItem from "./QuestionListItem";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { string, number } from "prop-types";

class QuestionList extends React.Component {
    
    render() {
        const {kind, type, limit, pageId} = this.props;
        return <QuestionHoc kind={kind} type={type} limit={limit} pageId={pageId}>
            {({ questionList, AppLink, UserIcon, user, Share, removeQuestion }) => <Container fluid={type!=="page"?true:false} className={type==="page"?'m-0 p-0':''}>
                <Row>
                    <Col lg={type==="page"?12:6} className="mx-auto">
                {
                    questionList.loading ?
                        <Row className="text-center">
                            <Col><Spinner animation="border" variant="success" size="lg" /></Col>
                        </Row>
                        :
                        questionList.data.length > 0 ?
                            questionList.data.map((queListItem) => <QuestionListItem
                                key={queListItem._id}
                                queId={queListItem._id}
                                queText={queListItem.text}
                                queMedia={queListItem.photo}
                                queUserId={queListItem.owner}
                                queDownVote={queListItem.downVotes}
                                queUpVote={queListItem.upVotes}
                                queUserImage={queListItem.owner_photo}
                                queUserName={queListItem.owner_fullName}
                                queAnsCount={queListItem.answersCount}
                                queMyVote={queListItem.myVote}
                                AppLink={AppLink}
                                UserIcon={UserIcon}
                                user={user}
                                Share={Share}
                                savestatus={queListItem.savestatus}
                                hasReported={queListItem.hasReported}
                                followstatus={queListItem.followstatus}
                                removeQuestion={removeQuestion}
                            />)
                            :
                            <Row className="text-center">
                                <Col>No Question</Col>
                            </Row>
                }
                </Col>
            </Row>
            </Container>}
        </QuestionHoc>
    }

}

QuestionList.defaultProps = {
    kind:"public",
    type:"common",
    limit:10,
    pageId:undefined
}

QuestionList.propTypes = {
    kind:string,
    type:string,
    limit:number,
    pageId:string
}

export default QuestionList;