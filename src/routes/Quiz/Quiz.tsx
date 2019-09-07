import * as React from 'react';
import { connect } from 'react-redux';

import { IQuestion } from 'definitions/types';
import { Question } from 'components/Question/Question';
import { Options } from 'components/Options/Options';
import { getCurrentQuestion } from 'store/modules/quiz/selectors';
import { actionSelectOption } from 'store/modules/quiz/actions';
import { IReducerState } from 'store/main-reducer';
import { Redirect } from 'react-router';

interface IProps {
  currentQuestion: IQuestion;
  selectOption: typeof actionSelectOption;
}

export const QuizComponent = (props: IProps) => {
  const {
    currentQuestion,
    selectOption,
  } = props;

  if (!currentQuestion) {
    return <Redirect to='/complete' />;
  }

  return (
    <section className='Quiz'>
      <Question question={currentQuestion} />

      <Options
        onSelect={selectOption}
        options={currentQuestion.options}
        questionId={currentQuestion.id}
      />

      {/* History */}
    </section>
  );
};

function mapStateToProps(state: IReducerState) {
  return {
    currentQuestion: getCurrentQuestion(state),
  };
}

const dispatchProps = {
  selectOption: actionSelectOption,
};

export const Quiz = connect(
  mapStateToProps,
  dispatchProps,
)(QuizComponent);
