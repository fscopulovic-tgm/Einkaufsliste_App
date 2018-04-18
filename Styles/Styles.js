import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {height : deviceHeight, width : deviceWidth } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container       : {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#FFFFFF',
    },
    listItem        : {
        width           : deviceWidth,
        height          : 40,
        justifyContent  : 'center',
        alignItems      : 'center',
    },
    shopListItem    : {
        width           : deviceWidth,
        height          : 40,
        justifyContent  : 'space-evenly',
        alignItems      : 'center',
        flexDirection   : 'row',
    },
    itemText        : {
        flex            : 1,
        color           : '#000000',
        fontSize        : 15,
    },
    separatorStyle  : {
        width           : deviceWidth,
        height          : 2,
        backgroundColor : '#CED0CE',
    },
    textInput       : {
        width           : deviceWidth,
    },
    button          : {
        width           : deviceWidth,
    },
});