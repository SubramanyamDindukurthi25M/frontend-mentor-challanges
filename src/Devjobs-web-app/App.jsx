import {Routes,Route,Navigate} from 'react-router-dom';
import { Header } from './Components/Header';
import { JobDetails } from './Components/JobDetails';
import { JobListing } from './Components/JobListing';
import './Styling/Main.scss';

export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route
                    path='/'
                    element={<Navigate to='/jobs'/>}
                />
                <Route
                    path='/jobs'
                    element={<JobListing/>}
                />
                <Route
                    path='/jobs/:position'
                    element={<JobDetails/>}
                />
            </Routes>
        </>
    )
}