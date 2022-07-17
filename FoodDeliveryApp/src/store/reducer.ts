import {combineReducers} from 'redux';

import userSlice from '../slices/user';

// rootReducer 는 전체 상태를 말한다.
const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
