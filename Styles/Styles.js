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
        flex            : 1, 
        height          : 48, 
        flexDirection   : 'row', 
        alignItems      : 'center',
    },
    itemText        : {
        flex            : 1,
        color           : '#000000',
        fontSize        : 20,
    },
    separatorStyle  : {
        width           : deviceWidth,
        height          : 2,
        backgroundColor : '#CED0CE',
    },
    textInput       : {
        width           : deviceWidth,
    },
});
