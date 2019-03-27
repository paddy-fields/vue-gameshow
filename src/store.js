import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const questionList = [{
  type: 'question',
  question: 'What is the capital of France?',
  a: 'answer1',
  b: 'answer2',
  c: 'answer3',
  answer: 'a'
},
{
  type: 'question',
  question: 'What is the capital of England?',
  a: 'answer1',
  b: 'answer2',
  c: 'answer3',
  answer: 'b'
},
{ 
  type: 'game',
  instruction: 'Click the ball before the time runs out!'
},
{
  type: 'question',
  question: 'What is the capital of Germany?',
  a: 'answer1',
  b: 'answer2',
  c: 'answer3',
  answer: 'c'
}];

export default new Vuex.Store({
  state: {
    currentQuestion: 1,
    questions: questionList,
    score: 0
  },
  mutations: {
    INCREASE_QUESTION: function(state) {
      state.currentQuestion++;
    }
  },
  actions: {
    increaseQuestion: ({commit}) => {
      commit('INCREASE_QUESTION')
    }
  }
})
