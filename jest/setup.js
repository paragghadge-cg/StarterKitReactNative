import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationManager from '../src/Helper/NavigationManager';
configure({ adapter: new Adapter() });

jest.mock('@react-navigation/native', () => {
    return {
        NavigationContainerRef: jest.fn(),
        CommonActions: {
            navigate: jest.fn(),
            reset: jest.fn(),
            goBack: jest.fn()
        }
    };
});
NavigationManager.navigator = {
    dispatch: jest.fn()
};

jest.mock('react-native-localize', () => {
    return {
        getLocales: jest.fn().mockReturnValue([{ languageCode: 'en' }])
    };
});
