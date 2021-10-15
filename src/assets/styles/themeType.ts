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
    lg: string;
    xxl: string;
  };
  fontStyle: {
    normal: string;
  };
  colors: {
    darkHard: string;
    redMedium: string;
    darkMedium: string;
    lightHard: string;
    lightSoft: string;
    primary: string;
    secondary: string;
    lightMedium: string;
  };
  fontWeight: {
    light: string;
    regular: string;
    semiBold: string;
    bold: string;
  };
};
