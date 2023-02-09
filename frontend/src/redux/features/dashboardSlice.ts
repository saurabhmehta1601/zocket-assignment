import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum MenuItemLabel {
    HOME = "Home",
    CAMPAIGNS = "Campaigns",
    CUSTOMERS = "Customers",
    PRODUCTS = "Products"
}

const initialState = {
  activeDashboardMenuItem: MenuItemLabel.HOME,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardActiveMenuItem: (
      state,
      action: PayloadAction<MenuItemLabel>
    ) => {
      state.activeDashboardMenuItem = action.payload;
    },
  },
});

export const { setDashboardActiveMenuItem } = dashboardSlice.actions;
export default dashboardSlice.reducer;
