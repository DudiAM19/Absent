import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "styles";
const { width } = Dimensions.get("window");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    header: {
        height: width * .2,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textHeader: {
        color: Colors.WHITE,
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(26)
    },
    iconBack: {
        fontSize: RFValue(30),
        color: Colors.WHITE
    },
    inputSection: {
        marginVertical: width * .1,
        alignItems: 'center'
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        height: width * .13,
        width: width * .9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginVertical: width * .05
        // marginHorizontal: width * .06
    },
    textBtn: {
        fontFamily: Fonts.PMedium,
        fontSize: RFValue(20),
        color: Colors.WHITE
    },
})