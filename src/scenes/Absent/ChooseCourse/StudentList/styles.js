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
    desc: {
        flexDirection: 'row',
        margin: width * .05,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.GRAY
    },
    textName: {
        flex: 1,
        margin: width * .05
    },
    text: {
        margin: width * .02,
        marginVertical: width * .05
    },
    listSection: {
        flexDirection: "row",
        marginVertical: width * .04
    },
    imgSection: {
        borderWidth: 1,
        height: width * .09,
        width: width * .09,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: width * .02,
        borderColor: Colors.GRAY,
        marginLeft: width * .06
    },
    iconImage: {
        fontSize: RFValue(20),
        color: Colors.GRAY
    },
    nameSection: {
        flex: 1
    },
    name: {
        fontSize: RFValue(16),
        fontFamily: Fonts.PMedium
    },
    nim: {
        fontFamily: Fonts.PLight,
        fontSize: RFValue(11),
        color: Colors.BLACK_TEXT
    },
    checkSection: {
        flexDirection: 'row',
        marginRight: width * .06
    },
})