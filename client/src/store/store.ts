import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import articlesReducer from '../slices/articlesSlice';
import reactionsReducer from '../slices/reactionsSlice';
import commentsReducer from '../slices/commentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
    reactions: reactionsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
