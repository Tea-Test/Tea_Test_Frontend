import React, { useState } from 'react';
import { View, Image, Button } from 'react-native';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    global.launchCamera(async (response) => {
      if (response.uri) {
        setImage(response);
        // Call your API endpoint to upload the image using Axios
        await uploadImage(response);
      }
    });
  };

  const uploadImage = async (imageData) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.fileName,
      });

      const response = await axios.post('YOUR_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image upload response:', response.data);
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  return (
    <View>
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload Image" onPress={handleImageUpload} />
    </View>
  );
};

export default ImageUpload;
