export const {
  VERSION,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
  CURRENT_BRANCH,
} = process.env;

export interface IMenuLink {
  label: string;
  to: string;
}

export const MENU_LINKS: IMenuLink[] = [
  {
    label: 'Home',
    to: '/',
  },
];
