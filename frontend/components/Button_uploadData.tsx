import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { MaterialIcons } from '@expo/vector-icons';
import FormRequestOrganScreen from '../screens/FormRequestOrganScreen';

const Button_uploadData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileSelect = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type === 'success') {
      // setSelectedFile(result);
      setFileName(result.name);
    }
  };


  const handleTouchStart = () => {
    setDragging(true);
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  // const handleTouchMove = (event) => {
    // if (event.touches.length > 0) {
    //   setDragging(true);
    // } else {
    //   setDragging(false);
    // }
  // };

  const handleSubmit = () => {
    console.log('Submitting file: ', fileName);
  };

  return (
    <>
      <View
        style={[styles.dropzone, dragging && styles.dragging]}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        // onTouchMove={handleTouchMove}
      >
        <TouchableOpacity
          style={styles.dropzoneContent}
          onPress={handleFileSelect}
        >
          <TouchableOpacity style={styles.button} onPress={handleFileSelect}>
            <Text style={styles.buttonText}>📥 Upload a file</Text>
          </TouchableOpacity>
          {fileName && (
            <View style={styles.selectedFile}>
              <Text style={styles.fileName}>{fileName}</Text>
              {/* <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleSubmit}
              >
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity> */}
            </View>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dropzone: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 5,
    borderColor: '#bdbdbd',
    width: 450,
    padding: 20,
  },
  dragging: {
    borderColor: '#2196f3',
  },
  dropzoneContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedFile: {
    marginTop: 10,
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3c4242',
  },
  uploadButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: 330,
    height: 50,
    backgroundColor: '#EB455F',
    borderRadius: 90,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button_uploadData;