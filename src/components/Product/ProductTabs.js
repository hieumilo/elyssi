import { useState } from 'react'
import PropTypes from 'prop-types'

function ProductTabs({description, additionalInformation, reviews}) {
  const [activeTab, setActiveTab] = useState('description')
  const spanClassName = 'tab-item bg-white hover:bg-grey-light px-10 py-5 text-center sm:text-left border-t-2 border-transparent font-hkbold text-secondary cursor-pointer transition-colors'
  return (
    <div className="pb-16 sm:pb-20 md:pb-24">
      <div className="tabs flex flex-col sm:flex-row" role="tablist">
        <span
          className={`${spanClassName} ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </span>
        <span
          className={`${spanClassName} ${activeTab === 'additionalInformation' ? 'active' : ''}`}
          onClick={() => setActiveTab('additionalInformation')}
        >
          Additional Information
        </span>
        <span
          className={`${spanClassName} ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </span>
      </div>
      <div className="tab-content relative">
        <div
          className={`tab-pane bg-grey-light py-10 md:py-16 transition-opacity ${activeTab === 'description' ? 'active' : ''}`}
          role="tabpanel">
          <div className="w-5/6 mx-auto text-center sm:text-left">
            <div dangerouslySetInnerHTML={{ __html: description?.html }} className="font-hkregular text-secondary text-base">
            </div>
          </div>
        </div>
        <div
          className={`tab-pane bg-grey-light py-10 md:py-16 transition-opacity ${activeTab === 'additionalInformation' ? 'active' : ''}`}
          role="tabpanel">
          <div className="w-5/6 mx-auto">
            <div className="font-hkregular text-secondary text-base">
              <div dangerouslySetInnerHTML={{__html: additionalInformation}} />
            </div>
          </div>
        </div>
        <div
          className={`tab-pane bg-grey-light py-10 md:py-16 transition-opacity ${activeTab === 'reviews' ? 'active' : ''}`}
          role="tabpanel">
          {reviews.map((review, key) => (
            <div className="w-5/6 mx-auto border-b border-grey-darker pb-8 text-center sm:text-left" key={key}>
              <div className="flex justify-center sm:justify-start items-center pt-3 xl:pt-5">
                {[...Array(+review.ratings_breakdown[0].value).keys()].map((index, key) => (
                  <i className="bx bxs-star text-primary" key={key}></i>
                ))}
              </div>
              <p className="font-hkbold text-secondary text-lg pt-3">
                {review.summary}
              </p>
              <p className="font-hkregular text-secondary pt-4 lg:w-5/6 xl:w-2/3">
                I loooveeeee this product!!! It feels so soft and smells like real leather!!! I ordered this fancy backpack looking for something that can be used at work and, at the same time, after work; and I found it. Honestly.. Amazing!!</p>
              <div className="flex justify-center sm:justify-start items-center pt-3">
                <p className="font-hkregular text-grey-darkest text-sm">
                  <span>By</span> {review.nickname}</p>
                <span className="font-hkregular text-grey-darkest text-sm block px-4">.</span>
                <p className="font-hkregular text-grey-darkest text-sm">
                  6 days ago</p>
              </div>
            </div>
          ))}
          <form className="w-5/6 mx-auto">
            <div className="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
              <div className="sm:w-1/2 px-5">
                <label className="font-hkregular text-secondary text-sm block mb-2" htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your Name" className="form-input" id="name" />
              </div>
              <div className="sm:w-1/2 px-5 pt-10 sm:pt-0">
                <label className="font-hkregular text-secondary text-sm block mb-2" htmlFor="email">Email
                  address</label>
                <input type="email" placeholder="Enter your email" className="form-input " id="email" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between pt-10 -mx-5">
              <div className="sm:w-1/2 px-5">
                <label className="font-hkregular text-secondary text-sm block mb-2" htmlFor="review_title">Review
                  Title</label>
                <input type="text" placeholder="Enter your review title" className="form-input " id="review_title" />
              </div>
              <div className="sm:w-1/2 px-5 pt-10 sm:pt-0">
                <label className="font-hkregular text-secondary text-sm block mb-2">Rating</label>
                <div className="flex pt-4">
                  <i className="bx bxs-star text-grey-darker text-xl pr-1"></i>
                  <i className="bx bxs-star text-grey-darker text-xl pr-1"></i>
                  <i className="bx bxs-star text-grey-darker text-xl pr-1"></i>
                  <i className="bx bxs-star text-grey-darker text-xl pr-1"></i>
                  <i className="bx bxs-star text-grey-darker text-xl"></i>
                </div>
              </div>
            </div>
            <div className="sm:w-12/25 pt-10">
              <label htmlFor="message" className="font-hkregular text-secondary text-sm block mb-2">
                Review Message
              </label>
              <textarea placeholder="Give your review tittle" className="form-textarea" id="message"></textarea>
            </div>
          </form>
          <div className="w-5/6 mx-auto pt-8 md:pt-10 pb-4 text-center sm:text-left">
            <a href="/" className="btn btn-primary">
              Submit Review
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductTabs.propTypes = {
  description: PropTypes.object,
  additionalInformation: PropTypes.string,
  reviews: PropTypes.array
}

export default ProductTabs
