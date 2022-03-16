import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Stack, Paper, Box, List, ListItemText, Collapse, ListItemButton } from '@mui/material';

import Home from './components/layout/home'
import HomeAdmin from './admin/home'
import AddBook from './admin/home/mainContent/addBook'
import EditBook from './admin/home/mainContent/editBook'
import DetailEditBook from './admin/home/mainContent/detailEditBook'
import AddAccount from './admin/home/mainContent/addAccount'
import EditAccount from './admin/home/mainContent/editAccount'
import MaterialFacilities from './admin/home/mainContent/MaterialFacilities'
import Equipment from './admin/home/mainContent/equipment'
import ReadingRoom from './admin/home/mainContent/readingRoom'
import FreezeAccount from './admin/home/mainContent/freezeAccount'
import Login from './components/feature/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<HomeAdmin />} />
          <Route path='/admin/books/add' element={<AddBook />} />
          <Route path='/admin/books/edit' element={<EditBook />} />
          <Route path='/admin/books/:idBook/update' element={<DetailEditBook />} />
          <Route path='/admin/AddAccount' element={<AddAccount />} />
          <Route path='/admin/EditAccount' element={<EditAccount />} />
          <Route path='/admin/MaterialFacilities' element={<MaterialFacilities />} />
          <Route path='/admin/Equipment' element={<Equipment />} />
          <Route path='/admin/ReadingRoom' element={<ReadingRoom />} />
          <Route path='/admin/FreezeAccount' element={<FreezeAccount />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
