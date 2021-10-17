export type Theme = {
  mixins: {
    typography: {
      button: any;
      input: any;
      regular: any;
      heading2: any;
      heading4: any;
      overline: any;
    };
  };
  fontFamily: { primary: string };
  letterSpacing: {
    xxs: string;
    xl: string;
    md: string;
    sm: string;
    xs: string;
    lg: string;
    xxl: string;
  };
  fontSize: {
    xxs: string;
    xl: string;
    md: string;
    sm: string;
    xs: string;
    lg: string;
    xxl: string;
  };
  breakpoints: {
    xl: string;
    md: string;
    sm: string;
    xs: string;
    lg: string;
    xxl: string;
  };
  fontStyle: {
    normal: string;
  };
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    darkHard: string;
    darkMedium: string;
    lightMedium: string;
    lightHard: string;
    redMedium: string;
  };
  fontWeight: {
    light: string;
    regular: string;
    semiBold: string;
    bold: string;
  };
};
