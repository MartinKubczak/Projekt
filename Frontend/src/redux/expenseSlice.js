import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expenses:[{name:'Woda', budget:50, spend:30, icon:'water'},
   {name: 'Prad', budget: 350, spend:15, icon:'bolt'},
   {name:'Dupa', budget: 110, spend:80, icon:'girl'},
   {name:'Plecy', budget:30, spend:95, icon:'surfing'},
   {name:'Smieci', budget:90, spend:33, icon:'boy'},
   {name:'Czajnik', budget:35, spend:40, icon:'paragliding'},
   {name:'Podajnik', budget: 99, spend: 90, icon:'android'},
   {name:'Ryby', budget:66, spend:50, icon:'rowing'},
   {name:'Dyby', budget: 390, spend:300, icon:'hotel'}],
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