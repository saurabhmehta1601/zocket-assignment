import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 1,
};

const createCampaignSlice = createSlice({
  name: "createCampaign",
  initialState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = createCampaignSlice.actions;
export default createCampaignSlice.reducer;
