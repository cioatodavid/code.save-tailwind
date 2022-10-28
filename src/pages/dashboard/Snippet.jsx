import React from 'react';
import Dracula from './dracula.js';
import { HiClipboard } from 'react-icons/hi';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';



const Snippet = () => {

  const codeString = `
  import React from 'react';
  import ListCollection from './ListCollection.jsx';
  import Snippet from './Snippet.jsx';
  import ListSnippet from './ListSnippet.jsx';
  import Sidebar from './Sidebar.jsx';
  
  
  
  const Layout = () => {
    const snippets = [
      {
        id: 123211241,
        title: 'Sidebar Tailwind',
        language: 'html',
        code: 'a = int(input())',
        trigger: 'sidebar',
        description: 'Sidebar Tailwind is a sidebar component that is made with Tailwind CSS',
      }
    ]

    return (
      <div className='flex align-middle justify-center mx-auto bg-gray-800 min-h-screen min-w-full '>
        <Sidebar />
        <ListCollection />
        <ListSnippet />
        <Snippet />
      </div>
    )
  }
  
  export default Layout;
  `;


  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
  };

  return (
    <section className='flex flex-col  min-h-screen max-h-screen max-w-max bg-gray-800 border-x shadow-2xl border-gray-700'>

      <div className='overflow-x-auto p-4 m-4 rounded-lg flex flex-col'>
        <div className='flex justify-between'>
          <div className='my-4'>
            <h1 className='text-3xl text-gray-200 font-bold'>Title</h1>
            <h4 className='text-gray-400'>A long description</h4>
          </div>
          <div className='relative top-24 right-2 m-4'>
            <button className='p-3 rounded bg-gray-700 hover:bg-gray-600 opacity-40 hover:opacity-90  duration-200'>
              <HiClipboard onClick={copyToClipboard} className='text-gray-200' />
            </button>
          </div>
        </div>
        <div className='max-w-[700px] overflow-auto rounded-lg'>
          <SyntaxHighlighter language='jsx' wrapLongLines style={Dracula}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div>

        </div>

      </div>
    </section>
  )
}

export default Snippet;
