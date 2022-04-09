import React, { FC, useState } from 'react'
import { Box, Tab, Tabs, withStyles } from '@mui/material'
import TabPanel from '../TabPanel/TabPanel'

export interface TabGroupProps {
  id: string
  labels: string[]
  children?: React.ReactNode[] | React.ReactNode
}

export const handleTabClick = (): {
  value: number
  handleChange: (_: any, newValue: number) => void
} => {
  const [value, setValue] = useState(0)

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue)
  }

  return {
    value,
    handleChange,
  }
}

const TabGroup: FC<TabGroupProps> = ({ id, labels, children }) => {
  const { value, handleChange } = handleTabClick()

  return (
    <Box id={`${id}-container`} sx={{ width: '100%' }}>
      <Tabs
        id={`${id}-tab-group`}
        value={value}
        onChange={handleChange}
        sx={{ width: '100%' }}
        variant="fullWidth"
        centered
      >
        {labels.map((label: string, index: number) => {
          return <Tab key={index} label={label} id={`${id}-tab-${index}`} />
        })}
      </Tabs>
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        return (
          <TabPanel key={index} id={`${id}-tab-panel-${index}`} value={value} index={index}>
            {child}
          </TabPanel>
        )
      })}
    </Box>
  )
}

export default TabGroup
