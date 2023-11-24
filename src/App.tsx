import { Routes, Route } from "react-router-dom";
import { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchAPI } from './features/items/itemsSlice.tsx'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Items } from './features/items/items';
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
  const dispatch = useDispatch();
  const itemsStatus = useSelector((state: RootState) => state.items.status);
  
  if (itemsStatus === ("idle" || "failed")) {
    dispatch(fetchAPI())
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppTitle>Unith test</AppTitle>
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
            {itemsStatus === 'failed' && <AppInfo>Failed loading items</AppInfo>}
            <Routes>
              <Route path="/" element={<Items />} />
              <Route path="/:id/:key" element={<ItemDetails />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
