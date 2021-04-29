/* eslint-disable react/jsx-no-undef */
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
           <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center">All right reserve 2021</footer>
    </div>
  );
}

export default App;
