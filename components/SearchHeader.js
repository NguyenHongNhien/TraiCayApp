import React from 'react';
import {View,TouchableOpacity,TextInput,Image,Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { useNavigation } from '@react-navigation/native';
import { primaryColor } from '../assets/color';

function SearchHeader({searchKeyword,setSearchKeyword}) {
    const navigation = useNavigation();

    return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 70,
                    backgroundColor: 'rgba(255,255,240,0.1)',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    
                }}
            >
                <TouchableOpacity
                    style={{
                        position: 'relative',
                        top: 0,
                        left: 10,
                        right: 0,
                        bottom: 0,
                        borderRadius: 30,
                        padding: 5,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name='arrow-left' size={30} color='#000'
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    marginLeft: 20,
                    marginRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    backgroundColor:'#fff'
                }}>
                    <TextInput
                        placeholder='Tìm thứ bạn muốn'
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            paddingLeft: 20,

                        }}
                        value={searchKeyword}
                        onChangeText={(text) => setSearchKeyword(text)}
                    />
                    <TouchableOpacity >
                        <Image source={require('../assets/searchicon.png')} style={{ height: 30, width: 30, marginRight: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
    );
}

export default SearchHeader;
