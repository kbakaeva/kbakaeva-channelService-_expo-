import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 0.15,
            backgroundColor: '#E4B062',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10
        }
    });
    return styles;
}

    ;