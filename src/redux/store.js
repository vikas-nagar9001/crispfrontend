import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './Slices/authSlice';
import topicsReducer from './Slices/topicsSlice';
import awardsReducer from './Slices/awardsSlice';
import testimonialsReducer from './Slices/testimonialsSlice';
import preparationsReducer from './Slices/preparationsSlice';
import questionsReducer from './Slices/questionsSlice';
import questionCardsReducer from './Slices/questionCardsSlice';
import  answerlogsReducer  from './Slices/answerlogsSlice';
import  leaderboardReducer  from './Slices/leaderboardSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  topics: topicsReducer,
  awards: awardsReducer,
  testimonials: testimonialsReducer,
  preparations: preparationsReducer,
  questionCards: questionCardsReducer,
  questions: questionsReducer,
  answerlogs: answerlogsReducer,
  leaderboard: leaderboardReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
