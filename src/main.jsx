import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FoodContext from './Context/FoodContext.jsx'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './Redux/store.js'




createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <FoodContext>
    <App />
  </FoodContext>
  </Provider>
)
