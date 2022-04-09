import React, { FC } from 'react'
import Box from '@mui/material/Box'
export interface TabPanelProps {
  id: string
  value: number
  index: number
  children?: React.ReactNode
}

const TabPanel: FC<TabPanelProps> = ({ id, value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={id}
      className="tab-panel-container"
      style={{ marginTop: 25 }}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

export default TabPanel
