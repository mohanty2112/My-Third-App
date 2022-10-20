import { createSlice } from "@reduxjs/toolkit";

const initialDetails = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
};
export const dataSlice = createSlice({
  name: `firstname`, 
  initialDetails,
  reducers: {
    updateData: (state, action) => {
        console.log(state)
        console.log(action)
    }
  }
})

export const {updateData} = dataSlice.actions

export default dataSlice.reducer
