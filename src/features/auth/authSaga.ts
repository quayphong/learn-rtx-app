import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { customHistory } from 'utils';
import { authActions, LoginPayload } from './authSlice'

function* handleLogin(payload: LoginPayload){
    try{
        yield delay(500);
        localStorage.setItem('access_token', payload.username);
        yield put(authActions.loginSuccess({
            id: 1,
            name: payload.username
        }));

        customHistory.push('/admin');
    } catch(error: any){
        yield put(authActions.loginFailed(error.message)) 
    }
}

function* handleLogout(){   
    console.log('Hanlde logout');
    localStorage.removeItem('access_token');
    customHistory.push('/login');
}

function* watchLoginFlow(){
    while(true){
        console.log('Watch login');
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn){
            const action:PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        } 

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export function* authSaga(){
    yield fork(watchLoginFlow);
}