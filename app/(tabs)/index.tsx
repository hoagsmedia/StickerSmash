import * as ImagePicker from 'expo-image-picker'
import { StyleSheet, View } from 'react-native'

import Button from '@/components/Button'
import ImageViewer from '@/components/ImageViewer'

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      console.log(result)
    } else {
      alert('You did not select any image.')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          onPress={pickImageAsync}
          theme="primary"
          label="Choose a Image"
        />
        <Button label="Use this Image" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
