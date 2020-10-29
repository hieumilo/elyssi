import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from './../Menu/Menu'
import imgLogo from './../../assets/img/logo-elyssi.svg'
import imgSearch from './../../assets/img/icons/icon-search.svg'
import imgSearchHover from './../../assets/img/icons/icon-search-hover.svg'
import imgHeart from './../../assets/img/icons/icon-heart.svg'
import imgHeartHover from './../../assets/img/icons/icon-heart-hover.svg'
import imgUser from './../../assets/img/icons/icon-user.svg'
import imgUserHover from './../../assets/img/icons/icon-user-hover.svg'
import imgCart from './../../assets/img/icons/icon-cart.svg'
import imgCartHover from './../../assets/img/icons/icon-cart-hover.svg'

// const menus = [
//   {url: '#', name: 'Man', childrens: [
//     {url: '/collection-grid', name: 'Boots'},
//     {url: '/collection-grid', name: 'Blutcher Boot'},
//     {url: '/collection-grid', name: 'Chelsea Boot'},
//     {url: '/collection-grid', name: 'Chukka Boot'},
//     {url: '/collection-grid', name: 'Dress Boot'},
//     {url: '/collection-grid', name: 'Work Boot'},
//   ]},
//   {url: '#', name: 'Woman', childrens: [
//     {url: '/collection-grid', name: 'Accessories'},
//     {url: '/collection-grid', name: 'Belts'},
//     {url: '/collection-grid', name: 'Caps'},
//     {url: '/collection-grid', name: 'Laces'},
//     {url: '/collection-grid', name: 'Socks'},
//   ]},
//   {url: '#', name: 'Kids', childrens: [
//     {url: '/collection-grid', name: 'Shoes'},
//     {url: '/collection-grid', name: 'Derby Shoes'},
//     {url: '/collection-grid', name: 'Belts'},
//     {url: '/collection-grid', name: 'Caps'},
//     {url: '/collection-grid', name: 'Laces'},
//     {url: '/collection-grid', name: 'Socks'},
//   ]},
// ]

function Header() {

  const [menus, setMenus] = useState([])

  async function getCategories() {
    const data = await fetch("/api/categories")
      .then(res => res.json());
    setMenus(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container py-10 relative">
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <div className="flex items-center">
            <a
              href="/"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 mr-8 group">
              <img
                src={imgSearch}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon search"
              />
              <img
                src={imgSearchHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon search hover"
              />
            </a>
            <a
              href="/account/wishlist/"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
              <img
                src={imgHeart}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon heart"
              />
              <img
                src={imgHeartHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon heart hover"
              />
            </a>
          </div>
        </div>
        <Link to="/">
          <img src={imgLogo} className="w-48 h-auto" alt="logo" />
        </Link>
        <div className="hidden lg:block">
          <div className="flex items-center">
            <a
              href="/account/dashboard"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
              <img
                src={imgUser}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon user"
              />
              <img
                src={imgUserHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon user hover"
              />
            </a>
            <a
              href="/cart"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 ml-8 group">
              <img
                src={imgCart}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon cart"
              />
              <img
                src={imgCartHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon cart hover"
              />
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <i className="bx bx-menu text-primary text-3xl"></i>
        </div>
      </div>
      <Menu menus={menus}/>
    </div>
  );
}

export default Header;
