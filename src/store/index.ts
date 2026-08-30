import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import portfolioReducer from './slices/portfolioSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        portfolio: portfolioReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
