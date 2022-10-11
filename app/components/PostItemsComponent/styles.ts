import { StyleSheet, Platform, Dimensions } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        postContainer: {
            justifyContent: 'center',
            borderWidth: 4,
            borderColor: '#27569C',
            margin: 10,
            padding: 10,
        },
        image: {
            width: 150,
            height: 150
        },
        text: {
            fontSize: 16,
            lineHeight: 22,
            fontWeight: '700',
            marginVertical: 10
        }
    });
    return styles;
}

    ;