import PropTypes from 'prop-types'
import { VIEW } from './../../utils/constant'

function ProductFilter({setView}) {
  return (
    <div className="py-10 flex flex-col sm:flex-row justify-between">
      <div className="flex items-center justify-center sm:justify-start">
        <i className="bx bxs-filter-alt text-primary text-xl"></i>
        <p className="font-hkregular text-secondary md:text-lg px-2 leading-none block">
          Filter
        </p>
        <div className="flex items-center border border-grey-darker p-2 rounded">
          <button type="button" onClick={() => setView(VIEW[0])}>
            <i className="bx bx-menu text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i>
          </button>
          <div className="w-px h-4 mx-2 bg-grey-darker"></div>
          <button type="button" onClick={() => setView(VIEW[1])}>
            <i className="bx bxs-grid text-grey-darker hover:text-secondary-light text-xl leading-none block transition-colors"></i>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-end mt-6 sm:mt-0 w-76">
        <p className="font-hkregular text-secondary md:text-lg mr-2 -mt-2">Sort by:
        </p>
        <select className="w-2/3 form-select">
          <option value="0">Best Match</option>
          <option value="1">Price: Low - High</option>
          <option value="2">Price: High - Low</option>
        </select>
      </div>
    </div>
  )
}

ProductFilter.propTypes = {
  setView: PropTypes.func
}

export default ProductFilter
