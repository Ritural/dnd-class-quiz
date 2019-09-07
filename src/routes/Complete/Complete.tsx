import * as React from 'react';

import { IAnswer } from 'store/modules/quiz/reducers';
import { IClassRating, IQuestion } from 'definitions/types';
import { QUESTIONS } from 'public/questions/start';
import { IReducerState } from 'store/main-reducer';
import { connect } from 'react-redux';
import { getAnswers } from 'store/modules/quiz/selectors';

interface IProps {
  answers: IAnswer[];
}

const getRating = ({ questionId, answerId }: IAnswer): IClassRating => {
  const question: IQuestion = QUESTIONS[questionId];

  if (!question || !question.options) {
    return {};
  }

  const option = question.options.find((op) => op.id === answerId);

  if (!option) {
    return {};
  }

  return option.rating;
};

export const CompleteComponent = ({ answers }: IProps) => {
  const recommendedClass = answers.reduce((accumulator, answer) => ({
    ...getRating(answer),
    ...accumulator,
  }), {} as IClassRating);

  console.log('recommendedClass', recommendedClass);

  return (
    <section className='Complete'>
      <p>Based on your choices and the arbitrary numbers I associated with the choices</p>

      <p>I would recommend you play</p>
    </section>
  );
};

function mapStateToProps(state: IReducerState) {
  return {
    answers: getAnswers(state),
  };
}

export const Complete = connect(
  mapStateToProps,
)(CompleteComponent);
