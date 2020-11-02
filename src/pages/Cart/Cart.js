import { useState, useEffect } from 'react'
import CartList from './../../components/Cart/CartList'
import CartTotal from './../../components/Cart/CartTotal'
import CartBreadCrumb from './../../components/Cart/CartBreadCrumb'
import { Link } from "react-router-dom";
function Cart() {


    const [product, setProduct] = useState([])

    async function getProductDetail() {
        const data = await fetch(`/api/cart`)
            .then(res => res.json());
        console.log(data, 'product');
        setProduct(data)
    }

    useEffect(() => {
        getProductDetail();
    }, []);

    return (

        <div>
            <div className="container border-t border-grey-dark pt-10 sm:pt-12">

                <CartBreadCrumb />

                <div className="flex flex-col-reverse lg:flex-row justify-between pb-16 sm:pb-20 lg:pb-24">
                    <div className="lg:w-3/5">
                        <div className="pt-10">
                            <h1 className="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">Cart Items</h1>
                            <CartList products={product} />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 sm:pt-12">
                            <a href="/collection-list" className="btn btn-outline">
                                Continue Shopping
                            </a>
                            <Link to="/" className="btn btn-primary mt-5 sm:mt-0">Update Cart</Link>

                        </div>

                    </div>
                    
                    <CartTotal />

                </div>

            </div>
        </div>

    );
}

Cart.propTypes = {

}

export default Cart
