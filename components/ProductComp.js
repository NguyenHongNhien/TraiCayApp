import React from "react";
import {View , StyleSheet, Image, Text,TouchableOpacity} from 'react-native'

function ProductComp({srcImg, name, price, onClick}) {
  
    return ( 
            <TouchableOpacity style={styles.container} onPress={onClick}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image source={{uri:srcImg}} style={styles.img}/>
                        <Text style={styles.txtName}>{name}</Text>
                      <View style={styles.wrap}>
                            <Text style={styles.txtPrice}>{price}/1kg</Text>
                      </View>
                    </View>
            </TouchableOpacity>
     );
}
const styles = StyleSheet.create({
    container: {
        width:'47%',
        height:210,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 3,
    },
    img: {
        borderRadius:30,
        width: 150,
        height: 150,
        resizeMode: 'cover',
        alignSelf:'center'
    },
    contentContainer: {
        flex: 1,
        padding: 10,
    },
    txtName: {
        fontSize: 16,
        color: '#000',
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    txtPrice: {
        fontSize: 14,
        color: 'red',
    },
    txtSold: {
        fontSize: 12,
        color: '#000',
        marginLeft:20
    },
})
export default ProductComp;