module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: [
        './jest/setup.js',
        './__mocks__/react-native-secure-key-store.js',
        './__mocks__/realm.js',
        './__mocks__/react-redux.js'
    ],
    cacheDirectory: './jest/cache',
    coverageDirectory: './jest/coverage',
    coverageThreshold: {
        global: {
            statements: 80
        }
    },
    collectCoverage: true
};
