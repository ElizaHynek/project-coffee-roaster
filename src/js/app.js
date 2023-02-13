import { settings } from './settings.js';
import Product from './components/Products.js';

const app = {

  initProduct: function(){
    const thisApp = this;

    for (let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function() {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initProduct();
      });
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();