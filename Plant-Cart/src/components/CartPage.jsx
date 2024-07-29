import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeFromCart } from '../slice/cartSlice';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
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

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8 bg-green-50">
      <h2 className="text-3xl mb-6 text-center">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => {
          const imageKey = item.name.toLowerCase().replace(/ /g, '_');
          const image = imageForProduct[imageKey];

          return (
            <Card
              key={item.id}
              className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md"
            >
              <CardMedia
                component="img"
                alt={item.name}
                image={image} 
                className="w-32 h-32 object-cover rounded-md"
                style={{ width: '120px', height: '120px' }} 
              />
              <CardContent className="flex-1">
                <Typography variant="h6" className="font-bold">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price} x {item.quantity}
                </Typography>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => dispatch(increment(item))}
                    className="p-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <Add />
                  </button>
                  <button
                    onClick={() => dispatch(decrement(item))}
                    className="p-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <Remove />
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="p-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <Delete />
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Typography variant="h6" className="font-bold">
          Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </Typography>
        <Typography variant="h6" className="font-bold">
          Total Cost: ${totalCost.toFixed(2)}
        </Typography>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <Button
          variant="contained"
          className="bg-green-600 text-white hover:bg-green-700"
        >
          Checkout (Coming Soon)
        </Button>
        <Link to="/products">
          <button
            className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
