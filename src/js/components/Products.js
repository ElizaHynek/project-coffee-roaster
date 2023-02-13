import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {  
  constructor(id, data){
    const thisProduct = this;
  
    thisProduct.id = id;
    thisProduct.data = data;
  
    thisProduct.render();
  }
  
  render(){   
    const thisProduct = this;
  
    //generate HTML based on template
    const generatedHTML = templates.products(thisProduct.data);
  
    //create element DOM using utils.createElementFromHTML
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
  
    //find product container
    const productsWrapper = document.querySelector(select.containerOf.productsWrapper);
  
    //add elemnt to menu
    productsWrapper.appendChild(thisProduct.element);
  }
}

export default Product;