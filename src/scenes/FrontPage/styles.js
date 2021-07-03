import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    welcomText: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(38),
        color: Colors.BLACK_TEXT,
        textAlign: 'center',
        marginTop: width * .3
    },
    text2: {
        fontFamily: Fonts.PRegular,
        fontSize: RFValue(20),
        color: Colors.BLACK_TEXT,
        textAlign: 'center',
        marginTop: width * .1
    },
    frontImage: {
        width: width * .7,
        height: width * .7
    },
    imgSection: {
        alignItems: 'center',
        marginVertical: width * .1
    },
    btnSection: {
        flex: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#BBBBBB',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: Colors.GRAY_LIGHT,
        alignItems: 'center',
        justifyContent: "center"
    },
    btn: {
        width: width * .7,
        height: width * .12,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(25),
        color: Colors.WHITE
    }
})