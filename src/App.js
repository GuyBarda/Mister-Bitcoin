import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { Chart } from './components/Chart';
import { LoginSignupModal } from './components/LoginSignupModal';
import { ContactApp } from './views/ContactApp';
import { ContactDetails } from './views/ContactDeatils';
import { ContactEdit } from './views/ContactEdit';

function App() {
    return (
        <Router>
            <AppHeader />
            <Routes>
                <Route path="/contact/edit/:id" element={<ContactEdit />} />
                <Route path="/contact/edit/" element={<ContactEdit />} />
                <Route path="/contact/:id" element={<ContactDetails />} />
                <Route path="/dashboard" element={<Chart />} />
                <Route path="/login" element={<LoginSignupModal />} />
                <Route path="/" element={<ContactApp />} />
            </Routes>
        </Router>
    );
}

export default App;
