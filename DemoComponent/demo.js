// import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React, { useCallback, useState } from 'react'

// const Demo = () => {
//   const [reloading, setreloading] = useState(false);
//   // const startReload = useCallback (() =>( ), [])
//     const startReload = useCallback (() =>{
//       setreloading(true);
//       console.log('bawts dau reload');
//       setTimeout(()=>{
//         setreloading(false),
//         console.log('ket thuc');
//       },3000);
// }, [])

//   return (
//     <View style={{backgroundColor:'Cyan'}}>
//       <Text>Demo</Text>
//     <SafeAreaView>
//     <ScrollView
//     horizontal={false}
//     refreshControl={<RefreshControl refreshing = {reloading} onRefresh={startReload}/>
//     }
//     >
//     <Text style= {{fontSize:40, backgroundColor:'red'}}>
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu
//       Noi dung con ghieu

//     </Text>

//     </ScrollView>

//     </SafeAreaView>

//     </View>
//   )
// }

// export default Demo

// const styles = StyleSheet.create({})


// ====================================================================
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const demo = () => {
const[showDialog, setShowDialog] = useState(false);


  return (
    <View>
      <Text>App</Text>
      <Button title='Mo dialog' onPress={()=> setShowDialog(true)}/>

      <Modal visible={showDialog}
      transparent={true}
      onRequestClose={()=>{
        setShowDialog (false)
      }}
      >
        <View style = {styles.khung}>
          <View style= {styles.Dialog}>
            <Text>noi dung trong dialog</Text>
            <Button title='Dong dialog' onPress={()=> setShowDialog(false)}/>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default demo

const styles = StyleSheet.create({
  khung:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  Dialog:{
    with: 350,
    heigh:300,
    backgroundColor:'red',
    padding: 10,
    borderRaius: 10,
  }
})


//========================================================================================================
// import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useState } from 'react'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
// //chữ cái đầu tiên viết hoa, tên hàm phải viết hoa
// const Demo = () => {
  
  
//   const [hoTen, sethoten] = useState('');
//   console.log("bắt đầu chạy app");
//     return (
//     <View style= {st.khung}>
//         <Image style={st.Image} source={require ('../anh/hieu.jpg')}></Image>
//       <Text style= {st.Tieude}>demoInput</Text>
//       <TextInput style={st.Input}
//       onChangeText={(txt) => sethoten(txt)}
//       placeholder='nhập họ tên'/>
//       <Text style={st.Tieude}>Họ Tên: {hoTen}</Text>
    
    
    
    
//     </View>
//   )
// }

// export default Demo

// const st = StyleSheet.create({
//     khung:{backgroundColor:'cyan', padding: 28},
//     Tieude:{color:'red',fontSize:40},
//     Input: {borderColor: 'red',borderWidth: 1, borderRadius: 10, padding: 20},
//     Image:{height: 350, width: 210}
// })


