import { Routes, Route } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector } from "react-redux";
import { fetchAPI } from './features/items/itemsSlice.tsx'
import Box from '@mui/material/Box'
import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { store } from './app/store.tsx'
import { ItemsGrid } from './features/items/itemsGrid.tsx';
import { ItemDetails } from "./features/items/itemDetails";

const AppTitle = styled('div')(({ theme }) => ({
  ...theme.typography.h1,
  textAlign: 'center'
}))

const AppInfo = styled('div')(({ theme }) => ({
  ...theme.typography.h2,
  textAlign: 'center'
}))

function App() {
  const itemsStatus = useSelector((state: RootState) => state.items.status)
  const errorMessage = useSelector((state:RootState) => state.items.errorMessage)

  if (itemsStatus === ("idle" || "failed")) {
    store.dispatch(fetchAPI())
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppTitle>Unith challenge</AppTitle>
        <Grid
          container
          spacing={2}
          direction="column"
          alignContent="center"
          justifyContent="center"
          alignItems="center"  
        >
          <Grid
            item xs={12}
            justifyContent="center"
          >
            {itemsStatus === ('loading' || 'idle') && <AppInfo>Loading...</AppInfo>}
            {itemsStatus === 'failed' && 
              <>
                <AppInfo>{errorMessage}</AppInfo>
                <Box textAlign='center'>
                  <Button variant='contained' onClick={async () => { store.dispatch(fetchAPI()) }}>ReLoad Items</Button>
                </Box>
              </>
            }
            <Routes>
              <Route path="/" element={<ItemsGrid />} />
              <Route path="/:id/:key" element={<ItemDetails />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
