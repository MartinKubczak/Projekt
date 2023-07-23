import { useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addExpense } from "../redux/expenseSlice";
import { useDispatch } from "react-redux";
const AddExpenseForm = () => {
    const [open, setOpen] = useState(false);

const dispatch = useDispatch()
    const submit = () => {
        console.log(newExpenseName, newExpenseValue)
        const newExpenseObject = {
          name: newExpenseName,
          amount: newExpenseValue
        }
        dispatch(addExpense(newExpenseObject))
        setNewExpenseName('')
        setNewExpenseValue(0)
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleCloseSubmit = () => {
      setOpen(false);
      submit()
    };

    const handleClose = () => {
        setOpen(false);        
      };

    const [newExpenseName, setNewExpenseName] = useState('')
    const [newExpenseValue, setNewExpenseValue] = useState(0)

return(

<div>
<Box sx={{position: 'fixed', bottom: '15%', right:'3%'} }>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter expense and value
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="expense"
            label="Expense"
            type="text"
            fullWidth
            variant="outlined"
            onChange = {(e) =>{setNewExpenseName(e.target.value)}}
            value = {newExpenseName}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="expense-value"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
            value = {newExpenseValue}
            onChange = {(e) => {setNewExpenseValue(e.target.value)}}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>

)
}


export default AddExpenseForm