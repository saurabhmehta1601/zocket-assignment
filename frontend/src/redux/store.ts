import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createCampaignSlice from "./features/createCampaignSlice";
import dashboardSlice from "./features/dashboardSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  // Add your reducers here
  dashboard: dashboardSlice,
  createCampaign: createCampaignSlice,
});

export default rootReducer;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
