import { StyleSheet } from 'react-native';

import { AppFonts, AppSizes, AppColors } from '@theme';

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: AppSizes.heightPercentageToDP(7),
        backgroundColor: AppColors.grey,
        borderColor: AppColors.grey,
        borderWidth: 1,
        borderRadius: 12,
        paddingRight: 15,
        paddingLeft: 20,
        paddingTop: 8,
        paddingBottom: 8,
    },
    input: {
        flex: 1,
        color: AppColors.black,
        fontFamily: AppFonts.base.familyMonoBold,
        fontSize: AppFonts.p.size,
        padding: 0,
        margin: 0,
    },
    passwordStrengthWrapper: {
        height: AppSizes.heightPercentageToDP(6),
        marginVertical: 5,
    },
    eyeIcon: {
        marginRight: 5,
    },
    // Bar Container
    barContainer: {
        marginTop: 5,
        height: 15,
        borderRadius: 12,
    },
    bar: {
        marginHorizontal: 2,
        height: 15,
        borderRadius: 12,
    },
    label: {
        position: 'absolute',
        right: 0,
        top: 23,
        fontSize: AppFonts.base.size * 0.7,
        fontFamily: AppFonts.base.familyBold,
    },
});

export default styles;
