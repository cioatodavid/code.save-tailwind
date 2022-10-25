import React from 'react';
import { Link } from 'react-router-dom';

import { HiFolder, HiChartSquareBar, HiUser, HiMenu, HiAdjustments } from 'react-icons/hi';

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const menus = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: HiChartSquareBar,
      loc: 'header'
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
      name: 'User',
      path: '/user',
      icon: HiUser,
      loc: 'footer'
    },
  ]

  return (
    <section className='fixed gap-6'>
      <div className={`bg-gray-800 min-h-screen text-gray-50 ${isOpen ? ' w-screen md:w-64' : 'w-16'} duration-200`}>
        <div className={`py-3 flex  ${isOpen ? 'justify-start ml-5' : 'justify-center'}`}>
          <HiMenu size={26} className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className='mt-4 flex flex-col gap-3 relative'>
          {
            menus?.map((menu, index) => (
              <Link to={menu?.path} key={index} className={`group flex mx-2 rounded items-center text-sm gap-5 font-medium  hover:bg-gray-700 duration-200 ${isOpen ? 'p-3' : 'p-3'}`}>
                <div>{React.createElement(menu?.icon, { size: '25' })}</div>
                <h2 className={`whitespace-pre duration-200 ${!isOpen && 'opacity-0 translate-x-5 overflow-hidden'}`}>{menu?.name}</h2>
                <h2 className={`${isOpen ? 'hidden' : 'visible'} absolute overflow-hidden left-32 bg-gray-100 font-semibold whitespace-pre text-gray-900 rounded drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-200 group-hover:w-fit`}>
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

export default Home;