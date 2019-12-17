import React from 'react';

import TechList from '~/components/TechList';

import {render, fireEvent} from '@testing-library/react-native';

describe('TechList', () => {
  it('should be able to add new tech', () => {
    const {getByText, getByTestId} = render(<TechList />);

    /*tem q ser changeText e nao appenas change como na web, ja q no RN o textInput
    o evento dele é onChangeText e nao apenas onChange */
    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    //ao inves de click é press
    fireEvent.press(getByText('Adicionar'));

    /*toBeTruthy() é p/ ver se existe ou nao, (true or false) */
    expect(getByText('Node.js')).toBeTruthy();

    /*esperamos tb que o input não tenha nada dentro do value
    por padrao dentro do jest nao temos acesso às props desse input,
    entao para podermos ter acesso usaremos a lib jest-native*/
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
