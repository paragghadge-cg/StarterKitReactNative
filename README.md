# React Native Base Project

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jump start development.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-config](https://github.com/luggit/react-native-config) to manage build envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [@react-navigation/stack](https://www.npmjs.com/package/@react-navigation/stack) navigation library.
- [@react-navigation/native-stack](https://www.npmjs.com/package/@react-navigation/stack) navigation library.
- [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler) navigation library.
- [redux](https://redux.js.org/) for state management.
- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) for state management.
- [react-redux](https://www.npmjs.com/package/react-redux) for state management.
- [redux-saga](https://www.npmjs.com/package/redux-saga) for redux middleware.
- [react-native-device-info](https://www.npmjs.com/package/react-native-device-info) to get information related to device.
- [react-native-secure-key-store](https://www.npmjs.com/package/react-native-secure-key-store) as storage solution.
- [i18next](https://www.npmjs.com/package/i18next) for Localization.
- [axios](https://www.npmjs.com/package/axios) for Networking solution.
- [moment](https://www.npmjs.com/package/moment) for Date.
- [realm](https://www.npmjs.com/package/realm) for DataBase.
- [react-native-localize](https://www.npmjs.com/package/react-native-localize) to get device local language.
- [@react-native-community/netinfo](https://www.npmjs.com/package/@react-native-community/netinfo) to detect network
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `npm run [platform]- [environment]`

you can use npm following the rule `npm run android-dev`

Modify the environment variables files in root folder (`.env.dev`, `.env.prod` and `.env.uat`)

### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple environment's to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

**Steps**

### Android setup

```
Install the package: npm install react-native-config
```

Create a new file `.env` and `.env.dev` in the root of your React Native app and add:

```
API_URL=https://myapi.com
```

**android/app/build.gradle**

Add

```
project.ext.envConfigFiles = [
   devdebug: ".env.dev"
   //rest of build
]
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

inside android object add flavorDimensions and productFlavors

```bash
android {
  ndkVersion rootProject.ext.ndkVersion
  compileSdkVersion rootProject.ext.compileSdkVersion

  //Add these two
  flavorDimensions "default" 
  productFlavors{ 
    dev { 
      applicationId '' 
      resValue "" 
    } 
  }
}
```

Tu run dev or uat add scripts in `package.json`

```
"scripts": {
    "android-dev": "set ENVFILE=.env.dev & react-native run-android --variant=devdebug",  
    "android-uat": "set ENVFILE=.env.uat & react-native run-android --variant=uatdebug",
},
```

### Ios setup

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu

  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.

- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu

  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

# Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

## Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder `cd android`
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project `assemble:` Generates an apk that you can share with others. `install:` When you want to test a release build on a connected device. `bundle:` When you are uploading the app to the Play Store.

For more info please go to <https://reactnative.dev/docs/signed-apk-android>

## iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to <https://reactnative.dev/docs/publishing-to-app-store>

## React-Navigation Setup

### ios setup

From React Native 0.60 and higher, linking is automatic. So you don't need to run react-native link If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.

```
npx pod-install ios
```

### Android setup

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in `android/app/src/main/java/`

**MainActivity.java**

Add the following code to the body of MainActivity class:

```
@Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
}
```

and make sure to add an import statement at the top of this file:

```
import android.os.Bundle;
```

## Jest-Setup for unit testing

To set up jest follow these initial steps: First, open up Terminal or command prompt. in install dev-dependency

```
npm install jest --save-dev
npm install @types/jest --save-dev
npm install babel-jest --save-dev
npm install cheerio --save-dev
npm install enzyme --save-dev
npm install enzyme-adapter-react-16 --save-dev
npm install enzyme-to-json --save-dev
```

inside `package.json` in `script` object add

```
"scripts": {
    "test": "jest",
 }
```

below `devDependencies` add `resolutions`

```
"devDependencies": {
   // Dev dependencies
  },
"resolutions": {
    "@types/react": "^17",
    "cheerio": "1.0.0-rc.3" // latest version 
  }
```

create `jest` folder inside root of yor project and create `setup.js` file inside it

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```

inside this setup.js mock any library for unit test ex:-

```
jest.mock('react-native-config', () => {
     return {
         BASEURL: 'https:',
         SOURCESYSTEMID: 'INT0142'
    };
 });
```

now create `_mocks_` folder inside root folder of your project and add inside thi folder create mock file for library's which can not be handled by `jest.mock` function

Ex. `react-redux.js, react-native-secure-key-store.js, realm.js`

```
const mockDispatch = jest.fn((action) => action);
module.exports = {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
        mapStateToProps,
        mapDispatchToProps: (dispatch = mockDispatch, ownProps) =>
            mapDispatchToProps(dispatch, ownProps),
        ReactComponent,
        mockDispatch
    }),
    Provider: ({ children }) => children
};
```

now create `jest.config.js` file inside root folder of your project and add

To use these `_mock_` file we don't need any extra code for it to work, just add path in `jest.config.js` in `setupFilesAfterEnv` object

```
module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['./jest/setup.js'
    './__mocks__/react-native-secure-key-store.js',
    './__mocks__/NavigationManagerMock.js',
    './__mocks__/realm.js',
    './__mocks__/react-redux.js'
    ],
    cacheDirectory: './jest/cache',
    coverageThreshold: {
        global: {
            statements: 80
        }
    }
};
```

## Prettier setup

To set prettier add this object in `.prettierrc.js`

```
module.exports = { tabWidth: 4, semi: true, printWidth: 100, bracketSpacing: true, jsxBracketSameLine: false, jsxSingleQuote: false, singleQuote: true, trailingComma: 'none', arrowParens: 'always', };
```

# Folder structure

This template follows a very simple project structure:

- `_mocks_`: This folder contains mock file for jest which can not be mock by `jest.mock`
- `_test_`: This folder contains all unit test case file
- `src`: This folder is the main container of all the code inside your application.

  - `Actions`: This folder contains all actions that can be dispatched to redux.
  - `Assets`: Asset folder to store all images, vectors, etc.
  - `Components`: Folder to store any common component that you use through your app (such as a generic button)
  - `Constants`: Folder to store any kind of constant that you have.

    - `ApiConstants`: All constantans related to networking
    - `AutomationIds`: Automation Test ids
    - `Screens`: Screen name's
    - `StoreConstant`: AsyncStorage constant

  - `Navigation`: Folder to store the navigators.

  - `ReduxStore`: This folder have all your reducers, saga and store.

  - `Screens`: Folder that contains all your application screens/features.

  - `MockData`: This folder contains json object of mock data.

  - `Model`: This folder contains Model of server response.

  - `Database` : This folder contains Database manager, DB constant, DB schema, Query, SchemaType ( We have used Realm as database)

  - `Helper`: Folder that contains all helping file for app.

    - `ConsoleLog`: A common console.log for all file
    - `DeviceManager`: To get app information related device
    - `NavigationManager`: Common Function for Navigation
    - `Selectors`: Selectors for redux
    - `UtilityManager`: All common utility function to help to verify or validate values
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code.
    - `selectors`: Folder to store your selectors for each reducer.
    - `storage`: Folder that contains the application storage logic.
    - `ReduxStore`: Folder to put all redux middleware and the store.
    - `theme`: Folder to store all the styling concerns related to the application theme.

  - `Navigation`: This folder is containing Stack navigator and other navigator can be added

  - `Networking`: This is containing ApiManger, EnvConfigurations, NetworkProvider

- `App.tsx`: Main component that starts your whole app.

- `jest.config.js`: Jest configuration.

- `.env, .env.dev, .env.prod, .env.uat`: These are for environment configuration.

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

## Components

**Toast**To use make toast in android and ios use `Toast.show(strings("message"))` this toast is self closing and it will disappear in 1 sec

To get toast message in screen implement Toast in UI

```
<Toast></Toast>
```

## Constants

**ApiConstants** Api constants are constants value for Networking, ex:-

```
export const ErrorMessages = {
    NO_CONNECTIVITY: strings('ErrorMessages.NO_CONNECTIVITY'),
};

export const HTTP_METHODS = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};
```

**Automationids** Automation id's are for **testID** of each component used in UI, which is helpful in Automation testing and unit testing

```
export const automationIds = {
    DashboardPage_MainButton: 'DashboardPage_MainButton',
    DashboardPage_Text: 'DashboardPage_Text',
};
```

To use this id's, pass `testId` in every component

```
<TouchableOpacity
    testID={automationIds.DashboardPage_MainButton}
    onPress={this.navigate}
  >
        <Text
           testID={automationIds.DashboardPage_Text}
        >
            {strings('DashBoard.message')}
        </Text>
 </TouchableOpacity>
```

**StringsKey** will contain Key for string for each screen to use it in `strings()` function.

to use it

```
export const StringsKey = {
    DashBoardMsgKey: 'DashBoard.message'
};
```

```
<Text>
    {strings(StringsKey.DashBoardMsgKey)}
</Text>
```

**index.ts** helps to short imports in every file , if we create index.js file for ts file's then we don't need to write multiple lines for import data from same folder

we can direct import file form folder like

```
import { automationIds, Screens } from '../Constants';
```

to make index.js

```
export { automationIds } from './AutomationIds';
export { Screens } from './Screens';
```

## Database(Realm)

**DatabaseManager** helps to create database in application, it has multiple function to get and update data in db of app

To initialize DB in app use `initializeDB`,

```
DatabaseManager.getInstance().initializeDB()
```

Before using `initializeDB` function add schema in object of Realm

```
export const CatSchema={
    name: "Cat",
    primaryKey: 'name',
    properties: {
        name: "string",
       type:"string"
    }
}
```

```
this.realm = new Realm({
    encryptionKey: this.base64ToArrayBuffer(binary_string),
    schema: [CatSchema],  //Add all schema here which is created in DBSchema
    schemaVersion: this.schemaVersion,
    migration: (_oldRealm, _newRealm) => {}
});
```

To create store data into db `createEntity` use function this function accepts two argument schema name and its property

```
let data={
    name:"billy",
    type:"animal"
}
```

```
DatabaseManager.getInstance().createEntity("Cat",data)
 //Cat is schema name
 //data is its property
```

To get entity from database use `getEntities` function, it accepts two argument

- if we pass Schema name it will return all data in which is in schema
- if we pass Schema name and query it will return filtered data according to query (it's optional)

```
DatabaseManager.getInstance().getEntities("Cat")
```

```
let query=`name=${value}&& type=${value}`
DatabaseManager.getInstance().getEntities("Cat",query)
```

To update any entity in schema use `updateEntity` function

```
let entitiesToUpdate = {name: "billy 2"}
DatabaseManager.getInstance().updateEntity("Cat",entitiesToUpdate)
```

To find particular object to update it's value

```
let query = `name ='billy' && type = 'animal' `;
DatabaseManager.getInstance().updateEntity("Cat",entitiesToUpdate,query)
```

To delete all data in one schema use `deleteEntity`

```
DatabaseManager.getInstance().deleteEntity("Cat")
```

To delete particular data from scheme use `deleteEntityWithQuery`

```
DatabaseManager.getInstance().deleteEntityWithQuery("Cat",query)
```

To empty all data from all schema use `deleteAllEntities`

```
DatabaseManager.getInstance().deleteAllEntities()
```

**DBConstants** contains schema name for DB that we are using in `DBScheman` file and this schema name will help to create schema in db

```
export const RealmSchema = {
    Cat: 'Cat'
};
```

**DBSchema** will have all the schema that we want to create in db

```
export const CatSchema={
    name: RealmSchema.Cat,
    primaryKey: 'name',
    properties: {
       name: "string",
       type:"string"
    }
}
```

**SchemaType** has enum for Database Schema to use this as `type` in Database manger file and all other place ex:

```
export enum DatabaseSchema {
    Cat = 'Cat'
}
```

```
import { DatabaseSchema as SchemaType } from './SchemaType'; 
public getEntities = (schema: SchemaType, query?: string) => {
      //Rest of logic
};
```

```
DatabaseManager.getInstance().getEntities(DatabaseSchema.Cat)
```

## Localization

**Locales** contain all language file in `.json` format which will contain `translation` object for `i18n` library an inside that `translation` object we have to define our object for multiple language support create different jason file's

this is an `en.json` file

```
{
    "translation": {
        "DashBoard": {
            "message": "Welcome to dashboard"
        },
        "Network": {
            "connectionWith": "You are connected with {{network}}"
        }
    }
}
```

**i18n.ts**

To make app support multiple language add resource's in `resources` object

```
I18next.use(languageDetector).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en', //Should the app fallback to English if user locale doesn't exists
    resources: {
        en: en,
        ar:ar    
    },
    react: {
        useSuspense: false
    }
});
```

To use i18n features for translation use `strings` function

```
import { strings } from '../Localization/i18n';
<Text>{strings("DashBoard.message")}</Text>
```

to add dynamic data in strings

```
strings("Network.connectionWith", { network: "wifi" })
```

# Theme

**AppTheme** contains two default theme for React-native app `light` and `dark`. If users device is in Dark mode then react-native app will automatically convert its theme to `Dark` and vice versa.

```
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
export const theme = {
    light: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#B0BEC5',
            secondary: '#29434E',
            error: '#D32F2F',
            text: '#212121',
            border: '#212121',
            activeTab: '#1976D2',
            inactiveTab: '#757575'
        }
    },
    dark: {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: '#212121',
            secondary: '#29434E',
            error: '#D32F2F',
            text: '#FFFFFF',
            border: '#FFFFFF',
            activeTab: '#4FC3F7',
            inactiveTab: '#FFFFFF'
        }
    }
};
```

To use pass this theme object in `NavigationContainer` and to fetch current theme of device we can use `Appearance` provided by react-native it will return theme as "dark" | "light"

```
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, Appearance } from 'react-native';
 let currentTheme = Appearance.getColorScheme();
 <NavigationContainer theme={theme[currentTheme]}>
    <AppNavigator />
</NavigationContainer>
```

# Networking

**ApiManager** class which helps to make any http request's.To use this class import `apiManager` from file ApiManager.This function accepts 4 argument `Endpoint,ApiRequestMethod,Header(if any extra),Body,` where Header and body are optional

```
import apiManager from '../Networking/ApiManager';
getData=async ()=>{
  let data=  await apiManager.apiCall('Endpoint', 'GET',{},{});
}
```

**NetworkProvider** helps to detect network throughout the app.

To use this network provider wrap it with `Rootnavigater`

```
<NetworkProvider>
    <RootNavigator />
</NetworkProvider>
```

and to check Network connectivity manually

```
let value=NetworkProvider.checkIsNetworkConnected();
```

this will return boolean value
