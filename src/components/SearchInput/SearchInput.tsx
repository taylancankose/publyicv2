import {View, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {PlaceContext} from '../../context/PlaceContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  const {handleSearch, input, setInput} = useContext(PlaceContext);
  return (
    <View style={styles.contentContainer}>
      <TextInput
        value={input}
        onChangeText={txt => setInput(txt)}
        placeholder="Search..."
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="ios-search" size={20} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
