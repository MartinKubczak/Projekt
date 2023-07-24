import { createSlice } from '@reduxjs/toolkit'

const initialState = {amount:1220, amountSpend:733}

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    addToSummary: (state, action) => {
      state.amount = state.amount + Number(action.payload)
    },
    addToAmountSpend: (state, action) =>{
      state.amountSpend = state.amountSpend = state.amountSpend + Number(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToSummary} = summarySlice.actions

export default summarySlice.reducer