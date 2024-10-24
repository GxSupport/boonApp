import { Alert, BackHandler, FlatList, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useCallback, useContext, useEffect, useState } from "react";
import ItemProduct from "../../../components/itemProduct";
import Limit from "../../../components/limit";
import ProgressLimit from "../../../components/progressLimit";
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useFocusEffect, useNavigation } from "expo-router";
import themeContext from "../../../theme/themeContext";
import DialogComponent from "../../../components/Dialog";
import { getLimitData, handleChooseCard } from "../../../store/Slicers/Products";
import Modal from "../../../components/Modal";
import ModalComponent from "../../../components/Modal";
const home = () => {
	const platform = Platform.OS;
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const navigation = useNavigation();
	const { limitData, application, isLoading, chooseCardState } = useSelector(state => state.ProductSlicer)
	const [quit, setQuit] = useState(false)
	const [modalVisible, setModalVisible] = useState(false);
	const Th = useContext(themeContext)
	useEffect(() => {
		dispatch(getLimitData())
	}, []);

	const hanldeChooseCard = (prop) => {
		Alert.alert(t('alertHeading'), t('alertQuestion'), [
			{
				text: t('cancel'),
				style: 'cancel',
			},
			{
				text: 'OK', onPress: () => {
					dispatch(handleChooseCard(prop))
					setModalVisible(false)
				}
			},
		]);
	}

	useEffect(() => {
		const backAction = () => {
			if (modalVisible) {
				setModalVisible(false);
				return true;
			}
			return false;
		};
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		);
		return () => backHandler.remove();
	}, [modalVisible]);
	useFocusEffect(
		useCallback(() => {
			const backAction = () => {
				setQuit(true)
				return true;
			};
			BackHandler.addEventListener('hardwareBackPress', backAction);
			return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
		}, [navigation])
	);

	if (isLoading) {
		return <Loading loading={isLoading} />
	}
	return (
		<SafeAreaView className={'h-full pt-3 items-center'} style={{ backgroundColor: Th.backgroundColor }}>
			<DialogComponent isAlert={quit} setAlert={setQuit} description={t('closeQuestion')} title={t('close_text')}
				handle={BackHandler.exitApp}
				handleTitle={t('close')}
			/>
			<StatusBar
				backgroundColor={Th.backgroundColor}
				barStyle={Th.barStyle}
			/>
			{limitData?.limit_list?.data &&
				<ModalComponent visible={modalVisible} setState={setModalVisible} data={limitData?.limit_list?.data} _id={chooseCardState?.guidFinProduct} />
			}
			<View className={'w-full'}>
				<View className={'w-full justify-center items-center overflow-visible h-22'}>
					<Limit limit={chooseCardState?.limit} title={chooseCardState?.month} setState={setModalVisible}  />
					<ProgressLimit used={application?.products.reduce((a, b) => a + parseFloat(b.sale_price), 0)} limit={chooseCardState?.limit} page={'home'} />
				</View>
			</View>
			<View className={' justify-start items-start w-11/12 flex-1 py-2'}>
				<View className={' flex flex-row'}>
					<View>
						<Text className={'text-17 font-bold'} style={{ color: Th.color }} > {t('the_chosen_ones')} </Text>
					</View>
					<View className={'mt-1 -ml-2 flex flex-row'}>
						<Entypo name={'dot-single'} size={16} color={'gray'} />
						<Text className={'text-gray -mt-0.5 -ml-1  text-13'}>{limitData.products?.length} {t('goods')} </Text>
					</View>
				</View>
				{limitData?.products?.length == 0 &&
					<View className={'mr-3 mt-1 flex-1 items-center justify-center '}>
						<Text className={'text-gray text-15 text-center'}> {t('scan_to_add')} </Text>
					</View>
				}
				{limitData?.products?.length > 0 ?
					<ScrollView>
						<View className={platform === 'ios' ? 'w-full' : ' w-full h-full'}>
							<FlatList
								className='mt-2'
								data={limitData?.products} renderItem={
									({ item }) => (<ItemProduct prop={item} page={'home'} />)
								} keyExtractor={(_, index) => index}
								scrollEnabled={false}
							/>
						</View>
					</ScrollView>
					: (
						<View className='items-center justify-center flex-1 flex-col w-full'>
							<Text style={{ color: Th.color }} >
								{t('no_data')}
							</Text>
						</View>
					)
				}
			</View>
		</SafeAreaView>
	)
}
export default home;

const styles = StyleSheet.create({
	modalHeaderText: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 10,
		textAlign: 'center'
	},
	closebtn: {
		fontSize: 30,
		color: 'gray'
	},
	closeBox: {
		display: "flex",
		alignItems: "flex-end",
		paddingRight: 5,
		paddingTop: 5
	}
})