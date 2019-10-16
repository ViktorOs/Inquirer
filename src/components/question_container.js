import React from 'react'
import TypeRadio from './type_radio'
import TypeRating from './type_rating'
import TypeInput from './type_input'
import TypeCallback from './type_callback'

export default function QuestionContainer({storeData, setPrevQuestion, question, currentQuestionNumber, fullLength }) {


    switch(question.type) {
        case 'radio':
            return  <TypeRadio key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
        case 'rating':
            return  <TypeRating key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
        case 'input':
            return  <TypeInput key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
        case 'callback':
            return  <TypeCallback key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
    }


}