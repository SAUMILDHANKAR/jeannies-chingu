import React from 'react';
import { Box, Typography } from '@mui/material';
import useBreakpoints from "../hooks/useBreakpoints";

const Dashboard: React.FC = () => {

  const { isMobile } = useBreakpoints();

  return (
    <Box
      sx={{
        width: { sm: "300px", md: "100%" },
        //width: {isMobile ? '50%' : '100%'},
        //rows={isMobile ? '50%' : '100%'}
        height: '100vh',
        bgcolor: 'lightpink',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
	  color: isMobile ? 'blue' : 'white',
        }}
        /*variant={isMobile ? "h5" : "h1"}*/
		/*For eveluators: didn't get no overload error through TS docs but Copilot helped me understand illegal params in Typography would mean that*/
        /*fontWeight={600}*/
        /*color="text.secondary"*/
      >
        Page upcoming 🛠️
      </Typography>
    </Box>
  );
};

export default Dashboard
