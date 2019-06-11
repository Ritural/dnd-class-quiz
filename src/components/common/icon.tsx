import * as React from 'react';

import SVG_ICONS from 'public/svg/all';

const ALL_ICONS = {
  ...SVG_ICONS,
  // IconMoon icons if they need to be in the project
};

type IconName = keyof typeof ALL_ICONS;

interface IProps {
  name: IconName;
  className?: string;
}

export class Icon extends React.Component<IProps> {
  render() {
    const { name } = this.props;
    const icon = ALL_ICONS[name];

    if (!icon) {
      console.warn(`No icon found for \<${name}\>`);
      return null;
    }

    const isSVG = name in SVG_ICONS;
    if (isSVG) {
      const { className } = this.props;
      const classes = className ? `SVG ${className}` : 'SVG';

      return (
        <span className={classes} data-icon={name}>
          {icon}
        </span>
      );
    }

    return null;

    // It's a icon font
    // return icon;
  }
}
