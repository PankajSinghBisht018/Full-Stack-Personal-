import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slice/cartSlice';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import snake_plant from '../images/snakeplant.jpg';
import spider_plant from '../images/spiderplant.jpg';
import cactus from '../images/cactus.jpg';
import Fiddle_Leaf_Fig from '../images/fiddle.jpg';
import bamboo_palm from '../images/bambo.jpg';
import aloe_vera from '../images/alovera.jpg';

const imageForProduct = {
  'fiddle_leaf_fig': Fiddle_Leaf_Fig,
  'snake_plant': snake_plant,
  'spider_plant': spider_plant,
  'aloe_vera': aloe_vera,
  'cactus': cactus,
  'bamboo_palm': bamboo_palm,
};

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return (
    <div className="p-8 bg-green-50">
      <h2 className="text-3xl mb-6 text-center">Product Listing</h2>
      <Grid container spacing={4}>
        {products.map(product => {
          const imageKey = product.name.toLowerCase().replace(/ /g, '_');
          const image = imageForProduct[imageKey];

          return (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="flex flex-col h-full">
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={image} 
                  className="object-cover"
                  style={{ width: '100%', height: '200px' }} 
                />
                <CardContent className="flex-1">
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="inherit"
                    variant="contained"
                    onClick={() => dispatch(addToCart(product))}
                    style={{ backgroundColor: '#004d00', color: 'white' }}
                    startIcon={<AddShoppingCart />}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProductList;
