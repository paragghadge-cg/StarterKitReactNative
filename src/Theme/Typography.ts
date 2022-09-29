/**
 * Get font's from this file
 */
import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import { color } from './Color';

/**
 * normalize function return's integer value for font size
 */
export function normalize(size: any) {
    return Math.ceil(size / Dimensions.get('window')?.fontScale);
}

export const fontsSize = {
    verySmall: normalize(10),
    small: normalize(12),
    default: normalize(14),
    medium: normalize(16),
    large: normalize(18),
    extraLarge: normalize(20)
};

/**
 * fontFamily returns fonts style according to platform
 */
export const fontFamily = () => {
    if (Platform.OS === 'android') {
        return {
            bold: 'WhitneySemibold',
            medium: 'WhitneyMedium',
            regular: 'WhitneyMedium',
            italic: 'WhitneyLightItalic'
        };
    } else {
        return {
            bold: 'Whitney-Semibold',
            medium: 'Whitney-Medium',
            regular: 'Whitney-Medium',
            italic: 'Whitney-LightItalic'
        };
    }
};

/**
 * There is no need to define font size in app explicitly
 */
export const fontStyle = StyleSheet.create({
    extraLargeTitle: {
        color: color.black,
        fontSize: fontsSize.extraLarge,
        fontFamily: fontFamily().bold
    },

    extraLargeTitleWhite: {
        color: color.white,
        fontSize: fontsSize.extraLarge,
        fontFamily: fontFamily().regular
    },
    largeTitle: {
        color: color.black,
        fontSize: fontsSize.large,
        fontFamily: fontFamily().regular
    },
    largeTitleWhite: {
        color: color.white,
        fontSize: fontsSize.large,
        fontFamily: fontFamily().regular
    },

    mediumTitle: {
        color: color.black,
        fontSize: fontsSize.medium,
        fontFamily: fontFamily().regular
    },
    mediumTitleWhite: {
        color: color.white,
        fontSize: fontsSize.medium,
        fontFamily: fontFamily().regular
    },

    defaultTitle_Bold: {
        color: color.black,
        fontSize: fontsSize.default,
        fontFamily: fontFamily().bold
    },

    defaultTitle_BoldWhite: {
        color: color.white,
        fontSize: fontsSize.default,
        fontFamily: fontFamily().bold
    },
    defaultTitle: {
        color: color.black,
        fontSize: fontsSize.default,
        fontFamily: fontFamily().regular
    },
    defaultTitleWhite: {
        color: color.white,
        fontSize: fontsSize.default,
        fontFamily: fontFamily().regular
    },

    extraSmallTitle: {
        color: color.black,
        fontSize: fontsSize.small,
        fontFamily: fontFamily().regular
    },

    extraSmallTitleWhite: {
        color: color.white,
        fontSize: fontsSize.verySmall,
        fontFamily: fontFamily().regular
    }
});
