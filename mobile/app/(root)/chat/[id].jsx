import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SingleChat = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>SingleChat for User {id}</Text>
    </View>
  )
}

export default SingleChat

const styles = StyleSheet.create({})