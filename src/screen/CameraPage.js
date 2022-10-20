import React from 'react';
import {Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraPage = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  return (
    <View style={{flex: 1}}>
      <Camera
        style={{flex: 1}}
        device={device}
        isActive={true}
        enableZoomGesture
      />
    </View>
  );
};

export default CameraPage;
