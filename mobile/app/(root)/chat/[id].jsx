import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { APP_ENV } from '../../../constants/env';
import CustomView from "../../../components/customView"
import { Colors } from '../../../constants/colors';
const SingleChat = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useLocalSearchParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${APP_ENV.BACKEND_URI}/user/${id}`);
        const data = response.json();
        if (data) {
          setUser(data);
          setIsLoading(false);
        }
      }
      catch (err) {
        setIsLoading(false);
        setError(true);
        console.log(err);
      }
    }
    fetchData();
  }, [])
  return (
    <CustomView flex>
      {isLoading &&
        (
          <>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size={60} color={Colors.APP_COLOR} />
            </View>
          </>
        )
      }
      {!isLoading &&
        <>
          {error &&
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text>Error occured</Text>
            </View>
          }
          {!error &&
            <View>
              <Text>SingleChat for User {id}</Text>
            </View>
          }
        </>
      }
    </CustomView>
  )
}

export default SingleChat

const styles = StyleSheet.create({})
