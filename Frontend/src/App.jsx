import { useState } from 'react'
import NavigationBottom from './components/NavigationBottom'
import Grid from '@mui/material/Unstable_Grid2';
import ButtonAppBar from './components/ButtonAppBar';
import AddExpenseForm from './components/AddExpenseForm';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Paper, CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/system';
import ExpenseCard from './components/ExpenseCard'

function App() {

  const expenses = useSelector(state => state.expense.expenses)
  const summary = useSelector(state => state.summary.amount)

  

console.log(expenses)

  return (
<CssBaseline>
    <Container disableGutters maxWidth="xl"   >






    <Grid container spacing={3}>
      
        <Grid xs={12} >
          <ButtonAppBar/>
        </Grid>
        <Grid container xs={12} spacing={3}>
          

            {expenses.map(expense => <Grid xs={4}> <ExpenseCard expense={expense}/>  </Grid>)}

          </Grid>

            <Grid xs = {12}>
              <Grid>
             <Box sx={{display:'flex', border: '1px dashed grey', justifyContent:'center'}}>
              <Typography variant="h1">

              Summary : {summary}

              </Typography>
              </Box>
              </Grid>

            </Grid>
        
          <Grid xs>
       <AddExpenseForm/>
           </Grid>
        
        <Grid xs={12}>
          <NavigationBottom/>
        </Grid>
      </Grid>
      
     </Container>
     </CssBaseline>
  )
  
}

export default App
