import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 0.7,
            borderWidth: 4,
            margin: 10,
            padding: 10,
            borderColor: '#27569C',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 6
        },
        containerTab: {
            flex: 0.4,
            borderWidth: 4,
            margin: 10,
            padding: 10,
            borderColor: '#27569C',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 6
        },
        title: {
            fontSize: 24,
            lineHeight: 26,
            fontWeight: '700',
            color: '#27569C'
        },
        inputWrapper: {
            flex: 0.3,
            width: '100%',
            justifyContent: 'space-evenly',
        },
        inputWrapperTab: {
            flex: 0.3,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        subtitle: {
            fontSize: 24,
            lineHeight: 26,
            fontWeight: '700',
            width: '40%'
        },
        errorWrapper: {
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start'
        },
        errorTxt: {
            color: '#F00'
        },
        buttonTxt: {
            fontSize: 24,
            lineHeight: 26,
            fontWeight: '700',
        },
        input: {
            backgroundColor: '#D9D9D9',
            height: 39,
            width: '100%',
            borderWidth: 4,
            borderColor: '#27569C',
            borderRadius: 10
        },
        inputTab: {
            backgroundColor: '#D9D9D9',
            height: 39,
            width: '60%',
            borderWidth: 4,
            borderColor: '#27569C',
            borderRadius: 10
        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 43,
            width: '100%',
            backgroundColor: '#E4B062',
            borderRadius: 6,
        }
    });
    return styles;
}

    ;