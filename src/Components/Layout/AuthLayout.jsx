import { PageWrapper } from '../../styles/styles'
import AuthHeader from '../Header/AuthHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const AuthLayout = () => {
  return (
    <PageWrapper>
      <AuthHeader />

      <main>
        <Outlet />
      </main>

      <Footer />
    </PageWrapper>
  )
}

export default AuthLayout
