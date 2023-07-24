import { Box, Paper, Typography } from "@mui/material"
import AirlineSeatReclineExtraSharpIcon from '@mui/icons-material/AirlineSeatReclineExtraSharp';


const ExpenseCard = ({expense}) => {

return(  <Paper sx={{height:'10vh', position:'relative','&:hover': {boxShadow: 9, cursor:'pointer'} }} elevation={3}> <Typography variant='h6' sx={{position:'absolute', left:10}}>{expense.name}</Typography>  <AirlineSeatReclineExtraSharpIcon fontSize='large' sx={{position:'absolute', top: 0, right:0}}/>  <Box sx={{position:'absolute', bottom:0, right:0, display:'flex' }}> <Typography variant="h6">{`${expense.spend} \u00A0 /` } </Typography ><Typography variant='h5'> {`\u00A0 ${expense.budget}`} </Typography></Box></Paper>    )


}

export default ExpenseCard