import {configureStore} from "@reduxjs/toolkit"
import expenseReducer from "./expenseSlice"
import summaryReducer from "./summarySlice"
const store = configureStore({
reducer: {
    expense: expenseReducer,
    summary: summaryReducer


}


})

export default store