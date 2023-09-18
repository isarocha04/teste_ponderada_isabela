import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import InitiativesList from '../pages/Initiatives/InitiativesList';
import InitiativeEdition from '../pages/Initiatives/InitiativeEdition';
import InitiativeCreate from '../pages/Initiatives/InitiativeCreate';

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/initiatives' element={<InitiativesList />} />
      <Route path='/initiatives/create' element={<InitiativeCreate />} />
      <Route path='/initiatives/:id/edit' element={<InitiativeEdition />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
