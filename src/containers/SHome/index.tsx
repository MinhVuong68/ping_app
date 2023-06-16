import { Asset, ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { useState } from 'react';
import { View,Image,Button } from 'react-native'
import React from 'react';
const SHome = () => {
  
  const [imageURI, setImageURI] = useState('');

  const handleImageUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const { assets } = response;
        if (assets && assets.length > 0) {
          const { uri, fileName } = assets[0] as Asset;
          const storageRef = storage().ref(`images/${fileName}`);
          if(uri==undefined) return;
          const task = storageRef.putFile(uri);

          task.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% complete`);
          }, (error) => {
            console.error('Image upload error:', error);
          })
        }
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {imageURI ? (
        <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />
      ) : null}
      <Button title="Upload Image" onPress={handleImageUpload} />
    </View>
  );
};

export default SHome;
