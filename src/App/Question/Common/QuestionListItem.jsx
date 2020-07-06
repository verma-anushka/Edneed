import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheckCircle, faEye, faArrowAltCircleUp, faArrowAltCircleDown, faComment, faTrash, faBookmark, faShare, faEllipsisH, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { Dropdown, Button, Card, ButtonGroup, Spinner } from "react-bootstrap";
import CommentList from "./CommentList";
import { string, number } from "prop-types";
import CommentForm from "./CommentForm";
import FollowQuestion from "../../../Common/FollowQuestion";
import SaveQuestion from "../../../Common/SaveQuestion";
import ReportQuestion from "../../../Common/ReportQuestion";
import {getFileUrl} from "../../../Constant/server";

function QuestionListItem({ queId, queText, queMedia, queUserId, queUserImage, queUserName, savestatus, hasReported, followstatus, queUpVote, queMyVote, queDownVote, queAnsCount, AppLink, UserIcon, user, Share, removeQuestion }) {

    // function ProptectOption({children}) {
    //     return queUserId === user._id && children 
    // } 

    return <Card className="card shadow-sm mt-4">
        <Card.Header>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="mr-2">
                        <AppLink to={`/profile/${queUserId}`}>
                            <UserIcon image={queUserImage} alt={queUserName} height={45} width={45} />
                        </AppLink>
                    </div>
                    <div class="ml-2">
                        <AppLink to={`/profile/${queUserId}`}>
                            <div class="h5 m-0">{queUserName}</div>
                        </AppLink>
                        <div class="text-muted small"><i class="fa fa-clock-o"></i> 10 min ago</div>
                    </div>
                </div>

                <div>
                    <Dropdown alignRight>
                        <Dropdown.Toggle size="sm" variant="light">
                            {/* More<FontAwesomeIcon className="ml-1" icon={faChevronDown} /> */}
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="small font-weight-bold dd66"><FontAwesomeIcon icon={faEye} className="mr-1" size="sm" /> View</Dropdown.Item>
                            <Dropdown.Item className="small font-weight-bold dd66"><FontAwesomeIcon icon={faTrash} className="mr-1" size="sm" /> Delete</Dropdown.Item>
                            {/* <ProptectOption>
                                <Dropdown.Item className="small font-weight-bold dd66" onClick={()=>removeQuestion(queId)}><FontAwesomeIcon icon={faTrash} className="mr-1" size="sm" /> Delete</Dropdown.Item>
                            </ProptectOption> */}
                            
                            <SaveQuestion hasSave={savestatus} postId={queId} userId={user._id}>
                                {({ handleSave, showLoading }) => <React.Fragment>
                                    {
                                        showLoading ?
                                            <Dropdown.Item>
                                                <Spinner animation="border" size="sm" variant="secondary" />
                                            </Dropdown.Item>
                                            :
                                            <Dropdown.Item className="small font-weight-bold dd66" onClick={() => handleSave()}>

                                                {
                                                    savestatus ?
                                                        <React.Fragment>
                                                            <FontAwesomeIcon icon={faTimesCircle} className="mr-1" size="sm" /> Unsave
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <FontAwesomeIcon icon={faBookmark} className="mr-1" size="sm" /> Save
                                                        </React.Fragment>
                                                }

                                            </Dropdown.Item>

                                    }

                                </React.Fragment>}
                            </SaveQuestion>

                            <FollowQuestion hasFollow={followstatus} postId={queId} userId={user._id}>
                                {({ handleFollow, showLoading }) => <React.Fragment>
                                    {
                                        showLoading ?
                                            <Dropdown.Item>
                                                <Spinner animation="border" size="sm" variant="secondary" />
                                            </Dropdown.Item>
                                            :

                                            <Dropdown.Item className="small font-weight-bold" onClick={() => handleFollow()}>
                                                {followstatus ?
                                                    <React.Fragment>
                                                        <FontAwesomeIcon icon={faTimesCircle} className="mr-1" size="sm" /> Unfollow
                                                    </React.Fragment>
                                                    :
                                                    <React.Fragment>
                                                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" size="sm" /> Follow
                                                    </React.Fragment>}

                                            </Dropdown.Item>

                                    }

                                </React.Fragment>}
                            </FollowQuestion>

                            <ReportQuestion hasReported={hasReported} postId={queId} userId={user._id}>
                                {({ handleReport, showLoading }) => <React.Fragment>
                                    {
                                        showLoading ?
                                            <Dropdown.Item>
                                                <Spinner animation="border" size="sm" variant="secondary" />
                                            </Dropdown.Item>
                                            :
                                            <Dropdown.Item className="small font-weight-bold" onClick={() => handleReport()}>
                                                {
                                                    hasReported ?
                                                        <React.Fragment>
                                                            <FontAwesomeIcon icon={faBan} className="mr-1" size="sm" /> Report
                                                    </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <FontAwesomeIcon icon={faTimesCircle} className="mr-1" size="sm" /> Unreport
                                                    </React.Fragment>
                                                }
                                            </Dropdown.Item>
                                    }

                                </React.Fragment>}
                            </ReportQuestion>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            
            </div>
        </Card.Header>
        <Card.Body>
            {/* <a class="card-link" href="#">
                <h5 class="card-title">{Lorem ipsum dolor sit amet, consectetur adip.}</h5>
            </a> */}

            <p class="card-text" dangerouslySetInnerHTML={{ __html: queText }}></p>
        </Card.Body>
        {
            queMedia && <Card.Img variant="top"  src={getFileUrl(`${queMedia}`)} />
        }
        <Card.Footer>
            <ButtonGroup className="mr-2">
                <Button variant="light" className="p-0 m-0"> <FontAwesomeIcon icon={faArrowAltCircleUp} className={`${queMyVote > 0 ? 'text-success' : ''}`} /></Button>
                <Button variant="light" className="p-0 m-0 ml-2"> {queUpVote}</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2">
                <Button variant="light" className="p-0 m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} className={`${queMyVote < 0 ? 'text-success' : ''}`} /></Button>
                <Button variant="light" className="p-0 m-0 ml-2"> {queDownVote}</Button>
            </ButtonGroup>
            {/* <Button variant="success"> <FontAwesomeIcon icon={faArrowAltCircleUp} /> {queUpVote}</Button>
            <Button variant="light"> <FontAwesomeIcon icon={faArrowAltCircleDown} /> {queDownVote}</Button> */}
            <Button variant="light" active={queAnsCount>0} className="mr-2"> <FontAwesomeIcon icon={faComment} /> Answers ({queAnsCount}) </Button>
            
            {/* <Button variant="light"> <FontAwesomeIcon icon={faShareAlt} /> Share</Button> */}

            <SaveQuestion hasSave={savestatus} postId={queId} userId={user._id}>
                {({ handleSave, showLoading }) => <React.Fragment>
                    {
                        showLoading ?
                            <Button variant="light" className="dd55 mr-2">
                                <Spinner animation="border" size="sm" variant="secondary" />
                            </Button>
                            :
                            <Button variant="light" active={savestatus} className="dd55 mr-2" onClick={() => handleSave()}>{
                                savestatus ?
                                    <React.Fragment>
                                        <FontAwesomeIcon icon={faTimesCircle} /> Unsave
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <FontAwesomeIcon icon={faBookmark} /> Save
                                    </React.Fragment>
                            }</Button>
                    }

                </React.Fragment>}
            </SaveQuestion>


            <FollowQuestion hasFollow={followstatus} postId={queId} userId={user._id}>
                {({ handleFollow, showLoading }) => <React.Fragment>
                    {
                        showLoading ?
                            <Button variant="light" className="dd55 mr-2">
                                <Spinner animation="border" size="sm" variant="secondary" />
                            </Button>
                            :
                            <Button variant="light" active={followstatus} className="dd55 mr-2" onClick={() => handleFollow()}>{
                                followstatus ?
                                    <React.Fragment>
                                        <FontAwesomeIcon icon={faTimesCircle} /> Unfollow
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <FontAwesomeIcon icon={faShare} /> Follow
                                    </React.Fragment>
                            }</Button>
                    }

                </React.Fragment>}
            </FollowQuestion>
            <Share url={`${window.origin}/question/${queId}`} className="" variant="light" size="" />

        </Card.Footer>
        <CommentForm postId={queId} user={user} />
        <CommentList postId={queId} />
    </Card>
}

QuestionListItem.defaultProps = {
    queId: undefined,
    queText: '',
    queMyVote: 0,
    queMedia: undefined,
    queUserId: undefined,
    queUserImage: undefined,
    queUserName: undefined,
    queUpVote: 0,
    queDownVote: 0,
    queAnsCount: 0
}

QuestionListItem.propTypes = {
    queId: string.isRequired,
    queText: string,
    queMyVote: string || number,
    queMedia: string,
    queUserId: string,
    queUserImage: string,
    queUserName: string,
    queUpVote: string || number,
    queDownVote: string || number,
    queAnsCount: string || number
}



export default QuestionListItem;