import React from 'react';
import data from './data'

function App() {
  return (
    <div className="container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img
                className="medium"
                src={product.image}
                 alt={product.name}
                  />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                {/* {product.rating} */}
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="price">{product.price}$</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">All right reserve 2021</footer>
    </div>
  );
}

export default App;
