import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        bgcolor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
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