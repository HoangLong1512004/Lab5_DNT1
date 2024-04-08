import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Lab53_ph42693 = () => {
    const [iconVisible, seticonVisible] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />

            <ImageBackground style={{flex: 1}}
                source={{
                    uri: 'https://inkythuatso.com/uploads/thumbnails/800/2022/05/7-hinh-nen-one-piece-4k-cho-dien-thoai-inkythuatso-25-16-53-01.jpg'
                }}>
                <View style={styles.header}>
                    <View style={styles.tabar}>
                        <TouchableOpacity style={styles.button_ic}><Image style={{height:30,width:30}} source={{uri:'https://i.pinimg.com/564x/60/54/4a/60544a2ca04d9994819bdb9f6a9b6b99.jpg'}} /></TouchableOpacity>
                        <Text style={styles.textBase_1}>Longnhph42829</Text>
                        <TouchableOpacity style={styles.button_ic}><Image style={{height:30,width:30}} source={{uri:'https://i.pinimg.com/564x/60/54/4a/60544a2ca04d9994819bdb9f6a9b6b99.jpg'}} /></TouchableOpacity>
                    </View>

                    <View>
                        <View style={styles.header_title}>
                            <Text style={[styles.textBase]}>ĐẠI HẢI TRÌNH</Text>
                            <View style={styles.header_title_ic}>
                                <Image style={styles.ic_start} source={{uri:'https://i.pinimg.com/564x/60/54/4a/60544a2ca04d9994819bdb9f6a9b6b99.jpg'}} tintColor={'yellow'} />
                                <Text style={{ color: 'white', fontSize: 20 }}>5.0</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.body}>

                    <TouchableOpacity style={[styles.button_ic_hear]} onPress={()=> seticonVisible(!iconVisible)}>
                        <Image style={{height:30,width:30}} source={require('../anh/image.png')} tintColor={iconVisible ? 'red' : 'gray'} />
                    </TouchableOpacity>

                    <View style={styles.body_content}>
                        <View style={styles.header_title_ic}>
                            <Image style={{height:30,width:30}} source={{uri:'https://i.pinimg.com/564x/60/54/4a/60544a2ca04d9994819bdb9f6a9b6b99.jpg'}} tintColor={'#0000BB'} />
                            <Text style={[styles.textBase_1, { color: '#0000BB' }]}>Quảng Nam</Text>
                        </View>
                        <Text style={[styles.textBase_1, { color: 'black' }]}>Thông tin chuyến đi</Text>

                        <Text style={styles.body_content_txt} numberOfLines={6}>
                            Hội An là một thành phố trực thuộc tỉnh Quảng Nam,
                            Việt Nam. Phố cổ Hội An từng là một thương cảng quốc
                            tế sầm uất, gồm những di sản kiến trúc đã có từ hàng
                            trăm năm trước, được UNESCO công nhận là di sản văn
                            hóa thế giới từ năm 1999. Hội An là một thành phố trực
                            thuộc tỉnh Quảng Nam,
                            Việt Nam. Phố cổ Hội An từng là một thương cảng quốc
                            tế sầm uất, gồm những di sản kiến trúc đã có từ hàng
                            trăm năm trước, được UNESCO công nhận là di sản văn
                            hóa thế giới từ năm 1999.
                        </Text>
                    </View>

                </View>
            </ImageBackground>

            <View style={styles.footer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>$100</Text>
                    <Text style={{fontSize: 12, color: 'white'}}>/Ngày</Text>
                </View>
                <TouchableOpacity style={styles.footer_button}>
                    <Text style={[styles.textBase_1, { color: '#0000BB' }]}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Lab53_ph42693

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    header: {
        flex: 7,
        justifyContent: 'space-between'
    },
    body: {
        flex: 3,
        backgroundColor: '#EEEEEE',
        padding: 20,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },
    body_content: {
        gap: 10,
        paddingTop: 20,
    },
    body_content_txt: {
        fontSize: 14,
        color: 'gray',
    },
    footer: {
        height: 60,
        backgroundColor: '#0000BB',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    footer_button:{
        padding: 8,
        backgroundColor: 'white',
        width: '40%',
        alignItems: 'center',
        borderRadius: 10

    },
    tabar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        padding: 20,
    },
    button_ic: {
        width: 34,
        height: 34,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    button_ic_hear: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        position: 'absolute',
        right: 20,
        top: -25,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18
    },
    textBase: {
        color: '#fff',
        fontSize: 28,
        
        fontFamily: 'Browood'
    },
    textBase_1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    header_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    header_title_ic: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10
    },

})