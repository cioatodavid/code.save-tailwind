import React from 'react';
import { Link } from 'react-router-dom';

import { HiFolder, HiChartSquareBar, HiChevronDoubleRight, HiChevronDoubleLeft, HiMenu, HiAdjustments, HiLogout } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menus = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: HiChartSquareBar,
      loc: 'main'
    },
    {
      name: 'Collections',
      path: '/collections',
      icon: HiFolder,
      loc: 'main'
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: HiAdjustments,
      loc: 'main'
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: HiLogout,
      loc: 'footer'
    },
  ]

  return (
    <section className='flex gap-6'>
      <div className={`bg-gray-800 min-h-screen text-gray-50 ${isOpen ? 'w-44' : 'w-16'} duration-200`}>
        <div  onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex justify-start rounded items-center mx-2  p-3">
          {React.createElement(!isOpen ? HiChevronDoubleRight:HiChevronDoubleLeft, { size: '25' })}
        </div>
        <div className='mt-4 flex flex-col gap-3 relative'>
          {
            menus?.map((menu, index) => (
              <Link to={menu?.path} key={index} className={`group flex mx-2 rounded items-center text-sm gap-5 font-medium  hover:bg-gray-700 hover:shadow-2xl duration-200 ${isOpen ? 'p-3' : 'p-3'}`}>
                <div>{React.createElement(menu?.icon, { size: '25' })}</div>
                <h2 className={`whitespace-pre duration-200 ${!isOpen && 'opacity-0 translate-x-5 overflow-hidden'}`}>{menu?.name}</h2>
                <h2 className={`${isOpen ? 'hidden' : 'visible'} absolute z-50 overflow-hidden left-32 bg-gray-100 font-semibold whitespace-pre text-gray-900 rounded drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-200  group-hover:shadow-2xl group-hover:w-fit`}>
                  {menu?.name}
                </h2>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
