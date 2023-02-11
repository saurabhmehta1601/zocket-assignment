import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createCampaignReducer from "./features/createCampaignSlice";
import dashboardReducer from "./features/dashboardSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    createCampaign: createCampaignReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
