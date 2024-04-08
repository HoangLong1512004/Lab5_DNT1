import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Modal,Pressable } from 'react-native'
import React, { useState } from 'react'
//chữ cái đầu tiên viết hoa, tên hàm phải viết hoa
const Demo = () => {
  const [ketQua, setKetQua] = useState('')
  const [soNhat, setsoNhat] = useState('')
  const [soHai, setsoHai] = useState('')

  const [modalVisible, setModalVisible] = useState(false);
  const [modalProVisible, setModalProVisible] = useState(false);

  const sum = () => {
    const sum1 = Number(soNhat + soHai)
    setKetQua(sum1 + '')
  }
  const tru = () => {
    const sum1 = Number(soNhat - soHai)
    setKetQua(sum1 + '')
  }
  const showAlert = () => {
    Alert.alert(
      'Kết quả',
      `Số học ${ketQua}`
    )
  }
  const nhan = () => {
    const sum1 = Number(soNhat * soHai)
    setKetQua(sum1 + '')
    console.log(ketQua);
  }
  const chia = () => {
    const sum1 = Number(soNhat / soHai)
    setKetQua(sum1 + '')
  }

  return (
    <View>
      <View style={styles.background}>
        <View style={styles.heading1}>

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Kết quả: {ketQua}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <Text>MÁY TÍNH ĐIỆN TỬ </Text>
        </View>
        <View>
          <Text style={styles.heading2}>Số học {ketQua}</Text>
        </View>
        <View>
          <TextInput style={styles.input1} placeholder='Nhập số thứ nhất'
            onChangeText={(text) => setsoNhat(Number(text))} />
        </View>
        <View>
          <TextInput style={styles.input1} placeholder='Nhập số thứ hai'
            onChangeText={(text) => setsoHai(Number(text))} />
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => sum()}>
            <Text style={styles.icon1}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { tru(), showAlert() }}>
            <Text style={styles.icon2}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { nhan() }}>
            <Text style={styles.icon3}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setModalVisible(true), chia() }}>
            <Text style={styles.icon4}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalProVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalProVisible(!modalProVisible);
          }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', flexDirection: 'column' }}>
            <View style={styles.containerModal}>
              <Text style={styles.text}>Nguyễn Hoàng Long</Text>
              <Text style={styles.text2}>Email: longnhph42829@fpt.edu.vn</Text>
              <View>
                <Image style={styles.img} source={require('../anh/toi.png')} />
              </View>
              <TouchableOpacity style={[styles.button, { flex: 0, padding: 20, margin: 10 }]}
                onPress={() => setModalProVisible(!modalProVisible)}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={{ margin: 10, marginLeft: 80, marginRight: 80, borderColor: 'gray', borderWidth: 1, borderRadius: 10, padding: 8 }} onPress={() => { setModalProVisible(true) }}>
          <Text style={[styles.text1, { fontSize: 20 }]} >Giới thiệu</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
export default Demo

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    marginTop: 20
  },
  heading1: {
    color: 'red', fontSize: 40, textAlign: "center", alignItems: "center", margin: 10, backgroundColor: "blue"
  },
  heading2: {
    color: 'black',
    marginTop: 10
  },
  input1: {
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    color: 'blue',
    marginLeft: 50,
  },
  icon: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon1: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'blue',
    marginLeft: 30,
  },
  icon2: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'blue',
    marginLeft: 20
  },
  icon3: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'blue',
    marginLeft: 20
  },
  icon4: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'blue',
    marginLeft: 20
  },
  containerModal: {
    width: '94%',
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 40
  },
  text: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center'
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'pink',
    textAlign: 'center'
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 10
  }
})