import Home from './pages/Home.jsx';

const Main = () => {
  return (
    <div className='m-4 ml-20 text-xl text-gray-100 font-semibold'>
    <h1>
      Home
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta harum id ullam laboriosam ea velit ex explicabo a sit adipisci officiis, pariatur ratione aperiam esse ut dolorum repellat error.
    </p>
      <div>

      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className='flex min-h-screen bg-gray-900'>
      <Main />
      <Home />
    </div>
  )
}