import * as React from 'react';
import { FC } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Utils from '../../services/utils';
import { getStyle } from './styles';

interface Props {
    textInputChange: any;
    handlePasswordChange: any;
    handleValidUser: any;
    loginHandle: any;
    data: any;
};

export const SignInComponent: FC<Props> = ({ textInputChange, handlePasswordChange, handleValidUser, loginHandle, data }) => {
    const styles = React.useMemo(() => getStyle(), []);

    return (
        <>
            {Utils.isTablet.slice(0, 4) === 'iPho' ?
                <View style={styles.container}>
                    <Text numberOfLines={1} style={styles.title}>Autorization</Text>
                    <View style={styles.inputWrapper}>
                        <Text numberOfLines={1} style={styles.subtitle}>login</Text>
                        <View style={styles.errorWrapper}>
                            <TextInput
                                onChangeText={(val) => textInputChange(val)}
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                style={styles.input} />
                            {data.isValidUser ? null :
                                <Text style={styles.errorTxt}>Login must be 4 characters long.</Text>}
                        </View>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text numberOfLines={1} style={styles.subtitle}>password</Text>
                        <View style={styles.errorWrapper}>
                            <TextInput
                                onChangeText={(val) => handlePasswordChange(val)}
                                style={styles.input} />
                            {data.isValidPassword ? null
                                : <Text style={styles.errorTxt}>Password must be 8 characters long.</Text>}
                        </View>
                    </View>
                    <Pressable
                        onPress={() => { loginHandle(data.username, data.password) }}
                        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.button]}>
                        <Text numberOfLines={1} style={styles.buttonTxt}>Submit</Text>
                    </Pressable>
                </View>
                :
                <View style={styles.containerTab}>
                    <Text numberOfLines={1} style={styles.title}>Autorization</Text>

                    <View style={styles.inputWrapperTab}>
                        <Text numberOfLines={1} style={styles.subtitle}>login</Text>
                        <View style={styles.errorWrapper}>
                            <TextInput
                                onChangeText={(val) => textInputChange(val)}
                                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                                style={styles.inputTab} />
                            {data.isValidUser ? null :
                                <Text style={styles.errorTxt}>Login must be 4 characters long.</Text>}
                        </View>
                    </View>
                    <View style={styles.inputWrapperTab}>
                        <Text numberOfLines={1} style={styles.subtitle}>password</Text>
                        <View style={styles.errorWrapper}>
                            <TextInput
                                onChangeText={(val) => handlePasswordChange(val)}
                                style={styles.inputTab} />
                            {data.isValidPassword ? null
                                : <Text style={styles.errorTxt}>Password must be 8 characters long.</Text>}
                        </View>
                    </View>
                    <Pressable
                        onPress={() => { loginHandle(data.username, data.password) }}
                        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.button]}>
                        <Text numberOfLines={1} style={styles.buttonTxt}>Submit</Text>
                    </Pressable>
                </View>
            }
        </>

    )
};


