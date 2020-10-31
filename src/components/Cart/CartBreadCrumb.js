import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const CartBreadCrumb = () => (
    <div className="flex flex-wrap items-center">
        <Link to="/cart/" className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
                        font-hkbold
                    ">Cart</Link>
        <i className="bx bx-chevron-right text-sm text-secondary px-2"></i>


        <Link to="/cart/customer-info"
           className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
                        font-hkregular
                    ">Customer information</Link>
        <i className="bx bx-chevron-right text-sm text-secondary px-2"></i>


        <Link to="/cart/shipping-method"
           className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
                        font-hkregular
                    ">Shipping method</Link>
        <i className="bx bx-chevron-right text-sm text-secondary px-2"></i>


        <Link to="/cart/payment-method"
           className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
                        font-hkregular
                    ">Payment method</Link>
        <i className="bx bx-chevron-right text-sm text-transparent px-2"></i>

    </div>
)

CartBreadCrumb.defaultProps = {}

CartBreadCrumb.propTypes = {};

export default CartBreadCrumb
