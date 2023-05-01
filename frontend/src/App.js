import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import LogIn from './pages/LogIn';

const App = () => {

    return (
        <>
        <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search/location/:location' element={<Home />} />
                        <Route path='/search/:keyword' element={<Home />} />
                        <Route path='/login' element={<LogIn />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App
