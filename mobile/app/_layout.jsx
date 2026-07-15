import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import {StatusBar} from "expo-status-bar"
const AppLayout = () => {
  return (
    <>
    <StatusBar style='light' />
    <Slot />
    </>
  )
}

export default AppLayout

const styles = StyleSheet.create({})