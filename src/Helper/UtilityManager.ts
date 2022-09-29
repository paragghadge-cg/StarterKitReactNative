export const convertObjectToArray = (item: any) => {
    return typeof item === 'object' ? Object.keys(item).map((key) => item[key]) : item;
};

/**
 *
 * @param objectValue
 * @returns true id value is not undefined or null
 */
export const isValid = (objectValue: null) => {
    return objectValue !== null && typeof objectValue !== 'undefined';
};

/**
 *
 * @param objectValue
 * @returns
 * Check array is not empty and returns true
 */
export const isArrayNonEmpty = (objectValue: any) => {
    return isValid(objectValue) && objectValue.length > 0;
};

/**
 *
 * @param objectValue
 * @returns true if value is valid
 * Check valid string and type and returns true
 */
export const isStringValid = (objectValue: any) => {
    return isValid(objectValue) && typeof objectValue === 'string';
};

/**
 *
 * @param stringValue
 * @returns true
 * Check valid string and empty
 */
export const isStringEmpty = (stringValue: string) => {
    return isStringValid(stringValue) && stringValue.trim() === '';
};

/**
 *
 * @param value
 * @returns true if value is valid
 *
 */
export const isValidValue = (value: any) => {
    return value == undefined || value == null || value == 'undefined' || value == 'null'
        ? false
        : true;
};

/**
 *
 * @param obj
 * @returns true if object is empty
 */
export const isEmptyObject = (obj: any) => {
    return isValid(obj) && Object.keys(obj).length === 0;
};

export const checkStringContainsNumber = (str: string) => {
    let regex = /^[a-zA-Z\s]*$/;
    if (str.match(regex)) {
        return false;
    } else {
        return true;
    }
};

/**
 *
 * @param email
 * @returns boolean
 * This function validated's email address format
 */
export const validateEmailAddress = (email: string) => {
    let regex = /[a-z0-9A-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
    if (email.match(regex)) {
        return false;
    } else {
        return true;
    }
};

export const copyRealmObject = (item: any) => {
    return JSON.parse(JSON.stringify(item)); //refReplacer(item)
};

/**
 *
 * @param value
 * @returns true if object is empty
 */
export const isObjectEmpty = (value: any) => {
    return isValidValue(value) && Object.keys(value).length == 0 ? true : false;
};
