import * as styled from 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    // color
    greenLight: string;
    greenDark: string;
    black: string;
    white: string;
    secondWhite: string;
    grey: string;
    greyLight: string;
    greyLighter: string;
    greyDark: string;
    red: string;
  }

  export default {...styled};
}
