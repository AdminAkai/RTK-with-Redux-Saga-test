import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import { catsReducer } from './features';
import catSaga from './features/catsSlice/saga';

const sagas = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga]
})

sagas.run(catSaga)