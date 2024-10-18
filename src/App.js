
import { Box, Button, CircularProgress, Skeleton, Slider, TextField } from '@mui/material';
import './App.css';
import SimpleSnackbar from './components/snackbar';
import AccordionUsage from './components/accordion';
import ButtonAppBar from './components/app-bar';
import TemporaryDrawer from './components/drawer';

function App() {
  return (
    <div>
      <div>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        <Button variant="contained" color="error">
          DELETE
        </Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>

      <div>
      <CircularProgress />
      </div>
      <div>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
      </div>
      <div>
        <SimpleSnackbar />
      </div>
      <div>
        <AccordionUsage />
      </div>
      <div>
        <ButtonAppBar />
      </div>
      <div>
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default App;
