import { Routes, Route, Navigate } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import NotificationsPage from './pages/NotificationsPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import OnBoardingPage from './pages/OnBoardingPage'
import toast, { Toaster } from 'react-hot-toast'
import PageLoader from './components/PageLoader';
import useAuthUser from './hooks/useAuthUser';
import Layout from './components/Layout';
import { useThemeStore } from './store/useThemeStore';

function App() {


  const { isLoading, authUser } = useAuthUser();

  const { theme, settheme } = useThemeStore()

  const isAuthenticated = Boolean(authUser);
  const isOnBoarded = authUser?.isOnboarded;
  // console.log(isOnBoarded);


  // console.log("authUser", authUser, isAuthenticated)

  if (isLoading) return <PageLoader />


  return (
    <div className='h-screen' data-theme={dark}>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated && isOnBoarded ? (<Layout showSidebar={true} ><HomePage /></Layout>) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)}
        />
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to={isOnBoarded ? "/" : "/onboarding"} />} />
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to={isOnBoarded ? "/" : "/onboarding"} />} />
        <Route path="/notifications" element={isAuthenticated && isOnBoarded ? (
          <Layout>
            <NotificationsPage />
          </Layout>
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
        )} />
        <Route
          path="/call/:id"
          element={
            isAuthenticated && isOnBoarded ? (
              <CallPage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />

        <Route
          path="/chat/:id"
          element={
            isAuthenticated && isOnBoarded ? (
              <Layout showSidebar={false}>
                <ChatPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route path="/onboarding" element={isAuthenticated ? (!isOnBoarded ? (<OnBoardingPage />) : (<Navigate to="/" />)) : (<Navigate to="/login" />
        )} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
