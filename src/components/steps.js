import React from 'react'

export default function Steps({ fullLength, currentQuestionNumber }) {

    return (
        <div>
            <div className="question-steps">
                {
                    [...Array( fullLength )].map((e, i) => {
                        return <div className={"step " + (i === currentQuestionNumber ? 'active' : '') + (i < currentQuestionNumber ? 'finished' : '')} key={i}></div>
                    })
                }

            </div>
        </div>
    )
}