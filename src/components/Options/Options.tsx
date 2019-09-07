import * as React from 'react';

import { IOption } from 'definitions/types';
import { Button } from 'components/common/Button/Button';
import { actionSelectOption } from 'store/modules/quiz/actions';

interface IProps {
  options: IOption[];
  questionId: string;
  onSelect: typeof actionSelectOption;
}

const keyForIndex: {
  [key: number]: string;
} = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e'
};

function getKeyForIndex(index: number) {
  return keyForIndex[index];
}

export const Options = ({ options, onSelect, questionId }: IProps) => {
  console.log('options', options);

  return (
    <ul className='Options'>
      {options.map((option, index) => (
        <li key={option.text} className='Options-item'>
          <Button
            label={option.text}
            action={() => onSelect(questionId, option.id)}
            keyCode={getKeyForIndex(index)}
          />
        </li>
      ))}
    </ul>
  );
};
