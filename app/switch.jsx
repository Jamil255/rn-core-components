import React, { useState } from 'react'
import { Switch, View } from 'react-native'

const SwitchCom = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <View>
      <Switch
        onValueChange={()=>setEnabled((prev)=>!prev)}
        value={enabled}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={enabled ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  )
}

export default SwitchCom
