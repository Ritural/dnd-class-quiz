export enum TYPE {
  StartQuiz = '[QUIZ]-StartQuiz',
  SelectOption = '[QUIZ]-SelectOption',
  ClearHistory = '[QUIZ]-ClearHistory',
}

export interface ISelectOption {
  type: typeof TYPE.SelectOption;
  payload: {
    questionId: string;
    optionId: string;
  },
}

export interface IStartQuiz {
  type: typeof TYPE.StartQuiz;
  payload: {
    answers?: string[];
  }
}

export interface IClearHistory {
  type: typeof TYPE.ClearHistory;
  payload: null;
}

export type QuizActions = ISelectOption | IStartQuiz | IClearHistory;

// ACTIONS
export function actionStartQuiz(answers?: string[]): IStartQuiz {
  return {
    type: TYPE.StartQuiz,
    payload: {
      answers,
    },
  };
}

export function actionSelectOption(questionId: string, optionId: string): ISelectOption {
  return {
    type: TYPE.SelectOption,
    payload: {
      questionId,
      optionId,
    },
  };
}

export function actionClearHistory(): IClearHistory {
  return {
    type: TYPE.ClearHistory,
    payload: null,
  };
}
