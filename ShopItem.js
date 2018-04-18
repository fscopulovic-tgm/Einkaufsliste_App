import React from 'react';
import { 
    TouchableOpacity,
    View,
    Text,
    Button, 
} from 'react-native';
import styles from './Styles/Styles.js';

export default class ShopItem extends React.PureComponent {
    __toggleItem() {
        this.props.doc.ref.update({
            bought: !this.props.bought,
        });
    }

    __delItem() {

    }

    render() {
        return (
          <TouchableOpacity
            onPress={() => this.__toggleItem()}
          >
              <View style={{ flex: 1, height: 48, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 8 }}>
                        <Text style={styles.itemText}>
                            {this.props.itemname}
                        </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={styles.itemText}>
                      {this.props.bought ? "Bought!" : "Not Bought!"}
                    </Text>
                  </View>
                  <Button
                    style={styles.button && {flex : 1, marginRight : 10}}
                    title={'Delete item'}
                    onPress={() => this.__delItem()}
                  />
              </View>
          </TouchableOpacity>
        );
    }
}