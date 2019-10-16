import React from 'react'

export default function typeSelect( { setNextQuestion, setPrevQuestion, question, currentQuestionNumber, fullLength } ) {
    return (
        <div className="question">
            <form id="myForm">
                <div className="question-item">
                    <div className="question-number">
                        Запитання
                    </div>
                    <div className="question-text">

                    </div>

                    <div className="question-select">
                        <div className="select">
                            <select name="question.id">
                            <option value="qa.id">
                                2
                            </option>
                            </select>
                        </div>
                    </div>

                </div>

                { currentQuestionNumber + 1 !== 1 && <button className="back-btn" onClick={setPrevQuestion}>Назад</button>}


                <button className="disabled" id="nextBtn" onClick={setNextQuestion} >
                    { currentQuestionNumber + 1 !== fullLength ?  <span>Далі</span> : <span>Відправити</span>}
                </button>

            </form>
        </div>
    )
}