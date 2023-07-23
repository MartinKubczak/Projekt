import { useState } from 'react'
import NavigationBottom from './components/NavigationBottom'
import Grid from '@mui/material/Unstable_Grid2';
import ButtonAppBar from './components/ButtonAppBar';
import AddExpenseForm from './components/AddExpenseForm';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
function App() {
  const [expensess, setExpensess] = useState(['Woda', 'Prad', 'Dupa', 'Plecy', 'Smieci', 'Czajnik', 'Podajnik', 'Ryby', 'Dyby'])
  const [newExpense, setNewExpense] = useState()

  const expenses = useSelector(state => state.expense.expenses)

console.log(expenses)
const funkcja = () => {
  console.log({newExpense})
}

  return (
    <>
    <Grid container spacing={3}>
        <Grid xs={12} >
          <ButtonAppBar/>
        </Grid>
        <Grid container xs={12} spacing={3}>
          

            {expenses.map(expense => <Grid  xs={3}> <Box sx ={{display: 'flex', border: '1px dashed grey', justifyContent: 'center'}}> <Typography> {`${expense.name} : ${expense.amount}`} </Typography> </Box> </Grid>)}

          </Grid>


        
          <Grid xs>
       <AddExpenseForm ExpVal={newExpense} Submit = {()=>{funkcja()}}/>
           </Grid>
        
        <Grid xs={12}>
          <NavigationBottom/>
        </Grid>
      </Grid>
      
     </>
  )
}

export default App
