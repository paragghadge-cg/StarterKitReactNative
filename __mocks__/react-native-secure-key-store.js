class RNSecureKeyStoreMock {
    store;

    constructor() {
        this.store = new Map();
    }

    get(k) {
        const result = this.store.get(k);
        return Promise.resolve(result);
    }

    remove(k) {
        this.store.delete(k);
        return Promise.resolve(true);
    }

    set(k, value, accessible) {
        this.store.set(k, value, accessible);
        return Promise.resolve(true);
    }
}

const RNSecureKeyStore = new RNSecureKeyStoreMock();

export default RNSecureKeyStore;

export const ACCESSIBLE = {
    ALWAYS_THIS_DEVICE_ONLY: 'AccessibleAlwaysThisDeviceOnly'
};
