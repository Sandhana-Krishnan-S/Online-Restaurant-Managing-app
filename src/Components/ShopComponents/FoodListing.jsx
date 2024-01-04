import React from 'react'
import '../../Styles/FoodGrid.css'
import { list } from '../Data/RestrauntData';

export default function FoodListing() {

  const productsPerRow = 3;

  const rows = [];
  for (let i = 0; i < list.length; i += productsPerRow) {
    rows.push(list.slice(i, i + productsPerRow));
  }
  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="product-row">
          {row.map((product) => (
            <div key={product.id} className="product-card">
              <div className='cardFlex'>
                <div>
                  <img src={product.image} alt="loading..." srcset="" className='img-order'/>
                </div>
                <div className='order-details'>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <span>{product.price}</span>
                  <div>
                    <button>Add to Cart</button>
                    <button>Order now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
