import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../app/store'
import {
  selectAllItems,
  selectItem
} from "./itemsSlice"
import { useNavigate } from "react-router-dom";


import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles'
import { Item } from "./item";

const CardCustom = styled(Card)(() => ({}))

export const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const itemsStatus = useSelector((state: RootState) => state.items.status);
  const navigate = useNavigate();

  let itemsGrid

  const activateItem = (item: Item) => {
    dispatch(selectItem(item))
    navigate(`/${item.id}/${item.key}`)
  }

  if (itemsStatus=== 'succeded' && items && items.length >= 0) {
    itemsGrid = items.map((item) => (
      <Grid key={item.index} item xs={6} sm={4} m={3} lg={2} >
        <CardCustom sx={{ 
          height: '30vh', 
          width: '30vh',
          border: item.active ? 'solid red' : ""
        }}>
            <CardMedia
              component="img"
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
            <CardActions>
              <Button size="small" onClick={() => activateItem(item)}>Select</Button>
            </CardActions>
        </CardCustom>
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
        {itemsGrid}
      </Grid>
    );
};
