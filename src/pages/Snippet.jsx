import React from 'react';
import Dracula from './dracula.js';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';


const Snippet = () => {
  const codeString = `import React from 'react';
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
  
  export default Sidebar;
  `;

  return (
    <section className='flex flex-col lign-middle justify-center min-h-screen max-h-screen max-w-max bg-gray-800 border-x shadow-2xl border-gray-700'>

      <div className='overflow-x-auto p-4 rounded-lg flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-3xl text-gray-200 font-bold'>Title</h1>
            <h4 className='text-gray-400'>A long description</h4>
          </div>

        </div>
        <div className='w-[600px] overflow-auto rounded-lg'>
          <SyntaxHighlighter language="javascript" wrapLongLines style={Dracula}>
              {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  )
}

export default Snippet;
