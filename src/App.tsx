import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

const Dashboard = lazy(() => import("@/pages/Dashboard"));


function App() {
  

  return (
    <>
      
      <h1>Jeannie's chingu</h1>
      
        
        <SignIn />
      
	  <Box>
	    <Suspense>
		<Routes>
	  {/* Dashboard */}
	      <Route path="/Dashboard" element={<Dashboard />} />

	    </Routes>
	  </Suspense>
	</Box>	
    </>
  )
}

export default App
