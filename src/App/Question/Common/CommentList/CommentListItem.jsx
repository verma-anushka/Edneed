import React from "react";
import { Media, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons"
import { string, number } from "prop-types";

function CommentListItem({ ansId, ansText, ansUpVote, ansMyVote, ansDownVote, User, UserName }) {

    return <Media as="li" className="mb-3">
        
        {User}
        <Media.Body>
            {UserName}
            <p dangerouslySetInnerHTML={{ __html: ansText }}></p>
            <div class="d-flex align-items-center small text-black-50">
            <ButtonGroup className="mr-2">
                <Button variant="light" className="p-0 m-0"> <FontAwesomeIcon icon={faArrowAltCircleUp} className={`${ansMyVote>0?'text-success':''}`} /></Button>
                <Button variant="light" className="p-0 m-0 ml-2"> {ansUpVote}</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2">
                <Button variant="light" className="p-0 m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} className={`${ansMyVote<0?'text-success':''}`} /></Button>
                <Button variant="light" className="p-0 m-0 ml-2"> {ansDownVote}</Button>
            </ButtonGroup>
            </div>
        </Media.Body>
    </Media>
}

CommentListItem.defaultProps = {
    ansId: undefined,
    andMyVote: 0,
    ansText: '',
    ansUpVote: 0,
    ansDownVote: 0,
}

CommentListItem.propTypes = {
    ansId: string,
    ansText: string,
    andMyVote: string || number,
    ansUpVote: string || number,
    ansDownVote: string || number,
}


export default CommentListItem;