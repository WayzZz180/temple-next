import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function BasicTextFields2() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%', height: '75%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" variant="outlined" />
    </Box>
  )
}
