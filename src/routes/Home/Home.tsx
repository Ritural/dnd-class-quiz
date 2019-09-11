import * as React from 'react';
import { connect } from 'react-redux';

import { actionClearHistory } from 'store/modules/quiz/actions';
import { Button } from 'components/common/Button/Button';

interface IProps {
  clearHistory: typeof actionClearHistory;
}

export const HomeComponent = ({ clearHistory }: IProps) => (
  <section className='Home'>
    <h1>DnD 5th Edition Class Quiz</h1>

    <Button
      label='Start quiz'
      action='/quiz'
      keyCode='s'
    />

    <Button
      label='Clear history'
      action={clearHistory}
      keyCode='c'
    />
  </section>
);

const dispatchProps = {
  clearHistory: actionClearHistory,
};

export const Home = connect(
  null,
  dispatchProps,
)(HomeComponent);
