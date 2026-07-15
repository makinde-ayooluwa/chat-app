import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({defaultStyle, pressedStyle, style, ...props}) => {
  return (
    <Pressable style={({pressed})=>[defaultStyle && styles.button, style, pressed && pressedStyle]} {...props} />
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        borderWidth: 1,
        width: "95%",
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    }
})