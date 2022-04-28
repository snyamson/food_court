import { Store } from 'pullstate';

export const AppStore = new Store({
  mainDish: [],
  desserts: [],
  drinks: [],
  starters: [],
  pizza: [],
  foodProduct: [],
  pizzaPriceList: [],
  foodCategory: [],
  error: '',
  loading: true,
});
