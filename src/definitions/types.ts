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
  text: string;
  rating: IClassRating;
}

export interface IOption {
  text: string;
  rating: IClassRating;
  subChoice?: ISubOption[];
}

export interface IQuestion {
  text: string;
  answer?: string;
  options: IOption[]
}
