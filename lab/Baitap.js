import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Baitap = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 6, justifyContent: 'space-between' }}
                source={{
                    uri: 'https://bizweb.dktcdn.net/100/393/859/products/32d17db8-3d87-4b2e-896e-b81ca961fa1d.jpg?v=1646228460197'
                }}>
                <View style={styles.header}>
                    <View style={styles.header_ic}>
                        <Image source={require('../img/Vectorback.png')} />
                    </View>
                    <View style={styles.header_right}>
                        <TouchableOpacity style={styles.header_ic}>
                            <Image source={require('../img/share-arrow.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.header_ic}>
                            <Image source={require('../img/cart.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.header_ic}>
                            <Image source={require('../img/option.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ImageBackground style={styles.header_bottom}
                    source={{
                        uri: 'https://www.gosell.vn/blog/wp-content/uploads/2022/10/Anh-shopee-1.jpg'
                    }}>
                    <View></View>
                    <TouchableOpacity style={styles.header_bottom_button}>
                        <Text style={{ color: 'white', fontSize: 12 }}>Nhắc nhở tôi</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ImageBackground>

            <View style={styles.body}>
                <View style={[{ flex: 3, backgroundColor: 'gray' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{flex: 8}}>
                            <Text style={{ backgroundColor: 'red', color: 'white' }} numberOfLines={2}>Yêu thích+
                                <Text style={{ backgroundColor: 'white', color: 'black' }} > Trong thời đại hiện nay, với mức sống ngày càng được cải thiện và nâng cao kéo theo đó là nhu cầu về tinh thần cũng như vật chất ngày càng được đòi hỏi cao hơn về chất lượng. Đặc biệt đó chính là nhu cầu giải trí của con người chúng ta. Ở các nước phương Tây, việc đến rạp phim đã trở nên quá quen thuộc từ hàng thế kỉ với người dân ở đó, riêng đối với những nước kém phát triển hơn trong đó có Việt Nam thì việc tiếp xúc với công nghệ giải trí này chỉ mới phát triển nhiều thập kỷ trở lại đây.
                                    Bởi vậy, qua một thời gian nghiên cứu, phát triển và thử nghiệm ứng dụng thực tế, phạm vi và mục tiêu của dự án, cách thức thực hiện, các tính năng chính của ứng dụng và kết quả đạt được. Chúng tôi cũng xin gửi lời cảm ơn đến nhà trường, thầy Lê Hồng Duy cùng các bạn đã đồng hành và hỗ trợ chúng tôi trong suốt quá trình thực hiện dự án này.
                                </Text>
                            </Text>
                        </View>
                        <Image source={require('../img/seal.png')} style={[{flex: 2}]} />
                    </View>
                    <View></View>
                    <View></View>
                </View>
                <View style={[{ flex: 1, backgroundColor: 'green' }]}></View>
                <View style={[{ flex: 1, backgroundColor: 'pink' }]}></View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footer_button}>
                    <TouchableOpacity style={styles.footer_button_ic}>
                        <Image source={require('../img/messenger.png')} style={styles.header_ic} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer_button_ic}>
                        <Image source={require('../img/add-to-cart.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: 'red' }}>
                    <TouchableOpacity style={styles.footer_button_ic}>
                        <Text style={styles.textBase}>Mua ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Baitap

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    header_ic: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_right: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-around',
    },
    header_bottom: {
        height: 70,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header_bottom_button: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 8,
        borderRadius: 7,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'white'
    },
    body: {
        height: '30%',
        backgroundColor: 'yellow',
        gap: 10,
        padding: 7
    },
    footer: {
        height: 60,
        flexDirection: 'row'
    },
    footer_button: {
        flex: 1, backgroundColor: '#33CCCC',
        flexDirection: 'row',
    },
    footer_button_ic: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#009900'
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'white'
    },
    textBase: {
        color: 'white',
        fontSize: 20
    }



})