import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import ConsoleLog from '../Helper/ConsoleLog';

export class SecureStorage {
    /**
     * @param storageKey
     * @param value
     * For storing key
     */
    static saveData = (storageKey: string, value: string) => {
        RNSecureKeyStore.set(storageKey, value, {
            accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
        }).then(() => {});
    };
    /**
     * @param storageKey
     * @return
     * For retrieving key
     */
    static getData = async (storageKey: string) => {
        try {
            return await RNSecureKeyStore.get(storageKey);
        } catch (error) {
            ConsoleLog.log(storageKey, 'getData--->', error);
            return '';
        }
    };
    /**
     * @param storageKey
     * @returns
     * For removing key
     */
    static RemoveData = async (storageKey: string) => {
        try {
            return await RNSecureKeyStore.remove(storageKey);
        } catch (error) {
            ConsoleLog.log(storageKey, 'getData--->', error);
            return '';
        }
    };
}
