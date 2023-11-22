import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Items } from './features/items/items';
import { styled } from '@mui/material/styles';

const AppTitle = styled('div')(({ theme }) => ({
  ...theme.typography.h1,
  textAlign: 'center',
}))

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppTitle>Unith test</AppTitle>
          <Items/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
