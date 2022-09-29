export default class ConsoleLog {
    static log(consoleMessage?: any, ...optionalParams: any[]) {
        if (__DEV__) {
            console.log(consoleMessage, ...optionalParams);
        }
    }
}
