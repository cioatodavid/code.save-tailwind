import Sidebar from './pages/Sidebar.jsx';
import ListCollection from './pages/ListCollection.jsx';
import ListSnippet from './pages/ListSnippet.jsx';
import Snippet from './pages/Snippet.jsx';

export default function App() {
  return (
    <div className='flex align-middle justify-center mx-auto bg-gray-800 min-h-screen min-w-full '>
      <Sidebar />
      <ListCollection />
      <ListSnippet />
      <Snippet />
    </div>
  )
}