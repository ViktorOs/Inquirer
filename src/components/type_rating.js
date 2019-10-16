import React from 'react'

export default class typeRating extends React.Component{

    constructor() {
        super();
        this.state = {
            btnDisabled: true,
            value: 0
        };
        this.handleCheckClick = this.handleCheckClick.bind(this);
        this.storeFormData = this.storeFormData.bind(this);
    }

    static submitHandler(e) {
        e.preventDefault();
    }

    handleCheckClick(index) {
        this.setState({
            btnDisabled: false,
            value:index+1
        });

        let elements = document.getElementsByClassName("rating-checkbox");
        Array.from(elements).forEach(function(element) {
            element.checked = false;
        });

        for(let i = 0; i <= index; i++){
            document.getElementById("checkbox_"+i).checked = true;
        }
    }

    storeFormData() {

        let object = {};

        object["value"] = this.state.value;

        object["type"] = this.props.question.type;

        let data = {};

        data[this.props.question.id] = object;

        this.props.storeData(data);

    }
    render(){
        return (

            <div className="question"  key={this.props.question.id}>

                <form id="myForm" onSubmit={this.submitHandler}>

                    <div className="question-item">
                        <div className="question-number">
                            Питання {this.props.currentQuestionNumber + 1} з {this.props.fullLength}
                        </div>
                        <div className="question-text">
                            {this.props.question.title}
                        </div>

                        <div className="question-rating">

                            {[...Array( 5 )].map((item, i) =>
                                <div className="rating" key={i} >
                                    <input type="checkbox"  className="rating-checkbox" onChange={(e) => this.handleCheckClick(i)} id={"checkbox_" + i}/>
                                    <label htmlFor={"checkbox_" + i}></label>
                                </div>

                            )}

                        </div>

                    </div>
                    { this.props.currentQuestionNumber + 1 !== 1 && <button className="back-btn" onClick={this.props.setPrevQuestion}>Назад</button>}


                    <button  className={this.state.btnDisabled ? 'disabled' : ''} id="nextBtn" onClick={this.storeFormData} >
                        { this.props.currentQuestionNumber + 1 !== this.props.fullLength ?  <span>Далі</span> : <span>Відправити</span>}
                    </button>
                </form>
            </div>
        )
    }
}