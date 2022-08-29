// call - calls URLs/API
// put - dispatches actions
// takeEvery - watch a function/action and triggers function any time that action is called
import { call, put, takeEvery } from 'redux-saga/effects'

import { getCatsSuccess } from './index'

// "worker" generator function, where most of the business logic and handling side effects lies
function* workGetsCatsFetch() {
  // yield similar (but not the same) as async/await
  // using "call" to call an api
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))

  // converting to json is async so calling yield again
  const formattedCats = yield cats.json()
  const formattedCatsShortened = formattedCats.slice(0, 10)
  
  // dispatching action with new data as payload
  yield put(getCatsSuccess(formattedCatsShortened))
}

// PRIMARY generator function, the actual "saga" where all "workers" are watched
function* catSaga() {
  // the action to watch is essentially:
  // the slice of state + 
  // the action function written in the reducers object in createSlice
  yield takeEvery('cats/getCatsFetch', workGetsCatsFetch)
}

export default catSaga