import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { FC } from 'react'

const Stays: FC = () => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel>Where are you staying?</InputLabel>
      <Input id="stays-input" aria-describedby="stays-input-helper-text" />
      <FormHelperText id="stays-input-helper-text">
        We'll help you find the most photogenic spots near you!
      </FormHelperText>
    </FormControl>
  )
}

export default Stays
