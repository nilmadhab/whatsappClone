import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { useEffect } from 'react';
Amplify.configure(config)

import {Auth, API, graphqlOperation} from 'aws-amplify'

import { getUser } from './src/graphql/queries'

import {createUser} from './src/graphql/mutations'

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const randomImages = [
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
  ]

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  useEffect(() => {
    const fetchUser = async () => {
      // get authenticated user from Auth

      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(userInfo);

      if (userInfo) {
        // get the user from Backend with User sub Auth

        const userData = await API.graphql(graphqlOperation(getUser, 
          {id: userInfo.attributes.sub}
          ));

          console.log("userdata", userData);

          if (userData.data.getUser) {
            console.log("user present");
            return;
          }

          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: getRandomImage(),
            status: 'I am using whatsapp'
          }

          console.log("new user", newUser);
          
          await API.graphql(graphqlOperation(createUser, {input: newUser}));

        // if there is no user in DB with the id, then create one

      }

      
    }
    fetchUser();
  }, []) // this is dependency, whenever it changes fetchUser is called again

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)