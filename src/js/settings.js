export const select = {
  templateOf: {
    products: '#template-products',
  },
  containerOf: {
    productsWrapper: '#products-wrapper',
  }
};

export const classNames = {
  products: {
    wrapperActive: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};