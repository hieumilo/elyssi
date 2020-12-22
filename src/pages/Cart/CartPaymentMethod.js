import CustomerOrder from '../../components/Cart/CustomerOrder'
import CartBreadCrumb from './../../components/Cart/CartBreadCrumb'
import PaymentMethod from './../../components/Cart/PaymentMethod'

function CartPaymentMethod() {
  return (
    <div className="container border-t border-grey-dark">
      <div
        className="flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="lg:w-2/3 lg:pr-16 xl:pr-20">
          <CartBreadCrumb/>
          <PaymentMethod />
        </div>
        <CustomerOrder/>
      </div>
    </div>

  );
}

CartPaymentMethod.propTypes = {}

export default CartPaymentMethod
