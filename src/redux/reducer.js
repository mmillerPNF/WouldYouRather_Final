import {
  LOG_OUT,
  LOG_IN,
  SHOW_QUESTIONS,
  ADD_QUESTIONS,
  PICKED_QUESTION,
  ADD_VOTE
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
        id: state.currentUser[0].id,
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
      return { ...state, createdQuestions: (state.currentUser[0].createdQuestions++), questions: state.questions.concat(newQuestion)}
    case PICKED_QUESTION:
      return { ...state, currentQuestion: action.payload }
    case ADD_VOTE:
      const updatedQuestions = state.questions.map(question => {
        if (question.id === action.questionID) {
          if (action.voteValue === 'firstOption') {
            return {
              ...question,
              optionOne: {
                votes: question.optionOne.votes.concat(
                  action.voteValue.substring(1)
                ),
                text: question.optionOne.text
              }
            }
          } else {
            return {
              ...question,
              optionTwo: {
                votes: question.optionTwo.votes.concat(
                  action.voteValue.substring(1)
                ),
                text: question.optionTwo.text
              }
            }
          }
        }
        return {...question}
      })
      return { ...state, answeredQuestions: (state.currentUser[0].answeredQuestions++), questions: updatedQuestions }
    default:
      return state
  }
}
