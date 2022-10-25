import React from 'react';
import { Link } from 'react-router-dom';

const ListCollection = () => {

  const collections = [
    {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    },
    {
      name: 'Collection 2',
      color: 'bg-blue-500',
      path: '/collection2',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    }, {
      name: 'Sidebar Tailwind',
      color: 'bg-violet-400',
      path: '/collection1',
      loc: 'main'
    },
  ]


  return (
    <section className='flex'>
      <div className='bg-gray-800 border-l border-gray-700 min-h-screen overflow-y-auto max-h-screen w-52'>
        <nav className='flex flex-col px-2 py-4 bg-gray-800'>
          <div className='flex items-center justify-between text-center px-2'>
            <h6 className='text-xs text-center font-semibold text-gray-300 uppercase tracking-widest'>
              Collections
            </h6>
            <Link to="addcollection">
              <button className='hover:bg-slate-700 rounded p-1 '>
                <svg className='w-6 h-6 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className='mt-2 space-y-1 border-t border-gray-700'>
            {collections.map((collection, index) => (
              <Link
                key={index}
                to={collection.path}
                className='group flex items-center px-2 py-2 mt-2 text-sm font-medium text-gray-100 rounded hover:bg-gray-700 hover:text-white'>
                <span className={`h-2 w-2 rounded-full mr-4 ${collection.color}`}></span>
                <span className='truncate'>
                  {collection.name}
                </span>
                
              </Link>
            ))}
          </div>
        </nav>
      </div>

    </section>
  )
}


export default ListCollection;
