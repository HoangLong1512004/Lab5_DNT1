import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const data = [
  {
    id: 1,
    name: 'Phạm Minh Hiếu',
    position: 'Hải Dương',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },
  {
    id: 2,
    name: 'Đào Duy Minh Long',
    position: 'Thanh Hóa',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },
  {
    id: 3,
    name: 'Hòa Quang Linh',
    position: 'Thái Bình',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },
  {
    id: 4,
    name: 'Nguyễn Thế Kỳ Anh',
    position: 'Hà Nội',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },
  {
    id: 5,
    name: 'Kiều Ngọc Loan',
    position: 'Thái Bình',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },
  {
    id: 6,
    name: 'Bùi Tuấn Duy',
    position: 'Bình Định',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },
  {
    id: 7,
    name: 'Ngọc Trinh Trinh',
    position: 'Thái Nguyên',
    photo: 'https://qfoody.vn/wp-content/uploads/2022/04/cf-den-phin.jpg'
  },

]
const ContactItem = ({contact}) => (
  <View style={styles.listItem}>
    <Image source={{uri: contact.photo}} style={styles.avatar}/>
    <View style={styles.bodyItem}>
      <Text style={styles.nameText}>{contact.name}</Text>
      <Text>{contact.position}</Text>
    </View>
    <TouchableOpacity style={styles.btnCall}>
      <Text style={styles.callText}>Gọi</Text>
    </TouchableOpacity>
  </View>
)

const lab4bai1 = () => {
 
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor = {item => item.name }/>
    </View>
  )
}

export default lab4bai1

const styles = StyleSheet.create({
 
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  callText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
  nameText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  listItem:{
    width: '90%',
    height: 100,
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 20
  },
})