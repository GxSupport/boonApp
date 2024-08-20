import { router } from "expo-router";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

const Payments = () => {
    const bg_backg = require("../../../assets/cards/card_background.png")
    const cardImg = [
        {
            title: "Humo",
            img: require('../../../assets/cards/HUMO.jpg')
        },
        {
            title: "MasterCard",
            img: require('../../../assets/cards/Master.png')
        },
        {
            title: "Uzcard",
            img: require('../../../assets/cards/Uzcard.png')
        },
        {
            title: "JCB",
            img: require('../../../assets/cards/JCB.jpg')
        },
    ]
    const mainCard =
        { cardNumber: '1234 5678 9012 3456', cardType: 'Uzcard', validThru: '08/25', bgImg: '', card_owner: 'Card Owner' }
    const extraCards = [
        { id: 1, cardNumber: '1111 2222 3333 4444', cardType: 'Humo', validThru: '07/23', bgImg: '', card_owner: 'Card Owner' },
        { id: 2, cardNumber: '5555 6666 7777 8888', cardType: 'MasterCard', validThru: '11/21', bgImg: '', card_owner: 'Card Owner' },
        { id: 3, cardNumber: '9999 0000 1111 2222', cardType: 'American Express', validThru: '09/27', bgImg: '', card_owner: 'Card Owner' }
    ]

    const getIdEdit = (ID) => {
        alert(ID)
    }

    return (
        <ScrollView className={'bg-bg-default h-full'}>
            <View className='px-5 ' >
                <View>
                    <Text className='font-normal text-lg mb-3'>Основная карта</Text>
                    <ImageBackground source={bg_backg} resizeMode="cover" className='mb-3 p-5 py-8 rounded-xl overflow-hidden' >
                        <View>
                            <Text className='text-[#EBEBEB] font-semibold'>{mainCard.cardType}</Text>
                            <Text className='text-[#EBEBEB] my-1 text-15 font-bold' >{mainCard.cardNumber}</Text>
                            <Text className='text-[#EBEBEB] font-semibold' >{mainCard.card_owner}</Text>
                            <View className='flex flex-row  justify-between items-end mt-5' >
                                <Text className='text-[#EBEBEB]  font-semibold'>{mainCard.validThru}</Text>
                                <View className='w-11 h-11'>
                                    {
                                        cardImg.map(({ title, img }, index) => (
                                            mainCard.cardType === title &&
                                            <Image key={index} source={img} className='w-full h-full ' />
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View>
                    <Text className='font-normal text-lg mb-3'>Дополнительные карты</Text>
                    {extraCards.map((card, index) => (
                        <ImageBackground key={index} source={bg_backg} resizeMode="cover" className='mb-3 p-5 py-8 rounded-xl overflow-hidden' onTouchEnd={() => router.push(`/setting/editCard/${card.id}`)}>
                            <View>
                                <Text className='text-[#EBEBEB] font-semibold'>{card.cardType}</Text>
                                <Text className='text-[#EBEBEB] my-1 text-15 font-bold' >{card.cardNumber}</Text>
                                <Text className='text-[#EBEBEB] font-semibold' >{card.card_owner}</Text>
                                <View className='flex flex-row  justify-between items-end mt-5' >
                                    <Text className='text-[#EBEBEB]  font-semibold'>{card.validThru}</Text>
                                    <View className='w-11 h-11'>
                                        {
                                            cardImg.map(({ title, img }, index) => (
                                                card.cardType === title &&
                                                <Image key={index} source={img} className='w-full h-full ' />
                                            ))
                                        }
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}
export default Payments;