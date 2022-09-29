import { all, fork } from 'redux-saga/effects';
import { userDataSaga } from './SyncDataSaga';
export function* RootSaga() {
    yield all([fork(userDataSaga)]);
}
