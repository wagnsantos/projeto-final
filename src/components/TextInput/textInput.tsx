// src/components/MyTextInput/index.tsx

import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

interface Props extends TextInputProps {
  // você pode adicionar props customizadas aqui se quiser
}

const MyTextInput = ({ ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
};

export default MyTextInput;
