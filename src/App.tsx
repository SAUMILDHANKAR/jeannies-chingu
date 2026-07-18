//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const Dashboard = lazy(() => import("@/pages/Dashboard"));


function App() {
  

  return (
    <>
      
      <h1>Jeannie's chingu</h1>
	  
      
	  <Box>
	    <Suspense>
		<Routes>
		{/* Default route shows SignIn */}
		{/* For evaluators: unfortunately even after spending about half an hour researching documentation I was not able to figure out the default route functionlity to get signin component to not show once we are on dashboard path, so used copilot help */}
            <Route path="/" element={<SignIn />} />

           
	  {/* Dashboard */}
	      <Route path="/Dashboard" element={<Dashboard />} />

	    </Routes>
	  </Suspense>
	</Box>	      

    </>
  )
}

export default App
