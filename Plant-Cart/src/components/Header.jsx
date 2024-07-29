import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Home, Store } from '@mui/icons-material';
import { Badge } from '@mui/material';

function Header() {
  const totalItems = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="bg-gradient-to-r from-green-400 to-green-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">Plant Cart</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-black">
            <Home />
          </Link>
          <Link to="/products" className="text-black">
            <Store />
          </Link>
          <Link to="/cart" className="text-black">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
