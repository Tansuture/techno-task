import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types/types";

const userSlice = createSlice({
  name: "user",
  initialState:
    JSON.parse(localStorage.getItem("users") || "[]") || ([] as Users[]),

  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
