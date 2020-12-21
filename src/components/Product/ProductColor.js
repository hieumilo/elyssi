import PropTypes from 'prop-types'

function ProductColor({colors, selected, onSelectedColor}) {
  return (
    <div className="flex justify-between pb-4">
      <div className="w-1/3 sm:w-1/5">
        <p className="font-hkregular text-secondary">Color</p>
      </div>
      <div className="w-2/3 sm:w-5/6 flex items-center">
        {colors.map((color, key) => (
          <div
            className="px-2 py-2 rounded-full mr-2"
            style={{ backgroundColor: color.label, borderRadius: color.value_index === selected ? '0' : '9999px' }}
            key={key}
            onClick={() => onSelectedColor(color.value_index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

ProductColor.propTypes = {
  colors: PropTypes.array,
  onSelectedColor: PropTypes.func,
}

export default ProductColor
