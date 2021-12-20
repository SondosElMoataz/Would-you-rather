import { receivePolls,answerPoll ,addPoll} from "../actions/polls"
import { receiveUsers,addPollToUser,addAnswerToUser } from "./users"
import { setAuthedUser } from "./authedUser"
import { getInitialData,saveQuestion,saveQuestionAnswer } from "../utils/API"
import { showLoading, hideLoading } from "react-redux-loading"

const AUTHED_ID = 'NOUSER'

export function handleInitialData(){

    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receivePolls(questions))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }

}



export function handleAddPoll(question){
    return (dispatch,getState)=>{
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion(question)
        .then((res)=>{
        dispatch(addPoll(res))
        dispatch(addPollToUser(res,authedUser))
        })
        .then(()=>dispatch(hideLoading()))

        }
}

export function handleAddAnswer(object){
    return (dispatch)=>{
        dispatch(showLoading())
        return saveQuestionAnswer(object)
        .then(()=>{
            dispatch(answerPoll(object))
            dispatch(addAnswerToUser(object))
            dispatch(hideLoading())
        })
    }

}

