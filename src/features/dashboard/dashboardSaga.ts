import { PayloadAction } from '@reduxjs/toolkit';
import studentApi from 'apis/studentApi';
import { ListParams, ListResponse, Student } from 'models';
import { all, call, delay, fork, put, take } from 'redux-saga/effects';
import { dashboardActions, DashboardStatistics } from './dashboardSlice'

function* fetchStudentStatistics(){
    try{
        const params: ListParams = {
            _page: 1,
            _limit: 100,
            _sort: 'name',
            _order: 'asc'
        }
        const response: ListResponse<Student> = yield call(studentApi.getAll, params);
        var students = response.data;
        var dashboardStatistic: DashboardStatistics = {
            maleCount: students.filter(student => student.gender === 'male').length,
            femaleCount: students.filter(student => student.gender === 'female').length,
            highMarkCount: students.filter(student => student.mark >= 8).length,
            lowMarkCount: students.filter(student => student.mark <= 5).length
        };

        yield put(dashboardActions.setStatistics(dashboardStatistic));


    } catch(error: any){
        yield put(dashboardActions.fetchDataFailed(error.message)) 
    }
}

// function* handleLogout(){   
//     console.log('Hanlde logout');
//     localStorage.removeItem('access_token');
//     customHistory.push('/login');
// }

function* fetchDataFlow(){
    console.log('Fetch data for dashboard');
    yield take(dashboardActions.fetchData.type);
    yield all([
        fetchStudentStatistics()
    ]);
}

export function* dashboardSaga(){
    yield fork(fetchDataFlow);
}