// React
import React from 'react'
// Redux
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               changePositionKey="W">
    <LogMonitor />
  </DockMonitor>
)
