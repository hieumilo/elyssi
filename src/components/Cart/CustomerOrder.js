import { useState, useEffect } from 'react'
import CustomerOrderItem from "./CustomerOrderItem";

function CustomerOrder(){
  const [product, setProduct] = useState([])

  async function getProductDetail() {
    const data = await fetch(`/api/cart`)
      .then(res => res.json());
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail();
  }, []);
  
  return (
  <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 bg-grey-light mt-8 lg:mt-0">
    <div className="p-8">
      <h4 className="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">
      Your Order</h4>
      <p className="font-hkbold text-secondary uppercase text-center sm:text-left">
      PRODUCTS</p>
      <div className="mt-5 mb-8">
        {product && product.map((product, key) => <CustomerOrderItem product={product} key={key}/>)}
      </div>
      <p className="font-hkbold text-secondary pt-1 pb-2">Cart Totals</p>
      <div className="border-b border-grey-darker pb-1 flex justify-between">
        <span className="font-hkregular text-secondary">Subtotal</span>
        <span className="font-hkregular text-secondary">$236</span>
      </div>
      <div className="border-b border-grey-darker pt-2 pb-1 flex justify-between">
        <span className="font-hkregular text-secondary">Coupon apply</span>
        <span className="font-hkregular text-secondary">-$36</span>
      </div>
      <div className="pt-3 flex justify-between">
        <span className="font-hkbold text-secondary">Total</span>
        <span className="font-hkbold text-secondary">$200</span>
      </div>
    </div>
  </div>
)}

CustomerOrder.defaultProps = {
}

CustomerOrder.propTypes = {
};

export default CustomerOrder
