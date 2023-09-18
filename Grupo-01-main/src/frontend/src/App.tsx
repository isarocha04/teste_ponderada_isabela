import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Router from './router/router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <main className='flex flex-col overflow-y-auto w-10/12 bg-white font-inteli'>
          <Router />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
