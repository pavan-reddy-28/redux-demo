import {takeLatest} from 'redux-saga/effects'
import { GET_USER } from '../constants'
import { handleGetRequest } from './handlers/users'


//watcherSaga

export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetRequest)
}