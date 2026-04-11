import { Outlet } from "react-router-dom"
import { PageWrapper } from "../../styles/styles"
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar'
import Footer from "../Footer/Footer"
  
const BaseLayout = () => {
    return (
        <PageWrapper>
            <Header />
            <Sidebar />

            <div style={{
                minHeight: 'calc(100vh - 545px)'
            }}>
                <Outlet />
            </div>

            <Footer />
        </PageWrapper>
    )
}

export default BaseLayout
