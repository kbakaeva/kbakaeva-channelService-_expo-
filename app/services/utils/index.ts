import * as Device from 'expo-device';

export interface IUtils {
    isTablet: string;
};

const isTablet = Device.deviceName;
const Utils = {
    isTablet: isTablet,
};

export default Utils;