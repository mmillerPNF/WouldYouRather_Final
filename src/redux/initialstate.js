import { users, questions } from "../Data"

export let initialState = {
    users: users,
    questions: questions,
    currentUser: [],
    currentQuestion: '',
    answeredQuestions: [],
    unansweredQuestions: [],
  }