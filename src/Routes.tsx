import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Units from './pages/Units';
import Unit from './pages/Unit';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/units' element={<Units />} />
            <Route path='/unit/:unitId' element={<Unit />} />
        </Routes>
    );
}
export default AppRoutes;