import { IQuestion } from 'definitions/types';

interface ICreateQuestionHistory {
  questionId: string;
  optionId: string;
  subOptionId?: string;
}

export function createQuestionHistory({ questionId, optionId }: ICreateQuestionHistory): string {
  return `${questionId}=${optionId}`;
}
