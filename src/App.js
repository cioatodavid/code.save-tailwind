import Sidebar from './pages/Sidebar.jsx';
import ListCollection from './pages/ListCollection.jsx';
import ListSnippet from './pages/ListSnippet.jsx';

const Main = () => {
  return (
    <ListSnippet />
  );
};

export default function App() {
  return (
    <div className='flex min-h-screen bg-gray-900'>
      <Sidebar />
      <ListCollection />

      <Main />
    </div>
  )
}