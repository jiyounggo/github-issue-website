const pixelToRem = size => `${size / 16}rem`;

const fontSizes = {
  xsmall: pixelToRem(12),
  small: pixelToRem(14),
  base: pixelToRem(16),
  lg: pixelToRem(18),
  xl: pixelToRem(20),
  xxl: pixelToRem(22),
  xxxl: pixelToRem(24),
  titleSize: pixelToRem(50),
};

const paddings = {
  small: pixelToRem(8),
  base: pixelToRem(10),
  lg: pixelToRem(12),
  xl: pixelToRem(14),
  xxl: pixelToRem(16),
  xxxl: pixelToRem(18),
};
const margins = {
  small: pixelToRem(8),
  base: pixelToRem(10),
  lg: pixelToRem(12),
  xl: pixelToRem(14),
  xxl: pixelToRem(16),
  xxxl: pixelToRem(18),
};

const colors = {
  black: '#101010',
  grey: '#999',
  white: '#fff',
  purple: '#31087B',
  pink: '#FA2FB5',
  yellow: '#FFC23C',
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexCenterSpaceBetween: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

const theme = {
  maxWidth: '1100px',
  device: {
    pc: '(min-width: 1100px)',
    mobile: '(min-width: 768px)',
  },
  common,
  fontSizes,
  colors,
  paddings,
  margins,
};

export { theme };
