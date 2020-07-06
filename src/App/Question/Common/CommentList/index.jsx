import React from "react";
import { Card, Dropdown } from "react-bootstrap";

import { string } from "prop-types";
import CommentListItem from "./CommentListItem";
import AnswersHoc from "../../../../Hoc/AnswersHoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function CommentList({ postId }) {
    return <AnswersHoc postId={postId}>
        {({ answers, UserIcon, AppLink, removeAnswer, user }) => answers.length > 0 ? <Card.Body>
            <ul className="list-unstyled">
                {
                    answers.map((ansItem) => <CommentListItem
                        key={ansItem._id}
                        ansId={ansItem._id}
                        ansText={ansItem.text}
                        ansDownVote={ansItem.downVotes}
                        ansUpVote={ansItem.upVotes}
                        ansMyVote={ansItem.myVote}
                        User={<React.Fragment><AppLink to={`/profile/${ansItem.owner}`} className="mr-3"><UserIcon image={ansItem.owner_photo} alt={ansItem.owner_fullName} height={64} width={64} /></AppLink></React.Fragment>}

                        UserName={<div className="d-flex justify-content-between">
                            <div>
                                <strong class="">
                                    <AppLink to={`/profile/${ansItem.owner}`}>
                                        {ansItem.owner_fullName}
                                    </AppLink>
                                </strong>
                                <br />
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                            </div>

                            {user._id === ansItem.owner && <div>
                                <Dropdown alignRight>
                                    <Dropdown.Toggle size="sm" variant="light">
                                        <FontAwesomeIcon icon={faEllipsisH} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {/* <Dropdown.Item><FontAwesomeIcon icon={faEdit} /> Edit</Dropdown.Item> */}
                                        <Dropdown.Item onClick={() => removeAnswer(postId, ansItem._id)}><FontAwesomeIcon icon={faTrashAlt} /> Remove</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>}

                        </div>}
                    />)
                }
            </ul>
        </Card.Body> : <></>}
    </AnswersHoc>
}

// owner(pin):"5d0c6dc641b9836dabb766b4"
// owner_isEducator(pin):false
// owner_isVerified(pin):true
// owner_fullName(pin):"Krishna Kumar"
// owner_email(pin):"krishnawahez@gmail.com"
// owner_password(pin):"$2a$14$M77UhBriaj2ImnMGiHCJIuAqkKjH82WGUk6xov0dvhkcvRXXNMQ46"
// owner_verifyExpires(pin):"2019-06-26T05:40:22.663Z"
// owner_verifyToken(pin):"12a01a9bd8897ebe979e011ccf323f"
// owner_verifyShortToken(pin):"410043"
// owner_createdAt(pin):"2019-06-21T05:40:22.673Z"
// owner_updatedAt(pin):"2020-03-16T13:22:08.335Z"
// owner___v(pin):0
// owner_cover(pin):"5e33fcc2dbe0a97243a70264"
// owner_resetShortToken(pin):"$2a$14$0sqo7tIhx0hPzkZ4vTuI9u3K2DOWfr4raLjUEduLsPxvtkxiKRfai"
// owner_resetToken(pin):"$2a$14$PGCgjHjsse5iFc6w38ClT.4c1riLYtXETYl5UsQvSb0iPcOX6jtzq"
// owner_resetExpires(pin):"2020-03-13T15:00:01.280Z"
// owner_about(pin):"Product Manager"
// owner_photo(pin):"5e6a106667739a318ce351e7"
// owner_longitude(pin):77.2207
// owner_location(pin):"New Delhi National Capital Territory of Delhi India"
// owner_latitude(pin):28.6331
// createdAt(pin):"2020-03-17T09:26:09.416Z"
// updatedAt(pin):"2020-03-17T09:26:09.416Z"
// __v(pin):0
// upVotes(pin):1
// downVotes(pin):0
// myVote(pin):0

CommentList.defaultProps = {
    postId: undefined
}

CommentList.propTypes = {
    postId: string.isRequired
}

export default CommentList;