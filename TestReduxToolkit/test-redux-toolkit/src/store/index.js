import {configureStore} from '@reduxjs/toolkit'
import nameSlice from './nameSlice'

const store = configureStore({reducer: {list: nameSlice.reducer}})

export default store;