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
  text: 'From a distance',
  rating: {},
};

const meleeAndRanged: IOption = {
  text: 'Anywhere on the battlefield',
  rating: { ...ALL_RATINGS },
};

export const start: IQuestion = {
  text: 'How do you want to fight things?',
  options: [melee, ranged, meleeAndRanged],
};

const weapons: IOption = {
  text: 'Swords, axes, daggers, bows, that sorta stuff',
  rating: {},
};

const spells: IOption = {
  text: 'Magical explosions, different elements, spells spells spells!',
  rating: {},
};

const fists: IOption = {
  text: 'My fists!',
  rating: {
    monk: 1,
  },
};

// const magicalWeapons: IOption = {
//   text: '',
//   rating: {},
// };

export const weaponOrMagic: IQuestion = {
  text: 'How do you want to hit things?',
  options: [weapons, spells, fists],
};
