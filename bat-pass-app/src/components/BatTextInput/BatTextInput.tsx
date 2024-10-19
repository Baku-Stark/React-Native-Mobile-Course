import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
  pass:string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
      <TextInput
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}
        editable={false} // Propriedade que impede o usuário de editar o campo
      />
  );
}