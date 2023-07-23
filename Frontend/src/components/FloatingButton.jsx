import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FloatingButton = () => {
  return (
    <Box sx={{position: 'fixed', bottom: '15%', right:'3%'} }>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Box>
      )
      }

export default FloatingButton
