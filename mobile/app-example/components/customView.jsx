import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomView = ({ scroll,flex, style, safe, children, ...props }) => {
    return safe ? (
        <>
            <SafeAreaView style={[flex && { flex: 1 }, style]} {...props}>
                {scroll &&
                    <ScrollView>
                        {children}
                    </ScrollView>
                }
                {!scroll &&
                    children
                }
            </SafeAreaView>
        </>

    ) : (
        <View style={[flex && { flex: 1 }, style]} {...props}>
            {scroll &&
                <ScrollView>
                    {children}
                </ScrollView>
            }
            {!scroll &&
                children
            }
        </View>
    );
}

export default CustomView

const styles = StyleSheet.create({})