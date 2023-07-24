import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses:[{name:'Woda', budget:50, spend:30},
   {name: 'Prad', budget: 350, spend:15},
   {name:'Dupa', budget: 110, spend:80},
   {name:'Plecy', budget:30, spend:95},
   {name:'Smieci', budget:90, spend:33},
   {name:'Czajnik', budget:35, spend:40},
   {name:'Podajnik', budget: 99, spend: 90},
   {name:'Ryby', budget:66, spend:50},
   {name:'Dyby', budget: 390, spend:300}],
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