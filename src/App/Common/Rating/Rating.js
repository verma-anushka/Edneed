import React, { Component } from "react";

import { Container } from "react-bootstrap";

import RatingList from "./RatingList/RatingList";
import RatingForm from "./RatingForm";

const kind="course";
const user_id="5ec7d14370e1ef395d63112a";
const ref_id="5de7e5bd7c1ac96dd225b466";
const limit=2;

class Rating extends Component {

    render() {
        return (
            <Container>
                <RatingForm kind={ kind } user_id={ user_id } ref_id={ ref_id } limit={ limit } />
                <RatingList kind={ kind } ref_id={ ref_id } limit={ limit } />
            </Container>
        )
    }

}

export default Rating;
