import React from 'react';
import firebase from 'react-native-firebase';
import styles from './Styles/Styles.js';

import { 
  View, 
  Text, 
  TextInput, 
  Button,
  FlatList,
} from 'react-native';

import ShopItem from './ShopItem.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('items');
    this.unsubscribe = null;
    this.state = {
      textInput : '',
      list : [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
  }

  componentWillUnmount() {
      this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const newList = [];
    querySnapshot.forEach((doc) => {
      const { itemname, bought } = doc.data();
      newList.push({
        key: doc.id,
        doc, 
        itemname,
        bought,
      });
    });
    this.setState({ 
      list : newList
   });
  }

  addItem() {
    this.ref.add({
      itemname: this.state.textInput,
      bought: false,
    });

    this.setState({
      textInput: "",
    });
  }

  renderSeparator() {
    return (
      <View style={styles.separatorStyle}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <ShopItem {...item} />}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <TextInput
          style={styles.textInput}
          value={this.state.textInput}
          placeholder="Write your new shopping item"
          onChangeText={(text) => this.setState({textInput : text})}
        />
        <Button
          style={styles.button}
          title={'Add shop item'}
          disabled={!this.state.textInput.length}
          onPress={() => this.addItem()}
        />
      </View>
    );
  }
}