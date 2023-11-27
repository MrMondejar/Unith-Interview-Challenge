import { Button, Card, CardContent, CardMedia, Typography} from '@mui/material'
import Grid from '@mui/material/Grid'
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { selectItemById } from './itemsSlice';


export const ItemDetails = () => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id ?? "";

  const item = useAppSelector((state: RootState) => 
    selectItemById(state, id)
  );

  return (
    <>
      {item && <Grid
        alignContent="center"
        alignItems="center"  
        container
        direction="column"
        justifyContent="center"
        spacing={2}
      >
        <Grid
          item
          justifyContent="center"
          key={item.index}
          xs={12}
        >
          <Card sx={{ 
            height: '75vh', 
            width: '90vh',
          }}>
              <CardMedia
                component='img'
                sx={{ height: '34vh' }}
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
        </Grid>
        <Grid item>
          <div>
            <Button onClick={()=>navigate('/')}>Back To Items List</Button>
          </div>
        </Grid>
      </Grid>}
    </>
  )
}