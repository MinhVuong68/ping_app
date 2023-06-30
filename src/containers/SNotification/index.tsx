import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { Header, Updating } from '../../components';
import { Layout } from '../../theme';


import io from 'socket.io-client';

const SNotification = () => {
  useEffect(() => {
    // Tạo kết nối với Socket.IO server
    const socket = io("http://192.168.43.30:8080");
    console.log(socket);
    

    // Xử lý sự kiện khi kết nối thành công
    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <View style={Layout.full}>
      <Header title="Thông báo" />
      <Updating />
    </View>
  );
};

export default SNotification;
