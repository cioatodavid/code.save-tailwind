import React from 'react';
import { Link } from 'react-router-dom';


const ListSnippet = () => {
  const snippets = [

    {
      title: 'Sidebar Tailwind',
      description: 'bg-violet-400',
      id: 'collection1',
      loc: 'main'
    }
  ]

  return (
    <section className='flex shadow-2xl'>
      <div className='bg-gray-800 border-l px-2 border-gray-700 min-h-screen overflow-y-auto max-h-screen w-72 py-4'>
        <div className='flex items-center justify-between text-center px-2'>
          <h6 className='text-xs text-center font-semibold text-gray-200 uppercase tracking-widest'>
            Snippets
          </h6>
          <Link to="addsnippet">
            <button className='hover:bg-slate-700 rounded p-1 '>
              <svg className='w-6 h-6 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className='mt-2 space-y-1 border-t border-gray-700'>
        </div>


        {snippets.map((snippet, index) => (
          <Link
            key={index}
            to={`/snippet/${snippet.id}`}
            className='flex flex-col bg-gray-800 p-2 text-gray-300 tracking-wide rounded m-2 hover:bg-gray-700  duration-200'>

            <h3 className='font-semibold'>{snippet.title}</h3>
            <p className='text-sm text text-gray-400'>{snippet.description}</p>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default ListSnippet;
