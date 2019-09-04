import * as React from 'react';
import { IQuestion } from 'definitions/types';
import { start } from 'public/questions/start';
import { Question } from 'components/Question/Question';

// import { IQuestion } from 'definitions/types';

// interface IProps {
//   currentQuestion: IQuestion,
// }

export const Quiz = () => {
  const [history, onSelect] = React.useState<IQuestion[]>([
    start,
  ]);

  const currentQuestion = history[history.length - 1];

  return (
    <section className='Quiz'>
      <Question question={currentQuestion} />

      {/* Options */}

      {/* History */}
    </section>
  );
};
