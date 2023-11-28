import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../app/store'
import {
  selectAllItems,
  selectItem
} from "./itemsSlice"
import { useNavigate } from "react-router-dom";


import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Item } from "./item.model";

export const ItemsGrid = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const itemsStatus = useSelector((state: RootState) => state.items.status);
  const navigate = useNavigate();

  let itemsGrid

  const activateItem = (item: Item) => {
    dispatch(selectItem(item))
    navigate(`/${item.id}/${item.key}`)
  }

  if (itemsStatus === 'succeded' && items && items.length >= 0) {
    itemsGrid = items.map((item) => (
      <Grid key={item.index} item xs={6} sm={4} m={3} lg={2} >
        <IconButton onClick={() => activateItem(item)}>
          <Card
            sx={{ 
              height: '30vh', 
              width: '30vh',
              border: item.active ? 'solid red' : ""
            }}
          >
            <CardMedia
              component='img'
              sx={{ height: '13vh' }}
              image={item.image}
              title={item.key}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              {item.description && <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>}
            </CardContent>
          </Card>
        </IconButton>
      </Grid>
    ));
  }

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"  
    >
      { itemsGrid }
    </Grid>
  );
};
