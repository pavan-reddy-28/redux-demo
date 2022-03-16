import { call ,put } from 'redux-saga/effects'
import { setUser } from '../../actions/userActions';
import { requestGetUser } from '../requests/users'


export  function* handleGetRequest(action) {
    try {
        const response = yield call(requestGetUser);
        const {data} = response;
        yield put(setUser(data))
    } catch (error) {
        
    }
}
