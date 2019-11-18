import React from 'react'

export default class TypeRadio extends React.Component{

    state = {
        btnDisabled: true,
        value: 0
    };

    handleRadioChange = (index) => {
        this.setState({
            btnDisabled: false,
            value:index
        });
    };

    static submitHandler(e) {
        e.preventDefault();
    }

    storeFormData = () => {

        const { type, id } = this.props.question;
        const { value } = this.state;

        this.props.storeData({[id]: { type, value }});

    };

    render(){

        return (

            <div className="question" key={this.props.question.id}>

                <form id="myForm" onSubmit={this.submitHandler}>

                    <div className="question-item">
                        <div className="question-number">
                            Питання {this.props.currentQuestionNumber + 1} з {this.props.fullLength}
                        </div>
                        <div className="question-text">
                            {this.props.question.title}
                        </div>

                        <div className="question-radio">
                            {this.props.question.question_answers.map((item) =>
                                <div className="radio" key={item.id}>
                                    <input type="radio" id={"q" + item.id} name="radio" value={item.id}
                                           onChange={(e) => this.handleRadioChange(item.id)}/>
                                    <label htmlFor={"q" + item.id}>{item.title}</label>
                                </div>
                            )}
                        </div>
                    </div>
                    {this.props.currentQuestionNumber + 1 !== 1 &&
                    <button className="back-btn" onClick={this.props.setPrevQuestion}>Назад</button>}


                    <button className={this.state.btnDisabled ? 'disabled' : ''} id="nextBtn" onClick={this.storeFormData}>
                        {this.props.currentQuestionNumber + 1 !== this.props.fullLength ? <span>Далі</span> : <span>Відправити</span>}
                    </button>
                </form>
            </div>
        )
    }
}
