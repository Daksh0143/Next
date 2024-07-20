import { Grid, Typography } from '@mui/material'
import React from 'react'

const Data = ({handleClick}) => {
  return (
    <Grid onClick={handleClick}>
        <Typography variant='h6'>Daxesh Chauhan</Typography>
    </Grid>
  )
}

export default Data