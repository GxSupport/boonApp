import { Image, Pressable, Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { AsyncStorage } from 'react-native';
import { getItem, setItem } from "expo-secure-store";
import { clear } from "../../../utils/AsyncStorage";
const Decor = () => {
	const [currentLang, setCurrentLang] = useState('uz')
	const langRefresh = () => {
		setCurrentLang(getItem('lang') || 'uz')
	}
	useEffect(() => {
		langRefresh()
	}, [])
	const icons = [
		require('../../../assets/icons/1.png'),
		require('../../../assets/icons/2.png'),
		require('../../../assets/icons/3.png'),
		require('../../../assets/icons/4.png'),
		require('../../../assets/icons/dark.png'),
		require('../../../assets/icons/white.png'),
	]
	const langData = [
		{
			id: 1,
			lang: "ru",
			name: 'Русский язык',
			icon: require('../../../assets/icons/ru.png')
		},
		{
			id: 2,
			lang: "uz",
			name: "O`zbek tili",
			icon: require('../../../assets/icons/uz.png'),
		},
	]

	const changeLangue = async (lang) => {
		setItem('lang', lang)
		langRefresh()
		console.log(currentLang);
	}


	return (
		<View className={'flex justify-start h-full items-center bg-bg-default'}>
			<View className={'mt-10 w-11/12 '}>
				<View>
					<Text className={'text-17'}>Тема приложения</Text>
				</View>
				<View className={'w-full my-4'}>
					<Text className={'text-13'}>Иконка приложения</Text>
				</View>
				<View className={'flex flex-row'}>
					<View className={'rounded-lg'}>
						<Image source={icons[0]} className={'w-16 h-16'} />
					</View>
					<View className={' ml-4  '}>
						<Image source={icons[1]} className={'w-16 h-16'} />
					</View>
					<View className={' ml-4'}>
						<Image source={icons[2]} className={'w-16 h-16'} />
					</View>
					<View className={' ml-4'}>
						<Image source={icons[3]} className={'w-16 h-16'} />
					</View>
				</View>
				<View className={'w-full my-4'}>
					<Text className={'text-13'}>Цветовая схема</Text>
				</View>
				<View className={'flex flex-row'}>
					<View className={'justify-center items-center'}>
						<Image source={icons[4]} className={'w-16 h-28'} />
						<View className={'mt-2 items-center'}>
							<Text className={'text-13'}>Темная</Text>
							<View className={'mt-2'}>
								<Entypo name={'circle'} size={20} color={'gray'} />
							</View>
						</View>
					</View>
					<View className={'ml-4 rounded-lg justify-center items-center'}>
						<Image source={icons[5]} className={'w-16 h-28'} />
						<View className={'mt-2 items-center'}>
							<Text className={'text-13'}>Светлая</Text>
							<View className={'mt-2'}>
								<Entypo name={'circle'} size={20} color={'gray'} />
							</View>
						</View>
					</View>
				</View>
				<View className={'w-full my-4'}>
					<Text className={'text-13'}>Языковая схема</Text>
				</View>
				<View className='felx flex-col gap-2'>
					{
						langData.map((item) => (
							<Pressable
								onPress={() => changeLangue(item.lang)}
								key={item.id} className={'border border-gray-200 flex flex-row rounded-lg bg-white py-2 px-4 items-center justify-between'}>
								<View className={'flex flex-row items-center gap-2'}>
									<View>
										<Image source={item.icon} className={'w-8 h-8'} />
									</View>
									<View>
										<Text className={`text-15 ${item.lang === currentLang ? 'font-medium tracking-wider' : ''} `}>{item.name}</Text>
									</View>
								</View>
								<View>
									<Ionicons size={22} name={item.lang === currentLang ? "radio-button-on" : "radio-button-off"} color={item.lang === currentLang ? "blue" : "gray"} />
								</View>
							</Pressable>
						))
					}
				</View>
			</View>
			<View className={'h-12 rounded-lg bg-btn-primary justify-center absolute bottom-5  w-11/12'}>
				<Text className={'text-center text-white'}>Изменить оформление</Text>
			</View>
		</View>
	)
}
export default Decor;