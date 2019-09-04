import { IClassRating, IOption, IQuestion } from 'definitions/types';

const ALL_RATINGS: IClassRating = {
  fighter: 1,
  wizard: 1,
  warlock: 1,
  rogue: 1,
  sorcerer: 1,
  cleric: 1,
  monk: 1,
  druid: 1,
  barbarian: 1,
  ranger: 1,
  paladin: 1,
};

export const melee: IOption = {
  text: 'Up close and personal',
  rating: {
    fighter: 1,
    barbarian: 1,
    monk: 1,
    paladin: 1,
    rogue: 1,
  }
};

export const ranged: IOption = {
  text: 'From a distance',
  rating: {},
};

export const meleeAndRanged: IOption = {
  text: 'Like a bit of both',
  rating: { ...ALL_RATINGS },
};

export const start: IQuestion = {
  text: 'How do you want to fight things?',
  options: [
    melee,
    ranged,
    meleeAndRanged,
  ],
};

export const weaponOrMagic: IQuestion = {
  text: 'Do you want to hit things using a weapon or some magic',
  options: [],
};
