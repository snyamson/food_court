import { Store } from 'pullstate';
import jsCookie from 'js-cookie';

export const AppStore = new Store({
  mainDish: [],
  desserts: [],
  drinks: [],
  starters: [],
  pizza: [],
  foodProduct: [],
  pizzaPriceList: [],
  foodCategory: [],
  cart: {
    cartItems: jsCookie.get('cartItems')
      ? JSON.parse(jsCookie.get('cartItems'))
      : [],
  },
  error: '',
  loading: true,
});
