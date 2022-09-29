import { CommonActions, NavigationContainerRef } from '@react-navigation/native';

/**
 * To type check our route name and params we can create an object type
 * with mappings for route name to the params of the route.
 * Example type RootStackParamList = {Profile: { userId: string };};
 */
type RootStackParamList = {};
const NavigationManager = {
    navigator: null as NavigationContainerRef<RootStackParamList> | null,

    /**
     *
     * @param navigatorRef This navigatorRef prop will contain all
     * function for react-navigation ie: dispatch,navigate,reset etc.
     * Use setTopLevelNavigator to assign prop in navigatorRef,
     * Use NavigationContainer's ref prop to get ref for navigatorRef
     */
    setTopLevelNavigator(navigatorRef: NavigationContainerRef<RootStackParamList> | null) {
        this.navigator = navigatorRef;
    },

    /**
     * @param routeName Screen name
     * @param params Parameter's as an object, this params are optional
     * Use this function to navigate screen from one to another
     */
    navigate(routeName: any, params?: any) {
        this.navigator!.dispatch(
            CommonActions.navigate({
                name: routeName,
                params: params
            })
        );
    },

    /**
     * @param routeName Screen name
     * @param params Parameter's as an object, this params are optional
     * Use this function navigate to one screen and remove all the screen from navigation stack
     */
    navigateAndClear(routeName: any, params?: any) {
        this.navigator!.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: routeName,
                        params: params
                    }
                ]
            })
        );
    },

    /**
     * This function is for going back to pervious screen
     */
    goBack() {
        this.navigator!.dispatch(CommonActions.goBack());
    }
};

export default NavigationManager;
