import * as React from 'react';

const TAGS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
];

const LOREM_IPSOM = 'Lorem ipsum dolor sit amet.';

interface IState {
  [key: string]: string;
}

export class Preview extends React.Component<{}, IState> {
  state: IState = {};

  initElement = (el: HTMLHeadingElement | HTMLParagraphElement | null, tag?: string) => {
    if (!el) {
      return;
    }

    const tagName = tag || el.tagName;
    const stateKey = `${tagName}FontSize`;

    const hasFontSize = this.state[stateKey];

    if (hasFontSize) {
      return;
    }

    const element = window.getComputedStyle(el);

    if (element) {
      const fontSize = element.fontSize;
      const lineHeight = element.lineHeight;

      // @ts-ignore
      this.setState({
        [stateKey]: `${fontSize}, ${lineHeight}`,
      });
    }
  }

  render() {
    const {
      H1FontSize,
      H2FontSize,
      H3FontSize,
      H4FontSize,
      PFontSize,
    } = this.state;

    return (
      <section>
        <h1 ref={(el) => this.initElement(el)}>H1 - {H1FontSize} - {LOREM_IPSOM}</h1>
        <h2 ref={(el) => this.initElement(el)}>H2 - {H2FontSize} - {LOREM_IPSOM}</h2>
        <h3 ref={(el) => this.initElement(el)}>H3 - {H3FontSize} - {LOREM_IPSOM}</h3>
        <h4 ref={(el) => this.initElement(el)}>H4 - {H4FontSize} - {LOREM_IPSOM}</h4>

        <p ref={(el) => this.initElement(el)}>
          P body - {PFontSize} -
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, ex nec
          sodales ultrices, odio nulla euismod nunc, a pharetra nisi ligula ac elit. Suspendisse
          scelerisque eu massa aliquet malesuada…
        </p>
      </section>
    );
  }
}

// interface ITagProps {
//   tag: string;
// }

// const Tag = ({ tag }: ITagProps) => {
//   const [elRef, setRef] = React.useState<HTMLElement | null>(null);

//   const element = React.createElement(
//     tag, {
//       ref: setRef,
//     }, [
//       `${tag}: (${''}, ${''}): ${LOREM_IPSOM}`,
//     ],
//   );

//   if (elRef) {
//     const el = window.getComputedStyle(elRef);
//     if (el) {
//       console.log('fontSize', el.fontSize);
//       elRef.innerText = `${tag}: (${el.fontSize}, ${el.lineHeight}): ${LOREM_IPSOM}`;
//     }
//   }

//   return element;
// };
