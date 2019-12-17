import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  //estado para as tecnologias
  const [techs, setTechs] = useState([]);
  //estado para anotar o valor do input
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={tech => tech}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      {/*no TextInput ao invés de passar data-testid passamos testID*/}
      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />

      <TouchableOpacity onPress={handleAdd}>
        {/*não tem problema o texto Adicionar estar dentro do <Text></Text>,
        pq o teste vai procurar pelo botão e vai clicar no botão */}
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
