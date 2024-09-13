import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import { useState } from "react";
import { SkypeIndicator } from "react-native-indicators";
import { Redirect, router } from "expo-router";
import { cleanPhoneNumber } from "../utils/formatPhone";
import axios from "axios";
import { URL } from "../api/const";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";


const Login = () => {
    const { t } = useTranslation()
    const [user, setUser] = useState({
        phone: '',
        password: '',
    });
    const getInputValue = (name, value) => {
        setUser({
            ...user,
            [name]: value
        });

    }


    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    const login = async () => {
        setLoading(true);
        try {
            const res = await axios(`${URL}/client/auth/login`, {
                method: 'post',
                data: { ...user, phone: cleanPhoneNumber(user.phone) },
            })
            console.log('login', res);
            if (res.statusCode === 200) {
                router.push('home');
            }
        } catch (error) {
            console.log(error.message);
            showMessage({
                message: error.message,
                type: "warning",
            });
        }
        finally {
            setLoading(false);
        }
    }
    if (!loading) {
        <Redirect href={'home'} />
    }
    return (
        <View className={'flex-1 justify-center w-full items-center bg-bg-default'}>
            <FlashMessage position="top" duration={3000} style={{ top: 30 }} />
            <View className={'w-11/12'}>
                <Text className={'text-2xl  text-black text-19'}>{t('welcome')} </Text>
            </View>
            <View className={'w-11/12'}>
                <Text className={'text-base text-gray text-17'}>{t('enter_text')} </Text>
            </View>
            <View className={'w-11/12'}>
                <TextInputMask
                    value={user.phone}
                    onChangeText={(vlaue) => getInputValue('phone', vlaue)}
                    type={'custom'}
                    inputMode={'numeric'}
                    options={{
                        mask: '+998 (99) 999 99 99'
                    }}
                    className={' border border-border-1 bg-white rounded-md text-black font-bold  text-15  h-11 mt-5 pl-5'}
                    keyboardType={'phone-pad'}
                    placeholder={'+998'}
                />
                {user.phone.length > 0 &&
                    <View className={'absolute right-5 top-2/4'}>
                        <TouchableOpacity onPress={() => setUser({ ...user, phone: '' })}>
                            <Ionicons name="close-circle" size={22} color="gray" />
                        </TouchableOpacity>
                    </View>
                }
            </View>

            <View className={'w-11/12'}>
                <TextInput
                    onChangeText={(vlaue) => getInputValue('password', vlaue)}
                    className={'border border-border-1 bg-white rounded-md text-gray text-15  h-11 mt-5 pl-5 pr-12'}
                    placeholder={t('password')}
                    secureTextEntry={showPassword}
                />
                <View className={'absolute right-5 top-2/4'}>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={22} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className={'w-11/12'}>
                <Text className={'text-blue-500 text-15 mt-2'}> {t('forget_password')} </Text>
            </View>
            <View className={'w-11/12 absolute bottom-4'}>
                {loading &&
                    <View className={'animate-spin bg-btn-primary h-12 mt-5 rounded-md items-center justify-center'}>
                        <SkypeIndicator color={'white'} size={30} />
                    </View>
                }
                {!loading &&
                    <TouchableOpacity disabled={loading} className={'bg-btn-primary h-12 mt-5 rounded-md items-center justify-center'} onPress={login}>
                        <Text className={'text-white text-15 '}> {t('login')} </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    errorElem: {
        borderColor: 'red',
        color: "red"
    }
})