import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Lab53_ph42693 from './Lab53_ph42693'

const Lab52_ph42693 = () => {
  return (
    <ImageBackground style={{width: '100%', height: '100%'}}
    source={{
        uri: 'https://inkythuatso.com/uploads/thumbnails/800/2022/05/7-hinh-nen-one-piece-4k-cho-dien-thoai-inkythuatso-25-16-53-01.jpg'
    }}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <View style= {styles.container}>
        <Text style={styles.text1}>Discover {'\n'}world with us</Text>
        <Text style={styles.text2}>Chào mừng bạn quay trở lại với chúng tôi
        {'\n'}hãy tiếp tục khám phá nào
        {'\n'}cùng nhau đi tìm kho báu của vua hải tặc thôi</Text>

        <TouchableOpacity style={styles.button}
        >
            <Text style={{fontSize: 15}}>Get Started</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default Lab52_ph42693

const styles = StyleSheet.create({
    container:{
        flex: 1,
        gap: 20,
        padding: 30,
        justifyContent: 'center'
    },
    text1:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    text2:{
        fontSize: 12,
        color: 'white'
    },
    button:{
        padding: 12,
        backgroundColor: 'white',
        borderRadius: 8,
        width: '40%',
        alignItems: 'center'
    }
})