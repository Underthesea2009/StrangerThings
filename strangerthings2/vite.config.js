// vite.config.js
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  resolve: {
    alias: {
      'react-redux': 'react-redux',
      '@reduxjs/toolkit': '@reduxjs/toolkit',
      '@mui/material': '@mui/material',
    }
  }
}


//After making these changes, try running your Vite development server again. If the issue persists, double-check the import statements and file paths in your src/main.jsx file to ensure they are accurate and correspond to the installed dependencies.






