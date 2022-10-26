import React from 'react';
import { Link } from 'react-router-dom';

const ListSnippet = () => {

  const snippets = [
    { 
      id: 123211241,
      title: 'Sidebar Tailwind',
      language: 'html',
      code: 'a = int(input())',
      trigger: 'sidebar',
      description: 'Sidebar Tailwind is a sidebar component that is made with Tailwind CSS',
    },
    {
      id: 123211242,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
    {
      id: 123211243,
      title: 'Navbar Css',
      language: 'css',
      code: '<div class="navbar">',
      trigger: 'navbar',
      description: 'Navbar Css is a navbar component that is made with CSS',
    },
  ];


  return (
    <section className='flex'>
      <div className='bg-gray-800 border-l border-gray-700 min-h-screen overflow-y-auto max-h-screen w-72'>

        {snippets.map((snippet,index) => (
          <Link
            key={index}
            to={`/snippet/${snippet.id}`}
            className='flex flex-col  bg-gray-800 p-2 text-gray-300 tracking-wide rounded m-2 hover:bg-gray-700'>

            <h3 className='font-semibold'>{snippet.title}</h3>
            <p className='text-sm text text-gray-400'>{snippet.description}</p>

          </Link>
        ))}
        {/*<Link
          key=''
          to='/'
          className='flex flex-col  bg-gray-800 p-2 text-gray-300 tracking-wide rounded m-2 hover:bg-gray-700'>

          <h3 className='font-semibold'>NavbarCSS</h3>
          <p className='text-sm text text-gray-400'>Navbar Css is a navbar component that is made with CSS</p>

        </Link>*/}
      </div>

    </section>
  );
}

export default ListSnippet;
