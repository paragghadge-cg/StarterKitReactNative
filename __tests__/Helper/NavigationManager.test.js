import { CommonActions } from '@react-navigation/native';
import NavigationManager from '../../src/Helper/NavigationManager';
import { Screens } from '../../src/Constants';

describe('NavigationManager', () => {
    test('NavigationManager_navigate_ToCalledWithScreenName', () => {
        NavigationManager.navigate(Screens.DashBoard);
        expect(CommonActions.navigate).toBeCalled();
        expect(CommonActions.navigate).toBeCalledWith({
            name: Screens.DashBoard,
            params: undefined
        });
    });

    test('NavigationManager_navigate_ToCalledWith_ScreenName_And_Params', () => {
        NavigationManager.navigate(Screens.ProfilePage, { name: '' });
        expect(CommonActions.navigate).toBeCalled();
        expect(CommonActions.navigate).toBeCalledWith({
            name: Screens.ProfilePage,
            params: { name: '' }
        });
    });

    test('NavigationManager_navigate_ToCalledWithScreenName_and_GetFailed', () => {
        NavigationManager.navigate(Screens.ProfilePage);
        expect(CommonActions.navigate).not.toEqual({
            name: Screens.DashBoard,
            params: undefined
        });
    });

    test('NavigationManager_navigateAndClear_ToCalledWithScreenName', () => {
        NavigationManager.navigateAndClear(Screens.ProfilePage);
        expect(CommonActions.reset).toBeCalled();
        expect(CommonActions.reset).toBeCalledWith({
            index: 0,
            routes: [
                {
                    name: Screens.ProfilePage,
                    params: undefined
                }
            ]
        });
    });

    test('NavigationManager_navigateAndClear_ToCalledWithScreenName_And_Params', () => {
        NavigationManager.navigateAndClear(Screens.ProfilePage, { name: '' });
        expect(CommonActions.reset).toBeCalled();
        expect(CommonActions.reset).toBeCalledWith({
            index: 0,
            routes: [
                {
                    name: Screens.ProfilePage,
                    params: { name: '' }
                }
            ]
        });
    });

    test('NavigationManager_navigateAndClear_ToCalledWithScreenName_And_Params', () => {
        NavigationManager.navigateAndClear(Screens.ProfilePage, { name: '' });
        expect(CommonActions.reset).not.toEqual({
            index: 0,
            routes: [
                {
                    name: Screens.DashBoard,
                    params: { name: '' }
                }
            ]
        });
    });

    test('NavigationManager_goBack_ToBeCalled', () => {
        NavigationManager.goBack();
        expect(CommonActions.goBack).toBeCalled();
    });

    test('NavigationManager_setTopLevelNavigator_ToBeCalled', () => {
        /**
         * spyOn function mocks function of class
         * jest.spyOn(Class, 'Function name');
         */
        const spySetTopLevelNavigator = jest.spyOn(NavigationManager, 'setTopLevelNavigator');
        NavigationManager.setTopLevelNavigator({ dispatch: jest.fn() });
        expect(NavigationManager.setTopLevelNavigator).toBeCalled();
        spySetTopLevelNavigator.mockClear();
    });
});
