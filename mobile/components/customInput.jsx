import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({ style, onChangeText, inputMode, ...props }) => {
    return (
        <TextInput
        onChangeText={onChangeText}
            {...props}
            inputMode={inputMode}
            style={[styles.input, style]}
        />
    )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: "95%",
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    }
})