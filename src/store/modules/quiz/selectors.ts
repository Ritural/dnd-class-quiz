import { QUESTIONS } from 'public/questions/start';
import { IQuestion } from 'definitions/types';
import { IReducerState } from 'store/main-reducer';
import { IAnswer } from 'store/modules/quiz/reducers';

export function getCurrentQuestion(state: IReducerState): IQuestion {
  const {
    answers,
    currentQuestionIndex,
  } = state.quiz;

  // Return first question
  if (answers.length === 0) {
    return QUESTIONS[1];
  }

  return QUESTIONS[currentQuestionIndex];
}

export function getAnswers(state: IReducerState): IAnswer[] {
  const {
    answers,
  } = state.quiz;

  return answers || [];
}
