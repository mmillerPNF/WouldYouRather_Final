import {
  LOG_OUT,
  LOG_IN,
  SHOW_QUESTIONS,
  ADD_QUESTIONS,
  PICKED_QUESTION,
  ADD_VOTE,
  INCREASE_SCORE
} from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      const selectedUser = state.users.filter(
        user => user.name === action.payload
      )
      return { ...state, currentUser: [...selectedUser] }
    case LOG_OUT:
      return { ...state, currentUser: '' }
    case SHOW_QUESTIONS:
      const answeredQuestions = state.questions.filter(
        question =>
          question.optionOne.votes.length > 0 ||
          question.optionTwo.votes.length > 0
      )
      const unansweredQuestions = state.questions.filter(
        question =>
          question.optionOne.votes.length < 1 &&
          question.optionTwo.votes.length < 1
      )
      return {
        ...state,
        answeredQuestions: answeredQuestions,
        unansweredQuestions: unansweredQuestions
      }
    case ADD_QUESTIONS:
      const newQuestion = {
        // id: state.currentUser[0].id,
        id: action.randomId,
        author: state.currentUser[0].name,
        authorURL: state.currentUser[0].avatarURL,
        timestamp: new Date().getTime(),
        optionOne: {
          votes: [],
          text: action.optionOneText
        },
        optionTwo: {
          votes: [],
          text: action.optionTwoText
        }
      }
      console.log(state.currentUser[0].questions.concat(newQuestion))
      let user = state.currentUser.map((u) => {
        return {...u, questions: u.questions.concat(action.randomId)}
      })
      return { ...state, questions: state.questions.concat(newQuestion), currentUser: user, }
    case PICKED_QUESTION:
      return { ...state, currentQuestion: action.payload }
    case ADD_VOTE:
      const updatedQuestions = state.questions.map(question => {
        if (question.id === action.currentQuestionID) {
          if (action.voteValue === 'firstOption') {
            return {
              ...question,
              optionOne: {
                votes: question.optionOne.votes.concat(
                  action.voteID
                ),
                text: question.optionOne.text
              }
            }
          } else {
            return {
              ...question,
              optionTwo: {
                votes: question.optionTwo.votes.concat(
                  action.voteID
                ),
                text: question.optionTwo.text
              }
            }
          }
        }
        return {...question}
      })
      let ans = state.currentUser.map(a => {
        return {...a, answers: {...a.answers, [action.currentQuestionID]: action.voteValue}}
      })
      return { ...state, questions: updatedQuestions, currentUser: ans }
      case INCREASE_SCORE: {
        let updatedScore = state.users.map((user) => {
          console.log(user.id, action.payload)
          if(user.id === action.payload) {
            
            return {...user, currentScore: user.currentScore + 1}
          }
          else {
            return {...user}
          }
        })
        return {...state, users: updatedScore}
      }
    default:
      return state
  }
}
