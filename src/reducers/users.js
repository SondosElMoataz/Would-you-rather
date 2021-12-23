import { RECEIVE_USERS,ADD_ANSWER_USER,ADD_POLL_USER  } from "../actions/users"

export default function users (state = {}, action){
    switch(action.type){
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_POLL_USER:
            const { question } = action
            return {
                ...state,
                [question.author]:{
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
             // ({ authedUser, qid, answer })
        case ADD_ANSWER_USER:
            const {object} = action
            return {
                ...state,
                [object.authedUser]:{
                    ...state[object.authedUser],
                    answers:{
                        ...state[object.authedUser].answers,
                        [object.qid]: object.answer
                    } 
                }

            }
       
        default:
            return state
    }
}