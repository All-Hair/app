import React from 'react';
import { View, Text, Button, StyleSheet, Image, SafeAreaView } from 'react-native';
import Navbar from '../../components/Navbar';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 120,
    borderRadius: 50,
    alignSelf: 'center',
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

const Cart = () => {
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    setItems([...items, { name: 'Item ' + (items.length + 1) }]);
  };

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <SafeAreaView >
      
      <Text style={{
            fontSize: 45,
            fontWeight: "bold",
            marginVertical: 20,
            marginTop: 20 ,
            alignSelf: 'center',

            }}>Cart</Text>
    <View style={styles.container} >
      
      <Text>Shopping Cart</Text>
      <View style={styles.items}>
        {items.map((item, index) => (
          <View key={item.name} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image
           style={styles.avatar}
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_qb00E2YueF-BC5-CX3nzZLwoaEZfJ_8fw&usqp=CAU'}}
               />
            <Button
              title="Remove"
              onPress={() => removeItem(index)}
              buttonStyle={styles.removeButton}
            />
          </View>
        ))}
      </View>
      <Button
        title="Add Item"
        onPress={addItem}
        buttonStyle={styles.addButton}
      />
    </View>
    <Navbar />
  
    </SafeAreaView>
    

   
  );
};



export default Cart;
