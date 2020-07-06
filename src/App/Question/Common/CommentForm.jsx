import React, {useState} from "react";
import {Form, InputGroup, Button, Card, Spinner} from "react-bootstrap";
import CommentValidation from "./CommentValidation";
import {addAnswerOnPost} from "../../../store/actions/answers/action";
import { string, object } from "prop-types";
import {useDispatch} from "react-redux";

function CommentForm({postId, user}){
    const [commentFormSubmit, setCommentFormSubmit] = useState(false); // Tracking form submit, default : false
    //const [isErrorComment, setIsCommentError] = useState(false); // Track comment error, default : false
    const [isTypingOrFicused, setIsTypingOrFocused] = useState(false) // Detect foucus on comment or typying
    const dispatch = useDispatch();

    const handleCommentFormSubmit = e => {

        e.preventDefault();
        const evt = e.target;
        setCommentFormSubmit(true);
        // console.log(CommentValidation.isValid(), CommentValidation.getFormInputData());
        if (CommentValidation.isValid()) {
            CommentValidation.setOwner(user._id);
            CommentValidation.setPost(postId);
            dispatch(addAnswerOnPost(CommentValidation.getFormInputData()));
            evt.reset();
            setCommentFormSubmit(false);
            setIsTypingOrFocused(false);
        }
        else {
            setCommentFormSubmit(false);
        }

    }

    const handleCommentInput = e => {

        if(e.target.value){
            setIsTypingOrFocused(true)
        }
        else{
            setIsTypingOrFocused(false)
        }
        CommentValidation.handleInput(e);
        //setCommentInput(CommentValidation.getFormInput());
    }


    return postId && user?<Card.Footer>
    <Form onSubmit={(e)=>handleCommentFormSubmit(e)}>
    <Form.Group>
        <InputGroup>
            <textarea className="form-control no-resize" name="comment" onKeyUp={(e)=>handleCommentInput(e)} placeholder="Write an answer..."></textarea>
            <InputGroup.Append>
                {
                    commentFormSubmit?
                    <Button variant="outline-light">
                        <Spinner animation="border" variant="success" size="lg" />
                    </Button>
                    :
                    <Button type="submit" variant={isTypingOrFicused?'primary': 'outline-success'}>Answer</Button>    
                }
                
            </InputGroup.Append>
        </InputGroup>
    </Form.Group>
    </Form>    
</Card.Footer>:<React.Fragment />
}

CommentForm.defaultProps = {
    postId:undefined,
    user:undefined
}

CommentForm.propTypes = {
    postId:string.isRequired,
    user:object.isRequired
}


export default CommentForm;
