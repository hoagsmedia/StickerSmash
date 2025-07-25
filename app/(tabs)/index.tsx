import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Button from '@/components/Button'
import CircleButton from '@/components/CircleButton'
import IconButton from '@/components/IconButton'
import ImageViewer from '@/components/ImageViewer'

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  )
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You did not select a image.')
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    // Logic to add a sticker can be implemented here
    console.log('Add Sticker pressed')
  }

  const onSaveImageAsync = async () => {
    // Logic to save the image can be implemented here
    console.log('Save Image pressed')
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            onPress={pickImageAsync}
            theme="primary"
            label="Choose a Image"
          />
          <Button
            onPress={() => setShowAppOptions(true)}
            label="Use this Image"
          />
        </View>
      )}
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
