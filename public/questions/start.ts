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

const melee: IOption = {
  id: 'a',
  nextQuestion: '2',
  text: 'Up close and personal',
  rating: {
    fighter: 1,
    barbarian: 1,
    monk: 1,
    paladin: 1,
    rogue: 1,
  }
};

const ranged: IOption = {
  id: 'b',
  nextQuestion: '2',
  text: 'From a distance',
  rating: {},
};

const meleeAndRanged: IOption = {
  id: 'c',
  nextQuestion: '2',
  text: 'Anywhere on the battlefield',
  rating: { ...ALL_RATINGS },
};

export const start: IQuestion = {
  id: '1',
  text: 'How do you want to fight things?',
  options: [melee, ranged, meleeAndRanged],
};

const weapons: IOption = {
  id: 'a',
  nextQuestion: '',
  text: 'Swords, axes, daggers, bows, that sorta stuff',
  rating: {},
};

const spells: IOption = {
  id: 'b',
  nextQuestion: '',
  text: 'Magical explosions, different elements, spells spells spells!',
  rating: {},
};

const fists: IOption = {
  id: 'c',
  nextQuestion: '',
  text: 'My fists!',
  rating: {
    monk: 1,
  },
};

export const weaponOrMagic: IQuestion = {
  id: '2',
  text: 'How do you want to fight with?',
  options: [weapons, spells, fists],
};

export const QUESTIONS: { [key: string]: IQuestion } = {
  [start.id]: start,
  [weaponOrMagic.id]: weaponOrMagic,
};
