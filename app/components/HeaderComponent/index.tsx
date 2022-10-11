import * as React from 'react';
import { FC } from 'react';
import { View, Image, Pressable } from 'react-native';
import Utils from '../../services/utils';
import { getStyle } from './styles';

interface Props {
    isShow: boolean;
    navigation: any;
};

export const HeaderComponent: FC<Props> = ({ isShow, navigation }) => {
    const styles = React.useMemo(() => getStyle(), []);
    return (
        <View style={styles.container}>
            {Utils.isTablet.slice(0, 4) === 'iPho'
                ? <Image source={require('../../assets/images/logo.png')} />
                : <Image source={require('../../assets/images/logoTablet.png')} />
            }
            {isShow &&
                <Pressable
                    onPress={() => navigation?.navigate('SignInScreen')}
                    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                    <Image source={require('../../assets/images/exitIcon.png')} />
                </Pressable>
            }
        </View>
    )
};


