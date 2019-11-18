import React from 'react'
import TypeRadio from './type_radio'
import TypeRating from './type_rating'
import TypeInput from './type_input'
import TypeCallback from './type_callback'
import Steps from './steps'

export default function QuestionContainer(props) {

    let questionType;

    switch(props.question.type) {
        default:
            questionType = <TypeRadio {...props}/>;
            break;
        case 'radio':
             questionType = <TypeRadio  {...props}/>;
             break;
        case 'rating':
             questionType = <TypeRating  {...props}/>;
            break;
        case 'input':
             questionType = <TypeInput  {...props}/>;
            break;
        case 'callback':
             questionType = <TypeCallback  {...props}/>;
            break;
    }

    return(
        <React.Fragment>
            {questionType}

            <Steps {...props}/>
        </React.Fragment>
    )
}