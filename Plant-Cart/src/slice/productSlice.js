import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: 'Fiddle_Leaf_Fig', price: 25, category: 'Indoor' },
    { id: 2, name: 'Snake_Plant', price: 15, category: 'Indoor' },
    { id: 3, name: 'Spider_Plant', price: 10, category: 'Indoor' },
    { id: 4, name: 'Aloe_Vera', price: 20, category: 'Succulents' },
    { id: 5, name: 'Cactus', price: 30, category: 'Succulents' },
    { id: 6, name: 'Bamboo_Palm', price: 35, category: 'Indoor' },
  ],
  reducers: {},
});

export default productsSlice.reducer;
