import React from "react";
import { Col, Card } from "react-bootstrap";

import getMentions from './utils/getMentions'
import markupToRegex from './utils/markupToRegex'

function getMentionsInText(text) {
    const userMarkup = '@[__display__](hash:__id__)'
    const defaultDisplayTransform = (id, display) => display
    const config = [
      {
        markup: userMarkup,
        regex: markupToRegex(userMarkup),
        displayTransform: defaultDisplayTransform,
      }
    ]
    return getMentions(text, config);
}

const AnswersCard = ({ text }) => {    

    var mentions = getMentionsInText(text);
    var si=text.indexOf('@[');
    var curr=0;
    while(si!=-1) {
        var ei=text.indexOf(')');
        var newstr = "<a href='https://webunide.com/profile/"+mentions[curr].id+ "' target='_blank' >@"+mentions[curr].display+"</a>"
        text=text.replace(text.substring(si,ei+1), newstr);
        si=text.indexOf('@[');
        curr++;
    }

    return (
        <Col md={{ offset:1, span:10 }} lg={{ offset:1, span:10 }} sm={12}>
            <Card>
                <Card.Body>
                    <p dangerouslySetInnerHTML={{ __html: text.replace(/\n\r?/g, '<br />') }}/>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AnswersCard;

