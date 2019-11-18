import React, {useState} from 'react';
import QuestionContainer from './components/question_container'

import Thanks from './components/thanks'

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [fullData, setFullData] = useState({});
    const [thanks, setThanks] = useState(false);

    const questionsArray = [
        {
        "id": 28,
        "questionare_id": "5",
        "mask_id": null,
        "title": "\u041e\u0446\u0456\u043d\u0456\u0442\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043d\u0430\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u0440\u0443\u0447\u043d\u0438\u043c \u0434\u043b\u044f \u0412\u0430\u0441 \u0431\u0443\u043b\u043e \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456: \u0437\u0443\u0441\u0442\u0440\u0456\u0447 \u0442\u0430 \u043f\u0440\u0438\u0432\u0456\u0442\u0430\u043d\u043d\u044f, \u0441\u043f\u0456\u043b\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0437 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c, \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 (\u0434\u0435 1 - \u0446\u0435 \u0434\u0443\u0436\u0435 \u043d\u0435\u0437\u0440\u0443\u0447\u043d\u043e, \u0430 5 - \u0434\u0443\u0436\u0435 \u0437\u0440\u0443\u0447\u043d\u043e).",
        "title_ru": "\u041e\u0446\u0435\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u0412\u0430\u0441 \u0431\u044b\u043b\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0432 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438: \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0438 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435, \u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c, \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 (\u0433\u0434\u0435 1 - \u044d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u043e, \u0430 5 - \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u043e).",
        "title_en": "Please assess how convenient did you find the servicing in the outlet: meeting, greeting, communication with manager, and transaction performance (where 1 means very inconvenient, and 5 \u2013 very convenient). ",
        "type": "radio",
        "is_active": "1",
        "is_callback": "0",
        "created_at": "2018-08-13 15:02:26",
        "updated_at": "2019-08-13 14:28:59",
        "deleted_at": null,
        "priority": "0",
        "mask_slug": "",
        "question_answers": [{
            "id": 5,
            "title": "1",
            "title_ru": "1",
            "title_en": "1",
            "is_active": "0",
            "created_at": "2018-08-09 14:16:58",
            "updated_at": "2019-08-13 13:49:15",
            "priority": "0",
            "pivot": {"question_id": "28", "question_answer_id": "5"},
            "additional_question": null
        }, {
            "id": 6,
            "title": "2",
            "title_ru": "2",
            "title_en": "2",
            "is_active": "0",
            "created_at": "2018-08-09 14:17:01",
            "updated_at": "2019-08-13 13:49:22",
            "priority": "0",
            "pivot": {"question_id": "28", "question_answer_id": "6"},
            "additional_question": null
        }, {
            "id": 45,
            "title": "3",
            "title_ru": "3",
            "title_en": "3",
            "is_active": "0",
            "created_at": "2018-08-13 15:04:30",
            "updated_at": "2019-08-13 13:49:40",
            "priority": "0",
            "pivot": {"question_id": "28", "question_answer_id": "45"},
            "additional_question": null
        }, {
            "id": 46,
            "title": "4",
            "title_ru": "4",
            "title_en": "4",
            "is_active": "0",
            "created_at": "2018-08-13 15:04:32",
            "updated_at": "2019-08-13 13:49:47",
            "priority": "0",
            "pivot": {"question_id": "28", "question_answer_id": "46"},
            "additional_question": null
        }, {
            "id": 47,
            "title": "5",
            "title_ru": "5",
            "title_en": "5",
            "is_active": "0",
            "created_at": "2018-08-13 15:04:33",
            "updated_at": "2019-08-13 13:49:56",
            "priority": "0",
            "pivot": {"question_id": "28", "question_answer_id": "47"},
            "additional_question": null
        }],
        "mask": null
    }, {
        "id": 29,
        "questionare_id": "5",
        "mask_id": null,
        "title": "\u041e\u0446\u0456\u043d\u0456\u0442\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0430 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456 (\u0434\u0435 1 \u2013 \u0434\u0443\u0436\u0435 \u043f\u043e\u0432\u0456\u043b\u044c\u043d\u043e, \u0430 5 \u2013 \u0434\u0443\u0436\u0435 \u0448\u0432\u0438\u0434\u043a\u043e).",
        "title_ru": "\u041e\u0446\u0435\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438 (\u0433\u0434\u0435 1 - \u043e\u0447\u0435\u043d\u044c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e, \u0430 5 - \u043e\u0447\u0435\u043d\u044c \u0431\u044b\u0441\u0442\u0440\u043e).",
        "title_en": "Please assess the speed of customer servicing in the outlet (where 1 \u2013 very slowly, and 5 \u2013 very quickly).",
        "type": "radio",
        "is_active": "1",
        "is_callback": "0",
        "created_at": "2018-08-13 15:03:28",
        "updated_at": "2019-08-13 14:29:33",
        "deleted_at": null,
        "priority": "1",
        "mask_slug": "",
        "question_answers": [{
            "id": 5,
            "title": "1",
            "title_ru": "1",
            "title_en": "1",
            "is_active": "0",
            "created_at": "2018-08-09 14:16:58",
            "updated_at": "2019-08-13 13:49:15",
            "priority": "0",
            "pivot": {"question_id": "29", "question_answer_id": "5"},
            "additional_question": null
        }, {
            "id": 6,
            "title": "2",
            "title_ru": "2",
            "title_en": "2",
            "is_active": "0",
            "created_at": "2018-08-09 14:17:01",
            "updated_at": "2019-08-13 13:49:22",
            "priority": "0",
            "pivot": {"question_id": "29", "question_answer_id": "6"},
            "additional_question": null
        }, {
            "id": 45,
            "title": "3",
            "title_ru": "3",
            "title_en": "3",
            "is_active": "0",
            "created_at": "2018-08-13 15:04:30",
            "updated_at": "2019-08-13 13:49:40",
            "priority": "0",
            "pivot": {"question_id": "29", "question_answer_id": "45"},
            "additional_question": null
        }, {
            "id": 46,
            "title": "4",
            "title_ru": "4",
            "title_en": "4",
            "is_active": "0",
            "created_at": "2018-08-13 15:04:32",
            "updated_at": "2019-08-13 13:49:47",
            "priority": "0",
            "pivot": {"question_id": "29", "question_answer_id": "46"},
            "additional_question": null
        }, {
            "id": 47,
            "title": "5",
            "title_ru": "5",
            "title_en": "5",
            "is_active": "0",
            "created_at": "2018-08-13 15:04:33",
            "updated_at": "2019-08-13 13:49:56",
            "priority": "0",
            "pivot": {"question_id": "29", "question_answer_id": "47"},
            "additional_question": null
        }],
        "mask": null
    }, {
        "id": 30,
        "questionare_id": "5",
        "mask_id": null,
        "title": "\u041e\u0446\u0456\u043d\u0456\u0442\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0435 \u0432\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456 (\u0434\u0435 1 \u2013 \u0434\u0443\u0436\u0435 \u043f\u043e\u0433\u0430\u043d\u043e, \u0430 5 \u2013 \u0434\u0443\u0436\u0435 \u0434\u043e\u0431\u0440\u0435).",
        "title_ru": "\u041e\u0446\u0435\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0449\u0435\u0435 \u0432\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u043d\u0438\u0435 \u043e\u0442 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438 (\u0433\u0434\u0435 1 - \u043e\u0447\u0435\u043d\u044c \u043f\u043b\u043e\u0445\u043e, \u0430 5 - \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u043e).",
        "title_en": "What is your general impression of the customer servicing in the outlet (where 1 \u2013 very bad, \u0430 5 \u2013 very good).",
        "type": "rating",
        "is_active": "1",
        "is_callback": "0",
        "created_at": "2018-08-13 15:03:55",
        "updated_at": "2019-08-13 14:30:03",
        "deleted_at": null,
        "priority": "2",
        "mask_slug": "",
        "question_answers": [],
        "mask": null
    }, {
        "id": 31,
        "questionare_id": "5",
        "mask_id": null,
        "title": "\u0427\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0432\u0430\u043b\u0438 \u0431 \u0412\u0438 \u0434\u0430\u043d\u0435 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0441\u0432\u043e\u0457\u043c \u0434\u0440\u0443\u0437\u044f\u043c, \u043a\u043e\u043b\u0435\u0433\u0430\u043c, \u0440\u043e\u0434\u0438\u0447\u0430\u043c?",
        "title_ru": "\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043b\u0438 \u0431\u044b \u0412\u044b \u0434\u0430\u043d\u043d\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c, \u043a\u043e\u043b\u043b\u0435\u0433\u0430\u043c, \u0440\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0430\u043c?",
        "title_en": "Would you recommend this outlet to your friends, colleagues, and family?",
        "type": "radio",
        "is_active": "1",
        "is_callback": "0",
        "created_at": "2018-08-13 15:05:05",
        "updated_at": "2019-08-13 14:30:25",
        "deleted_at": null,
        "priority": "3",
        "mask_slug": "",
        "question_answers": [{
            "id": 1,
            "title": "\u0422\u0430\u043a",
            "title_ru": "\u0414\u0430",
            "title_en": "Yes",
            "is_active": "0",
            "created_at": "2018-08-09 13:53:08",
            "updated_at": "2019-08-13 13:51:46",
            "priority": "0",
            "pivot": {"question_id": "31", "question_answer_id": "1"},
            "additional_question": null
        }, {
            "id": 2,
            "title": "\u041d\u0456",
            "title_ru": "\u041d\u0435\u0442",
            "title_en": "No",
            "is_active": "0",
            "created_at": "2018-08-09 13:53:17",
            "updated_at": "2019-08-13 13:52:12",
            "priority": "0",
            "pivot": {"question_id": "31", "question_answer_id": "2"},
            "additional_question": null
        }],
        "mask": null
    }, {
        "id": 108,
        "questionare_id": "5",
        "mask_id": null,
        "title": "\u0417\u0430\u043b\u0438\u0448\u0442\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0412\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u0449\u043e\u0434\u043e \u044f\u043a\u043e\u0441\u0442\u0456 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u0430 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456",
        "title_ru": "\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043f\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0443 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438.",
        "title_en": "Please leave your comment on the customer servicing in the outlet",
        "type": "input",
        "is_active": "1",
        "is_callback": "0",
        "created_at": "2018-10-17 13:29:40",
        "updated_at": "2019-08-13 14:30:50",
        "deleted_at": null,
        "priority": "4",
        "mask_slug": "",
        "question_answers": [],
        "mask": null
    }, {
        "id": 110,
        "questionare_id": "5",
        "mask_id": null,
        "title": "\u0427\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e, \u0449\u043e\u0431 \u043c\u0438 \u0437 \u0412\u0430\u043c\u0438 \u0437\u0432'\u044f\u0437\u0430\u043b\u0438\u0441\u044f?",
        "title_ru": "\u041d\u0443\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0437\u0430\u043b\u0438\u0441\u044c?",
        "title_en": "Would you like us to contact you?",
        "type": "callback",
        "is_active": "1",
        "is_callback": "0",
        "created_at": "2018-10-26 10:47:05",
        "updated_at": "2019-08-13 14:31:14",
        "deleted_at": null,
        "priority": "5",
        "mask_slug": "",
        "question_answers": [{
            "id": 1,
            "title": "\u0422\u0430\u043a",
            "title_ru": "\u0414\u0430",
            "title_en": "Yes",
            "is_active": "0",
            "created_at": "2018-08-09 13:53:08",
            "updated_at": "2019-08-13 13:51:46",
            "priority": "0",
            "pivot": {"question_id": "110", "question_answer_id": "1"},
            "additional_question": null
        }, {
            "id": 2,
            "title": "\u041d\u0456",
            "title_ru": "\u041d\u0435\u0442",
            "title_en": "No",
            "is_active": "0",
            "created_at": "2018-08-09 13:53:17",
            "updated_at": "2019-08-13 13:52:12",
            "priority": "0",
            "pivot": {"question_id": "110", "question_answer_id": "2"},
            "additional_question": null
        }],
        "mask": null
    }];

    function setNextQuestion() {
        setCurrentQuestion(currentQuestion + 1)
    }

    function setPrevQuestion() {
        setCurrentQuestion(currentQuestion - 1)
    }

    function storeData(data) {
        setFullData(Object.assign(fullData, data));

        if(currentQuestion !== questionsArray.length - 1) {
            setNextQuestion();
        }else{
            sendData(fullData)
        }
    }

    function sendData(data) {
        console.log("final data", data);
        setThanks(true)
    }

    return (
        <div className="App">
            <section className="inquirer-section">
                <div className="container">
                    <div className="questions-block">
                        {
                            thanks ? <Thanks/> : <QuestionContainer storeData={storeData} setPrevQuestion={setPrevQuestion} fullLength={questionsArray.length} currentQuestionNumber={currentQuestion} question={questionsArray[currentQuestion]}/>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;

