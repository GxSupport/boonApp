import { configureStore } from '@reduxjs/toolkit'
import UserSlicer from './Slicers/UserSlicer'
import ProductSlicer from './Slicers/Products'
import CardSlicer from './Slicers/CardSlicer'

export const Store = configureStore({
  reducer: {
    UserSlicer,
    ProductSlicer,
    CardSlicer
  },
})