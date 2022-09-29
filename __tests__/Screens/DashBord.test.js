import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from '../../src/Screens/DashBoard';
import { CommonActions } from '@react-navigation/native';
import { Screens } from '../../src/Constants';

let component, instance;

let props = {
    userData: {
        name: ''
    }
};

/**
 * In describe pass Screen name of functionality
 */
describe('DashBoard', () => {
    /**
     * Write code which execute before each test
     */
    beforeEach(() => {
        component = shallow(<DashBoard.ReactComponent {...props} />);
        instance = component.instance();
    });

    /**
     * ScreenName_FunctionName_Functionality
     */
    test('DashBoard_SnapShot_ToBeMatch', () => {
        expect(component).toMatchSnapshot();
    });

    test('DashBoard_navigate_FunctionToBeCalled', () => {
        instance.navigate();
        expect(CommonActions.navigate).toBeCalled();
        expect(CommonActions.navigate).toBeCalledWith({
            name: Screens.ProfilePage,
            params: undefined
        });
    });
});
