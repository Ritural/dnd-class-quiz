import * as React from 'react';

import { IQuestion } from 'src/definitions/types';

interface IProps {
  question: IQuestion;
}

export const Question = ({ question }: IProps) => (
  <div className='Question'>
    <h3>{question.text}</h3>
  </div>
);
