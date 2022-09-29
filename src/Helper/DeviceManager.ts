import { isTablet } from 'react-native-device-info';
import { Dimensions, Appearance, ColorSchemeName } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';
import { isValidValue } from './UtilityManager';
import NetworkProvider from '../Networking/NetworkProvider';

/**
 * Device screen height and width
 */
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, fontScale } = Dimensions.get('window');

/**
 * @returns Integer value for font size according to screen size
 */
export function normalize(size: any) {
    return Math.ceil(size / fontScale);
}

export const MAX_WIDTH = isTablet() ? '75%' : SCREEN_WIDTH;

/**
 *
 * @returns Current app version
 */
export const appVersionInformation = () => {
    let version = DeviceInfo.getVersion();
    return version;
};

/**
 *
 * @returns App's current build number
 */
export const appBuildNumberInformation = () => {
    let buildNumber = DeviceInfo.getBuildNumber();
    return buildNumber;
};

/**
 *
 * @returns Device name in string format as Android or Ios
 */
export const operatingSystemsName = () => {
    return DeviceInfo.getSystemName();
};

/**
 *
 * @returns Operating system version in string format as 10
 */
export const operatingSystemsVersion = () => {
    return DeviceInfo.getSystemVersion();
};

/**
 *
 * @returns Boolean value fro ios true and false for android
 */
export const isIOS = () => {
    if (Platform.OS == 'ios') return true;
    return false;
};

/**
 *
 * @returns Returns Devise current theme as "dark" | "light"
 */
export const getCurrentTheme = () => {
    let currentTheme: ColorSchemeName = Appearance.getColorScheme();
    if (isValidValue(currentTheme)) {
        return currentTheme;
    }
    return 'light';
};

export const getInternetConnectivity = () => {
    let isConnected = NetworkProvider.checkIsNetworkConnected();
    return isConnected;
};
