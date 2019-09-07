import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionClearHistory } from 'store/modules/quiz/actions';
import { Button } from 'components/common/Button/Button';

interface IProps {
  clearHistory: typeof actionClearHistory;
}

export const HomeComponent = ({ clearHistory }: IProps) => (
  <section className='Home'>
    <h1>DnD 5th Edition Class Quiz</h1>

    <Link className='Button' to='/quiz'>
      Start quiz
    </Link>

    <Button
      label='Clear history'
      action={clearHistory}
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
