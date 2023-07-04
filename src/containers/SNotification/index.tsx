import React, { useEffect, useState } from 'react';
import { Text, View,Button } from 'react-native';

import { Header, Updating } from '../../components';
import { Layout } from '../../theme';


import io from 'socket.io-client';

const SNotification = () => {
  const [socket, setSocket] = useState<any>(null);
  useEffect(() => {
    // Create a connection to the SocketIO server
    const socket = io('ws://192.168.97.71:1235',{
      secure: false,
      transports: ["websocket"],
    });

    socket.on('connect', () => {
      console.log('Connected to SocketIO server');
    });

    setSocket(socket)
    // Register event listeners
    socket.on('connect', () => {
      console.log('Connected to SocketIO server');
    });

    const message = {
      content: 'Hello from React Native',
    };
    socket.emit("send_message", message);

    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

    // Clean up the connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    //console.log(123);
    const message = {
      content: 'Hello from React Native',
    };
    socket.emit("send_message", {
      content: 'Hello from React Native',
    });
  };


  return (
    <View style={Layout.full}>
      <Header title="Thông báo" />
      <View>
      <Text>Chat Screen</Text>
      <Button title="Send Message" onPress={sendMessage} />
    </View>

      <Updating />
    </View>
  );
};

export default SNotification;
