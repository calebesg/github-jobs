import React from 'react'
import { useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview'

export default function Detail() {
  const route = useRoute()

  const uri = route.params.uri
  
  return <WebView style={{ flex: 1 }} source={{ uri }} />
}
