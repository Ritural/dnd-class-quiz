import { QuizActions, TYPE } from './actions';

export interface IAnswer {
  questionId: string;
  answerId: string;
  subAnswerId?: string;
}

export interface IQuizState {
  answers: IAnswer[];
  currentQuestionIndex: number;
}

export const INITIAL_STATE: IQuizState = {
  currentQuestionIndex: 1,
  // Update answers so you can take the quiz multiple times
  answers: [],
};

const {
  StartQuiz,
  SelectOption,
  ClearHistory,
} = TYPE;

export function quizReducer(
  state = INITIAL_STATE,
  action: QuizActions,
) {
  switch (action.type) {
    case StartQuiz:

      return {
        ...state,
      };

    case SelectOption: {
      const { questionId, optionId } = action.payload;

      const entry: IAnswer = {
        questionId,
        answerId: optionId,
        // subAnswerId:
      };

      console.log('SelectOption', entry);

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answers: [
          entry,
          ...state.answers,
        ],
      };
    }

    case ClearHistory: {
      console.log('Clear history');

      return {
        ...state,
        currentQuestionIndex: 1,
        answers: [],
      };
    }

    default:
      return state;
  }
}
