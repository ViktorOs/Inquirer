import React from 'react'

export default class typeInput extends React.Component{

    constructor() {
        super();
        this.state = {
            btnDisabled: true,
            value: 0
        };
        this.checkInput = this.checkInput.bind(this);
        this.storeFormData = this.storeFormData.bind(this);
    }

    static submitHandler(e) {
        e.preventDefault();
    }

    checkInput(e) {
        this.setState({
            btnDisabled: e.target.value === '',
            value:e.target.value
        });
    }

    storeFormData() {

        let object = {};

        object["value"] = this.state.value;

        object["type"] = this.props.question.type;

        let data = {};

        data[this.props.question.id] = object;

        this.props.storeData(data);

    }
    render() {
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
                        <div className="question-form">
                            <div className="form-field">
                                <input type="text" className={this.props.question.mask_slug} name={this.props.question.id}
                                       onInput={this.checkInput}/>
                            </div>
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