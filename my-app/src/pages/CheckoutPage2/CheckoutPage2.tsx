
import { useEffect, useState } from 'react';
import './CheckoutPage2.css'
import { CartItem } from '../../types/types';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import kookaburraImage from '../../kookaburra-bat.jpg'; // Make sure the path is correct
import grayNicollsImage from '../../gray-nicolls-bat.jpg';
import sgImage from '../../sg-bat.jpg';
import gmImage from '../../gm-bat.jpg';
import CartList from '../../components/CartList/CartList';
/* Here is array for items we need to add */ 
const products = [
  { id: 1, name: "Kookaburra Kahuna", price: 2599.00, pictureUrl: kookaburraImage },
  { id: 2, name: "Gray-Nicolls Giant", price: 2799.00, pictureUrl: grayNicollsImage },
  { id: 3, name: "SG Sunny Gold", price: 3199.00, pictureUrl: sgImage },
  { id: 4, name: "GM Diamond", price: 2999.00, pictureUrl: gmImage },
];
const initialCartItems: CartItem[] = products.map(product => ({
  product: product,
  quantity: 0,
}));
// 
/**initial shopping cart with all products set to have zero quantity. */
const CheckoutPage2 = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  // const [totalSum , setTotalSum] = useState<number>(0)
  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.product.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
      ),
    );
  };


  // const totalPrice = cartItems.reduce((total, item) => {
  //   return total + item.quantity * item.product.price;
  // }, 0)

  let total = 0 
  let discount = 0
  cartItems.map((item)=>{
    total += item.quantity * item.product.price 
  })

  if(total > 300){
    discount = total * 0.1
  }
  return (
    <div className='checkout-page-two-cont'  >
      <div className="left-cont">
        <h3>Velkommen til din indkøbskurv</h3>
        {
          products.length > 0 ? <CartList items={cartItems} onQuantityChange={handleQuantityChange} /> : <div className='' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "100px" }} >
            <ShoppingCartOutlinedIcon style={{ scale: "6" }} />
            <p style={{ marginTop: "100px" }} >Der ser ud til.at din kurv er tom start ved at din Shopping ved at tilføje varer til kurven.</p>
          </div>
        }
      </div>
      <div className="right-cont">
        <h4 style={{ textAlign: "center" }} >Oversigt</h4>
        <hr />
        <div style={{ display: 'flex', justifyContent: "space-between" }} >
          <p>Sum</p>
          <p>{total - discount} kr.</p>
        </div>
        {
          discount > 0 ? <p style={{textAlign:"right" , color:"green"}} >10 % discount on Total </p> : ""
        }
        
        <div style={{ display: "flex", justifyContent: "space-between" }}  >
          <p>Levering</p>
          <p>40 kr.</p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <p>Total</p>
          <p>{total + 40}. kr.</p>
        </div>
        <hr />
        <p style={{ textAlign: "center" }} >Du kan indtaste, værdikuponer og vælge din leveringsmuligheder ved kassen </p>
        <button style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", background: "#80808070", color: "black", borderRadius: "0px" }} >Ga til kassen</button>
        <img src="/images/mode of payment.png" alt="" style={{ width:"100%" }} />
      </div>

    </div>
  )
}

export default CheckoutPage2