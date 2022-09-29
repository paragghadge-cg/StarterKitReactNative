import { RealmSchema } from './DBConstants';

export const DashBoardSchema = {
    name: RealmSchema.DashBoardSchema,
    primaryKey: 'First_Name',
    /**
     * properties are backend response object
     * The ? says it can be omitted (in which case it's undefined), and the | null says it can be explicitly set to null.
     */
    properties: {
        Location: 'string?',
        Date: 'string',
        First_Name: { type: 'string', default: '' }
    }
};
