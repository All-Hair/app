import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'

const OneShop = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text  style={{  alignSelf: 'center',fontSize: 35,}}>DETAIL PRODUCT </Text> 
    <View style={styles.container}>
            <Image
           style={styles.avatar}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU'}}
               />
               <View style={{  backgroundColor: '#E1E2E2',height: 200,width: 250,}}>
               <Text style={{fontSize: 35,}}> Description</Text>
               <Text  style={{fontSize: 20,}}>iwhibsibiubiubsuibiusuibuhicsoIO</Text>
               </View>
             </View>
                <TouchableOpacity
                style={styles.button} title='Buy 'onPress={()=>{navigation.navigate('Cart')}}>
                   <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
             
       <Navbar/>
              
    </SafeAreaView>
  )
}

export default OneShop

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0891b2',
    paddingVertical: 50,
    paddingHorizontal: 120,
    borderRadius: 50,
    alignSelf: 'center',
    // width: 500,
    maxWidth: '100%',
    alignSelf: 'center',
    alignItems: 'center'

  },
  timings: {
    color: '#fff',
    fontSize: '14px'
  },
  metaContainer: {
    justifyContent: 'space-between'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    height: 200,
    width: 250,
    // borderRadius: 100
  },
  description: {
    color: 'white',
    marginTop: 5,
    fontSize: 20
  },
  button: {
    backgroundColor: '#CCC9C0',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14
  }
});