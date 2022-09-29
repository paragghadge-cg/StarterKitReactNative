//import { firebase } from '@react-native-firebase/crashlytics';
import Realm from 'realm';
import ConsoleLog from '../Helper/ConsoleLog';
import { copyRealmObject } from '../Helper/UtilityManager';
import { DashBoardSchema } from './DBSchema';
import { DatabaseSchema as SchemaType } from './SchemaType';

export default class DatabaseManager {
    static dbInstance: DatabaseManager;
    realm: any;
    schemaVersion = 1;

    constructor() {
        this.initializeDB();
    }
    static getInstance() {
        if (DatabaseManager.dbInstance == null) {
            DatabaseManager.dbInstance = new DatabaseManager();
        }

        return this.dbInstance;
    }
    public async initializeDB() {
        try {
            //  const binary_string = await SecureStorage.getData(Storage_Constants.REALM_KEY);
            /**
             * TODO: Please remove the below code testing is done
             */
            const binary_string =
                'N60LgDmG4CuwC9Gb//+EDlTSGpYwA1V83XDepAT+Dv/wFZL1cqvuIAZjbzw==wer';
            /**
             *  https://www.convertstring.com/EncodeDecode/HexEncode     pass encryption key to URL to get hex_code
             */
            /**
             * use it to open Realm
             */
            this.realm = new Realm({
                encryptionKey: this.base64ToArrayBuffer(binary_string),
                schema: [DashBoardSchema], //Add all scheme here
                schemaVersion: this.schemaVersion,
                migration: (_oldRealm, _newRealm) => {}
            });
        } catch (error) {
            ConsoleLog.log('initializeDB--->', error);
            //firebase.crashlytics().recordError(new Error(error));
            return '';
        }
    }

    public base64ToArrayBuffer = (binary_string: string) => {
        let len = binary_string.length;
        let bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    };

    /**
     * @param schema Pass database schema name
     * @param data Pass javascript object
     * @returns
     */
    public createEntity = async (schema: SchemaType, data: any) => {
        try {
            this.realm.write(async () => {
                if (data?.length > 0) {
                    for (let i = 0, total = data.length; i < total; i++) {
                        this.realm.create(schema, data[i], Realm.UpdateMode.All);
                    }
                } else {
                    this.realm.create(schema, data, Realm.UpdateMode.All);
                }
            });
        } catch (error) {
            // firebase.crashlytics().recordError(new Error(error));
            ConsoleLog.log('createEntity--->', error);
            return '';
        }
    };

    /**
     *
     * @param schema  Pass database schema name
     * @param query is optional  for get selected data from db
     * @returns
     */
    public getEntities = (schema: SchemaType, query?: string) => {
        try {
            if (query) {
                let queryResult = this.realm.objects(schema).filtered(query);
                let copyOfJsonArray = Array.from(queryResult);
                return copyRealmObject(copyOfJsonArray);
            } else {
                let copyOfJsonArray = Array.from(this.realm.objects(schema));
                return copyRealmObject(copyOfJsonArray);
            }
        } catch (error) {
            ConsoleLog.log('getEntities--->', error);
            return [];
        }
    };

    /**
     *
     * @param schema Pass database schema name
     * @param record Pass object ex:- let entitiesToUpdate = {First_Name: "Dummy_Name_2"}
     * @param _query To find particular object to update it's value ex:- let query = `First_Name ='DummyName' && Location = 'DummyLocation' `;
     * @returns
     */
    public updateEntity = async (schema: SchemaType, record?: any, _query?: string) => {
        try {
            this.realm.write(async () => {
                let queryResult = this.realm.objects(schema).filtered(_query);
                queryResult &&
                    queryResult.forEach((element: any) => {
                        Object.keys(record).forEach((key) => {
                            element[key] = record[key];
                        });
                    });
            });
            return true;
        } catch (error) {
            ConsoleLog.log('updateEntity--->', error);
            return '';
        }
    };

    /**
     *
     * @param schema Pass database schema name
     * @param query To delete data from db
     * @returns
     */
    public deleteEntityWithQuery = async (schema: SchemaType, query: string) => {
        try {
            let queryResult = this.realm.objects(schema).filtered(query);
            queryResult &&
                this.realm.write(() => {
                    this.realm.delete(queryResult);
                });
        } catch (error) {
            ConsoleLog.log('deleteEntityWithQuery--->', error);
            return '';
        }
    };

    public deleteEntity = async (schema: SchemaType) => {
        try {
            this.realm.write(() => {
                this.realm.delete(this.realm.objects(schema));
            });
        } catch (error) {
            ConsoleLog.log('deleteEntity--->', error);
            return '';
        }
    };

    /**
     * To Delete all data from DB
     * @returns
     */
    public deleteAllEntities = async () => {
        try {
            this.realm.write(() => {
                this.realm.deleteAll();
            });
        } catch (error) {
            ConsoleLog.log('deleteAllEntities--->', error);
            return '';
        }
    };
}
