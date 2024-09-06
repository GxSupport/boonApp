import { FlatList, Image, ScrollView, ScrollViewComponent, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InfoProduct from "../../components/infoProduct";
import { router } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Token, URL } from "../../api/const";
import Loading from "../../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
const id = () => {
	const [isLoading, setLoading] = useState(false)

	const [singleInfo, setSingleInfo] = useState(null)
	const { params } = useRoute();

	const getSingleProduct = async () => {
		setLoading(true)
		if (params.id) {
			try {
				const res = await axios(`${URL}/application/product_info/${params?.id}`, {
					headers: {
						'Authorization': `Bearer ${Token}`,
					}
				});
				// console.log('single prod`uct', JSON.stringify(res.data, null, 2));
				setSingleInfo(res.data)
			} catch (error) {
				console.log(error);
			}
			finally {
				setLoading(false)
			}
		}
	}
	useEffect(() => {
		getSingleProduct()
	}, [params.id])

	if (isLoading) {
		return <Loading loading={isLoading} />
	}
	return (
		<SafeAreaView style={styles.container}>
			{singleInfo ? (
				<View style={styles.wrapper}>
					<ScrollView contentContainerStyle={styles.scrollViewContent}>
						<Text style={styles.headerText}>
							{singleInfo?.name}
						</Text>
						<Image
							source={{ uri: singleInfo?.image }}
							style={styles.image}
							onError={(error) => console.error('Rasm yuklanmadi', error)}
						/>
						{singleInfo?.info.map((section, sectionIndex) => (
							<View key={sectionIndex} style={styles.section}>
								<Text style={styles.sectionTitle}>
									{section.name}
								</Text>
								{section.characters.map((char, charIndex) => (
									<View key={charIndex} style={styles.character}>
										<Text style={styles.characterName}>{char.name}: </Text>
										<Text style={styles.characterValue}>{char.value}</Text>
									</View>
								))}
							</View>
						))}
					</ScrollView>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Добавить в корзину</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.emptyState}>
					<Text style={styles.emptyStateText}>
						Malumot topilmadi
					</Text>
				</View>
			)}
		</SafeAreaView>
	)
}
export default id;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	wrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	scrollViewContent: {
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 19,
	},
	image: {
		width: '100%',
		height: 150,
		resizeMode: 'contain',
	},
	section: {
		marginVertical: 10,
	},
	sectionTitle: {
		fontSize: 19,
		fontWeight: 'bold',
		color: 'black',
		marginBottom: 5,
	},
	character: {
		flexDirection: 'row',
		paddingVertical: 3,
		flexWrap:"wrap"
	},
	characterName: {
		fontSize: 13,
		color: 'gray',
	},
	characterValue: {
		fontSize: 13,
		color: 'black',
	},
	button: {
		backgroundColor: '#007bff',
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	buttonText: {
		color: 'white',
		fontSize: 15,
	},
	emptyState: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyStateText: {
		fontSize: 19,
		fontWeight: 'bold',
	},
});