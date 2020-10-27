const menus = [
  {url: '#', name: 'Man', childrens: [
    {url: '/collection-grid', name: 'Boots'},
    {url: '/collection-grid', name: 'Blutcher Boot'},
    {url: '/collection-grid', name: 'Chelsea Boot'},
    {url: '/collection-grid', name: 'Chukka Boot'},
    {url: '/collection-grid', name: 'Dress Boot'},
    {url: '/collection-grid', name: 'Work Boot'},
  ]},
  {url: '#', name: 'Woman', childrens: [
    {url: '/collection-grid', name: 'Accessories'},
    {url: '/collection-grid', name: 'Belts'},
    {url: '/collection-grid', name: 'Caps'},
    {url: '/collection-grid', name: 'Laces'},
    {url: '/collection-grid', name: 'Socks'},
  ]},
  {url: '#', name: 'Kids', childrens: [
    {url: '/collection-grid', name: 'Shoes'},
    {url: '/collection-grid', name: 'Derby Shoes'},
    {url: '/collection-grid', name: 'Belts'},
    {url: '/collection-grid', name: 'Caps'},
    {url: '/collection-grid', name: 'Laces'},
    {url: '/collection-grid', name: 'Socks'},
  ]},
]

function Menu() {
  return (
    <div className="flex justify-center lg:pt-8">
      <ul className="list-reset flex items-center">
        <li className=" mr-10 hidden lg:block">
          <a href="/" className="block text-lg font-hkregular hover:font-hkbold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Home</a>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/about" className="block text-lg font-hkregular hover:font-hkbold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">About</a>
        </li>
        <li className="mr-10 hidden lg:block group">
          <div className="border-b-2 border-white transition-colors group-hover:border-primary flex items-center">
            <span className="cursor-pointer text-lg font-hkregular group-hover:font-hkbold text-secondary group-hover:text-primary px-2 transition-all">Collections</span>
            <i className="bx bx-chevron-down text-secondary group-hover:text-primary pl-2 px-2 transition-colors"></i>
          </div>
          <div className="pt-10 absolute mt-40 top-0 left-0 right-0 -z-1 group-hover:z-50 w-2/3 mx-auto">
            <div className="opacity-0 pointer-events-none  group-hover:opacity-100 group-hover:pointer-events-auto transition-all flex bg-white shadow-lg p-8 rounded-b relative ">
              {menus.map((menu, key) => (
                <div className="flex-1 relative z-20" key={key}>
                  <h4 className="font-hkbold text-base text-secondary mb-2">
                    {menu.name}
                  </h4>
                  {(menu.childrens || []).length > 0 && <ul>
                    {menu.childrens.map((chilMenu, childKey) => (
                      <li key={`${key}-${childKey}`}>
                        <a
                          href={chilMenu.url}
                          className="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">
                          {chilMenu.name}
                        </a>
                      </li>
                    ))}
                  </ul>}
                </div>
              ))}
              <div className="flex-1">
                <div className="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0" style={{backgroundImage: 'url(https://source.unsplash.com/1000x640/?enu)'}}>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/blog" className="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Blog</a>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/contact#faq" className="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">FAQ</a>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/contact" className="block text-lg font-hkregular hover:font-hkbold   transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
