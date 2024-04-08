import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const lab4bai3 = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <SafeAreaView style={styles.background}>
        <KeyboardAvoidingView>
            <ScrollView>
                <Text style={styles.welcom}>Hi Welcome Back !!</Text>
                <Text style={styles.welcom2}>Hello Again You have been missed</Text>
                {/* // Logo app */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image resizeMode='contain'
                        source={require('../anh/toi.png')}
                        style={{ width: '100%', height: 170 }} />
                </View>
                <Text style={{ marginLeft: 20, color: 'black', fontWeight: 'bold', marginTop: 40, fontSize: 20 }}>Email Address</Text>
                {/* // Nhập username */}
                <TextInput
                    style={styles.khung}
                    value={email}
                    onChangeText={(txt) => { setemail(txt) }}
                    placeholder="Enter your email address"
                    placeholderTextColor="gray" />
                {/* // Nhập password */}
                <Text style={{ marginLeft: 20, color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Password</Text>
                <View>
                    <TextInput
                        style={styles.khung}
                        value={password}
                        onChangeText={(txt) => { setpassword(txt) }}
                        placeholder="Enter your password"
                        placeholderTextColor="gray"
                        secureTextEntry={!showPassword} />
                    <TouchableOpacity
                        onPress={toggleShowPassword}
                        style={{ position: 'absolute', right: 40, top: 20 }}>
                        <Image
                            source={showPassword ? require('../anh/toi.png') : require('../anh/toi.png')} // Điều này phụ thuộc vào tên biểu tượng của thư viện bạn đang sử dụng
                            style={{ width: 24, height: 24, tintColor: 'black' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.khungButton}>
                        <Text style={{ color: "black", textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>--------Or Login With--------</Text>
                </View>
                {/* // Button Login */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
                    <TouchableOpacity style={styles.khungButton1}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../anh/fbb.webp')}
                                style={{ width: 20, height: 20 }} />
                            <Text style={{ color: "black", textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 10, bottom: 3 }}>
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* // Button Google */}
                    <TouchableOpacity style={styles.khungButton1}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../anh/gg.jpg')}
                                style={{ width: 20, height: 20 }} />
                            <Text style={{ color: "black", textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 10, bottom: 3 }}>
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: "gray", fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>
                        Don't have account? Click</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: "black", fontWeight: 'bold', marginTop: 15 }}> Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default lab4bai3

const styles = StyleSheet.create({
    welcom: {
        fontSize: 27,
        color: "black",
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 20
    },
    welcom2: {
        fontSize: 20,
        color: "gray",
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20
    },
    khung: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 7,
        color: "red",
        fontSize: 20
    },
    khungButton: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        width: '25%',
        alignSelf: 'center',
        marginTop: 30
    },
    khungButton1: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 5
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
})