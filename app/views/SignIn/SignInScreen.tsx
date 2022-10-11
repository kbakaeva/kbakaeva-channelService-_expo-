import * as React from 'react';
import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { HeaderComponent } from '../../components/HeaderComponent';
import { SignInComponent } from '../../components/SignInComponent';
import { Users } from '../../models/users';

interface Props {
};

export const SignInScreen: FC<Props> = ({ }) => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val: any) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val: any) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleValidUser = (val: any) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName: string, password: string) => {

        const foundUser = Users.filter((item: any) => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser !== 0) {
            navigation.navigate('HomeScreen')
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderComponent isShow={false} {...{ navigation }} />
            <View style={{ flex: 0.8 }}>
                <SignInComponent {...{ textInputChange, handlePasswordChange, handleValidUser, loginHandle, data }} />
            </View>
        </View>
    )
};