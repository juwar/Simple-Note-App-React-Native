import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import ModalCategory from './modalCategory'

class componentName extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.profil}>
                    <Image source={require('../Assets/profil2.jpg')} style={styles.imageProfil}/>
                    <Text style={styles.textProfil}>Shaloom Razade</Text>
                </View>
                <ScrollView>
                    <View style={{margin:10}}>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', marginLeft:20}}>
                                <Image source={require('../Assets/writing.png')} style={styles.iconImage}/>
                                <Text style={styles.textMenu}>Personal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:10}}>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', marginLeft:20}}>
                                <Image source={require('../Assets/portofolio.png')} style={styles.iconImage}/>
                                <Text style={styles.textMenu}>Work</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:10}}>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', marginLeft:20}}>
                                <Image source={require('../Assets/wishlist.png')} style={styles.iconImage}/>
                                <Text style={styles.textMenu}>Wishlist</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin:10}}>
                        <TouchableOpacity >
                            <ModalCategory/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default componentName;

const styles = StyleSheet.create({
    iconImage: {
        width:25,
        height:25,
    },
    textProfil: {
        color:'#000000',
        fontSize: 24,
        fontFamily: 'Open Sans',
        fontStyle:'normal',
        fontWeight: 'bold',
        lineHeight: 26,
        marginTop: 15,
    },
    textMenu: {
        color:'#000000',
        marginLeft:10,
        marginTop:3,
        fontSize: 22,
        fontFamily: 'Open Sans',
        fontStyle:'normal',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    view: {
        height: 150,
        backgroundColor: 'white'
    },
    profil:{
        alignItems: 'center',
        margin: 40,
        marginBottom: 30,
        justifyContent:'center',
    },
    imageProfil: {
        height: 90,
        width: 90,
        borderRadius: 60,
    },
});