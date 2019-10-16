import React from 'react'

export default class typeCallback extends React.Component{

    constructor() {
        super();
        this.state = {
            btnDisabled: true,
            value: 0
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.storeFormData = this.storeFormData.bind(this);
    }

    static submitHandler(e) {
        e.preventDefault();
    }

    handleRadioChange(e) {
        this.setState({
            btnDisabled: false,
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

                        <div className="question-radio">
                            <div className="radio">
                                <input type="radio" id="qcall-1" name={this.props.question.id} value="1"
                                       onChange={this.handleRadioChange}/>
                                <label htmlFor="qcall-1">Так</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id="qcall-0" name={this.props.question.id} value="0"
                                       onChange={this.handleRadioChange}/>
                                <label htmlFor="qcall-0">Ні</label>
                            </div>
                        </div>
                    </div>

                    {this.props.currentQuestionNumber + 1 !== 1 &&
                    <button className="back-btn" onClick={this.props.setPrevQuestion}>Назад</button>}

                    <button className={this.state.btnDisabled ? 'disabled' : ''}  id="nextBtn" onClick={this.storeFormData}>
                        {this.props.currentQuestionNumber + 1 !== this.props.fullLength ? <span>Далі</span> : <span>Відправити</span>}
                    </button>
                </form>
            </div>
        )
    }
}