import { Outlet } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

function App() {
    return (
        <div>
            <div>
                <ScrollToTop smooth />
            </div>
            
            <Outlet context />
        </div>
    )
}

export default App;