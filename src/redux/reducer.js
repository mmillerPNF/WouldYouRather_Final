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
      console.log(state.currentUser)
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
      let user = state.currentUser.map((u) => {
        return {...u, questions: u.questions.concat(action.randomId), currentScore: (u.currentScore++)}
      })
      console.log(user);
      return { ...state, questions: state.questions.concat(newQuestion), currentUser: user, }
    case PICKED_QUESTION:
      return { ...state, currentQuestion: action.payload }
    case ADD_VOTE:
      const updatedQuestions = state.questions.map(question => {
        if (question.timestamp === action.questionTimestamp) {
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
          } else if (action.voteValue === 'secondOption') {
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
        console.log(a);
        return {...a, answers: {...a.answers, [action.currentQuestionID]: [action.voteValue]}, currentScore: a.currentScore++}
      })
      console.log(ans);
      return { ...state, questions: updatedQuestions, currentUser: ans }
    default:
      return state
  }
}
