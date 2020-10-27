import React from 'react';

import cta from './../../assets/img/bg-cta.png'

const Subscribe = () => (
  <div className="container mb-28">
    <div className="bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${cta})`}}>
      <div className="py-16 md:py-20 text-center">
        <h3 className="font-butlerregular text-white text-3xl sm:text-4xl tracking-wide">
          Let's keep in touch
        </h3>
        <p className="font-hkregular text-white text-lg sm:text-xl pt-3 px-6">
          Join our list and save 15% off your first order.
        </p>
        <form className="pt-10 sm:pt-12">
          <div className="w-5/6 sm:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto flex flex-col sm:flex-row justify-center items-center">
            <label for="cta_email" className="block relative h-0 w-0 overflow-hidden">Email</label>
            <input type="email" name="cta_email" id="cta_email" placeholder="ENTER YOUR EMAIL" className="form-input bg-transparent text-sm text-white border-white uppercase" />
            <button type="button" className="btn btn-primary sm:ml-5 mt-4 sm:mt-0 w-full sm:w-auto" aria-label="Subscribe button">SUBSCRIBE</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Subscribe;
