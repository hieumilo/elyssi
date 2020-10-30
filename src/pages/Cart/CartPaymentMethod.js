import CustomerOrder from '../../components/Cart/CustomerOrder'
function CartPaymentMethod() {
    return (

        <div className="container border-t border-grey-dark">
            <div className="flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24">

                <div className="lg:w-2/3 lg:pr-16 xl:pr-20">
                    <div className="flex flex-wrap items-center">


                        <a href="/cart/" className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
            font-hkregular 
        ">Cart</a>
                        <i className="bx bx-chevron-right text-sm text-secondary px-2"></i>


                        <a href="/cart/customer-info" className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
            font-hkregular 
        ">Customer information</a>
                        <i className="bx bx-chevron-right text-sm text-secondary px-2"></i>


                        <a href="/cart/shipping-method" className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
            font-hkregular 
        ">Shipping method</a>
                        <i className="bx bx-chevron-right text-sm text-secondary px-2"></i>


                        <a href="/cart/payment-method" className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
             font-hkbold 
        ">Payment method</a>
                        <i className="bx bx-chevron-right text-sm text-transparent px-2"></i>

                    </div>

                    <div className="mt-10 md:mt-12 border border-grey-darker rounded px-4 sm:px-5 py-3">
                        <div className="flex pb-2 border-b border-grey-dark">
                            <div className="w-1/5 ">
                                <p className="font-hkregular text-secondary">Contact</p>
                            </div>
                            <div className="w-3/5">
                                <p className="font-hkregular text-secondary">
                                    test@gmail.com</p>
                            </div>
                            <div className="w-1/5 text-right">
                                <a href="/cart/customer-info" className="font-hkregular text-primary underline">Change</a>
                            </div>
                        </div>
                        <div className="flex pt-2 pb-2 border-b border-grey-dark">
                            <div className="w-1/5 ">
                                <p className="font-hkregular text-secondary">Ship to</p>
                            </div>
                            <div className="w-3/5">
                                <p className="font-hkregular text-secondary">
                                    10813 NW 30th St Suite 115 Doral, Florida 33192 USA</p>
                            </div>
                            <div className="w-1/5 text-right">
                                <a href="/cart/customer-info" className="font-hkregular text-primary underline">Change</a>
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div className="w-1/5 ">
                                <p className="font-hkregular text-secondary">Method</p>
                            </div>
                            <p className="font-hkregular text-secondary">International
                        Shipping · $20.00</p>
                        </div>
                    </div>
                    <div className="pt-8 md:pt-10">
                        <h1 className="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">
                            Payment method
                </h1>
                        <p className="font-hkregular text-secondary pt-2">All transactions
                    are secure and encrypted</p>
                        <div className="mt-6 border border-grey-darker rounded px-4 sm:px-5 py-3">
                            <p className="font-hkbold text-secondary text-sm">Credit card
                    </p>
                            <div className="pt-4">
                                <div className="flex flex-wrap justify-between -mx-3 mb-4">
                                    <div className="w-full md:w-1/2 mb-4 px-3 md:mb-0">
                                        <label htmlFor="card" className="h-0 overflow-hidden w-0 block relative">Card
                                    Number</label>
                                        <input type="number" placeholder="Card Number" className="form-input" id="card" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label htmlFor="name" className="h-0 overflow-hidden w-0 block relative">Name
                                    on Card</label>
                                        <input type="text" placeholder="Name on Card" className="form-input" id="name" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between -mx-3 mb-4">
                                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                        <label htmlFor="expiration_date" className="h-0 overflow-hidden w-0 block relative">Expiration
                                    Date</label>
                                        <input type="number" placeholder="Expiration date (MM/YY)" className="form-input" id="expiration_date" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label htmlFor="code" className="h-0 overflow-hidden w-0 block relative">Security
                                    Code</label>
                                        <input type="number" placeholder="Security code" className="form-input" id="code" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10">
                        <h4 className="font-hkmedium text-secondary text-xl md:text-2xl text-center sm:text-left">
                            Billing address
                </h4>
                        <div className="mt-6 border border-grey-darker rounded px-4 sm:px-5 pt-3">
                            <div className="border-b border-grey-dark">
                                <div className="flex items-center mb-2">
                                    <label htmlFor="shipping_same" className="h-0 overflow-hidden w-0">Same as
                                shipping address</label>
                                    <input type="checkbox" className="form-checkbox" id="shipping_same" />
                                    <p className="pl-3 font-hkregular text-secondary">Same
                            as shipping address</p>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="flex items-center mb-2">
                                    <label htmlFor="add_billing_address" className="h-0 overflow-hidden w-0">Add new
                                billing address</label>
                                    <input type="checkbox" className="form-checkbox" id="add_billing_address" />
                                    <p className="pl-3 font-hkregular text-secondary">Add
                                new billing address</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12">
                        <a href="/cart" className="flex items-center mb-3 sm:mb-0 font-hkregular group-hover:font-hkbold text-sm text-secondary hover:text-primary group transition-colors">
                            <i className="bx bx-chevron-left text-secondary group-hover:text-primary pr-2 text-xl transition-colors"></i>
                    Return to Cart
                </a>
                        <a href="/" className="btn btn-primary">
                            Pay Now
                </a>
                    </div>
                </div>
                <CustomerOrder />
            </div>
        </div>

    );
}

CartPaymentMethod.propTypes = {

}

export default CartPaymentMethod
