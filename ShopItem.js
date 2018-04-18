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
        this.props.doc.ref.delete();
    }

    render() {
        const styling = this.props.bought ? {backgroundColor : "#00E500"} : {backgroundColor : "#FFFFFF"};
        return (
          <TouchableOpacity
            onPress={() => this.__toggleItem()}
            onLongPress={() => this.__delItem()}
            style={styles.listItem && styling}
          >
            <View style={{flex : 8}}>
                <Text style={styles.itemText}>
                    {this.props.itemname}
                </Text>
            </View>
            <View style={{flex : 2}}>
                <Text style={styles.itemText}>
                    {this.props.bought ? "Bought!" : ""}
                </Text>
            </View>
          </TouchableOpacity>
        );
    }
}
