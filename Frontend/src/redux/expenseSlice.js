import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses:[{name:'Woda', amount:50},
   {name: 'Prad', amount: 350},
   {name:'Dupa', amount: 110},
   {name:'Plecy', amount:30},
   {name:'Smieci', amount:90},
   {name:'Czajnik', amount:35},
   {name:'Podajnik', amount: 99},
   {name:'Ryby', amount:66},
   {name:'Dyby', amount: 390}],
}

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, (action.payload)]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addExpense} = expenseSlice.actions

export default expenseSlice.reducer