import React from 'react'
import Cart from './Cart'


function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      brand: "SoundMax",
      price: 120,
      rating: 4.8,
      inStock: true,
      color: "black"
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      brand: "KeyCraft",
      price: 95,
      rating: 4.6,
      inStock: true,
      color: "white"
    },
    {
      id: 3,
      name: "Smart Watch",
      brand: "PulseFit",
      price: 180,
      rating: 4.3,
      inStock: false,
      color: "silver"
    },
    {
      id: 4,
      name: "USB-C Hub",
      brand: "PortPro",
      price: 45,
      rating: 4.7,
      inStock: true,
      color: "gray"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      brand: "AimX",
      price: 60,
      rating: 4.9,
      inStock: true,
      color: "red"
    }
  ];

  return (
    <div>
      <Cart alldata={products} />

    </div>
  )
}

export default App