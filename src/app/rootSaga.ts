import { authSaga } from 'features/auth/authSaga';
import { dashboardSaga } from 'features/dashboard/dashboardSaga';
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    console.log('Root sage');
    yield all([
        authSaga(),
        dashboardSaga(),
    ]);
}