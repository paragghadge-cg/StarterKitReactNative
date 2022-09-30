import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",
    Purple:"#8fa0f0",
    PrimaryGreen:"#46dcd4",

    white: "#fff",
    white2: '#F9F9F9',
    black: "#020202",
    blue: "#4096FE",
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',

    DEFAULT_BLACK: '#0E122B',
    DEFAULT_GREEN: '#0A8791',
    DEFAULT_YELLOW: '#FBA83C',
    DEFAULT_GREY: '#C2C2CB',
    DEFAULT_WHITE: '#FFFFFF',
    DEFAULT_RED: '#F53920',
    SECONDARY_RED: '#FF6F59',
    SECONDARY_WHITE: '#F8F8F8',
    SECONDARY_GREEN: '#24C869',
    SECONDARY_BLACK: '#191d35',
    LIGHT_GREEN: '#CEE8E7',
    LIGHT_GREY: '#F8F7F7',
    LIGHT_GREY2: '#EAEAEA',
    LIGHT_YELLOW: '#FCE6CD',
    LIGHT_RED: '#FFC8BF',
    FABEBOOK_BLUE: '#4A61A8',
    GOOGLE_BLUE: '#53A0F4',
    INACTIVE_GREY: '#A3A3A3',
    DARK_ONE: '#121212',
    DARK_TWO: '#181818',
    DARK_THREE: '#404040',
    DARK_FOUR: '#282828',
    DARK_FIVE: '#B3B3B3',

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
        POPPINS_BLACK: 'Poppins-Black',
        POPPINS_BOLD: 'Poppins-Bold',
        POPPINS_EXTRA_BOLD: 'Poppins-ExtraBold',
        POPPINS_EXTRA_LIGHT: 'Poppins-ExtraLight',
        POPPINS_LIGHT: 'Poppins-Light',
        POPPINS_MEDIUM: 'Poppins-Medium',
        POPPINS_REGULAR: 'Poppins-Regular',
        POPPINS_SEMI_BOLD: 'Poppins-SemiBold',
        POPPINS_THIN: 'Poppins-Thin',
      
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;