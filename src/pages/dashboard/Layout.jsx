import React from 'react';
import ListCollection from './ListCollection.jsx';
import Snippet from './Snippet.jsx';
import ListSnippet from './ListSnippet.jsx';
import Sidebar from './Sidebar.jsx';



const Layout = () => {
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
