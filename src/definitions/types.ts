export interface IClassRating {
  fighter?: number;
  wizard?: number;
  warlock?: number;
  rogue?: number;
  sorcerer?: number;
  cleric?: number;
  monk?: number;
  druid?: number;
  barbarian?: number;
  ranger?: number;
  paladin?: number;
}

export interface ISubOption {
  id: string;
  text: string;
  rating: IClassRating;
}

export interface IOption {
  id: string;
  text: string;
  rating: IClassRating;
  nextQuestion: string;
  // subChoice?: ISubOption[];
}

export interface IQuestion {
  id: string;
  text: string;
  answer?: string;
  options: IOption[]
}
