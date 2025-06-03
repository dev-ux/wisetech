
// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey } = colors;

const borders = {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.875),
    sm: pxToRem(2.5),
    md: pxToRem(3.75),
    lg: pxToRem(5),
    xl: pxToRem(12.5),
    xxl: pxToRem(15.9375),
    section: pxToRem(16),
    card: pxToRem(24),
  },
};

export default borders;
