import styledFlexboxGrid from "styled-flexbox-grid";
import React from "react";

// Create a grid instance called `mainGrid`
const mainGrid = styledFlexboxGrid({
  // Accepts responsive-props, i.e.: { xs: 280, m: 700, l: 800 }
  rowWidth: 1440,
  // Accepts responsive-props, i.e.: { xs: '0.25rem', m: '1rem', l: '1.5rem' }
  gutter: "12px",
  // Number of columns per row
  columnCount: 12,

  // Corresponding key names of this object are used to target `breakpoints` of the <Row /> and <Column /> props
  breakpoints: {
    xxs: 0,
    xs: 320,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1440
  }
});

// Create a theme to be used with `styled-components` `ThemeProvider`
const theme = {
  // Insert `myGrid` under the namespace `styledFlexboxGrid`
  styledFlexboxGrid: mainGrid
};

export default theme;
