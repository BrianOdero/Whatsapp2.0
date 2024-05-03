import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const FloatingMessageIcon = ({ onPress }) => {
  const [iconPressed, setIconPressed] = useState(false);

  const handlePress = () => {
    setIconPressed(true);
    onPress(); // Call the provided onPress function to create a new message
  };

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 20, // Adjust position as needed
        right: 20, // Adjust position as needed
        zIndex: 10, // Ensure icon stays on top
      }}
      activeOpacity={0.8}
    >
      <Image
        source={require('../../../assets/images/Messages Clipart PNG Images, Vector Message Icon, Message Icons, Message, Bubble PNG Image For Free Download.jpeg')} // Replace with your icon image
        style={{ width: 50, height: 50 }}
      />
      {iconPressed && (
        // Optional animation or visual cue after press (optional)
        <View style={{ backgroundColor: 'royalblue', width: 10, height: 10, borderRadius: 5, position: 'absolute', top: 0, right: 0 }} />
      )}
    </TouchableOpacity>
  );
};

export default FloatingMessageIcon;