import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ProgressBarAndroid, StyleSheet } from 'react-native';

const UploadScreen = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const selectPhotos = () => {
    // Dummy data for selected photos
    const photos = [{
      id: '1',
      uri: 'https://tinyurl.com/42evm3m3'
    }, {
      id: '2',
      uri: 'https://tinyurl.com/42evm3m3'
    }, {
      id: '3',
      uri: 'https://tinyurl.com/42evm3m3'
    }];
    setSelectedPhotos(photos);
  };

  const removePhoto = id => {
    setSelectedPhotos(selectedPhotos.filter(photo => photo.id !== id));
  };

  const uploadPhotos = () => {
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prevProgress => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 100;
        }

        return prevProgress + 10;
      });
    }, 500);
  };

  return <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={selectPhotos}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
      <FlatList data={selectedPhotos} renderItem={({
      item
    }) => <View style={styles.photoContainer}>
            <Image source={{
        uri: item.uri
      }} style={styles.photo} />
            <TouchableOpacity style={styles.removeButton} onPress={() => removePhoto(item.id)}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>} keyExtractor={item => item.id} horizontal />
      {uploadProgress > 0 && <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={uploadProgress / 100} style={styles.progressBar} />}
      <TouchableOpacity style={styles.uploadButton} onPress={uploadPhotos}>
        <Text style={styles.uploadButtonText}>Start Uploading</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  uploadButtonText: {
    color: '#FFF',
    fontSize: 16
  },
  photoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  removeButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10
  },
  removeButtonText: {
    color: '#FFF',
    fontSize: 14
  },
  progressBar: {
    width: '80%',
    marginTop: 20,
    marginBottom: 20
  }
});
export default UploadScreen;