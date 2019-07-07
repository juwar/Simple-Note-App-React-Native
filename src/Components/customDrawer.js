import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Alert,
} from "react-native";

import ModalCategory from './modalCategory'
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from "../Publics/Redux/Action/categories";
import { getNotesSearchSort } from "../Publics/Redux/Action/notes";
import { Icon } from "native-base";

class Drawer extends Component {

    deleteData = (id) => {
        Alert.alert(
            '',
            'Are you sure, want to delete this data ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.warn('NO Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Ok',
                    onPress: () => (this.props.dispatch(deleteCategory(id)), this.props.dispatch(getCategories()), console.warn('OK Pressed' + id))
                },
            ],
            { cancelable: false },
        );
    }

    _keyExtractor = (item, index) => item.idCategory

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.profil}>
                        <Image source={require('../Assets/profil2.jpg')} style={styles.imageProfil} />
                        <Text style={styles.textProfil}>Shaloom Razade</Text>
                    </View>
                    <FlatList
                        data={this.props.categories.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ margin: 10 }}>
                                    <TouchableOpacity
                                    onLongPress={() => this.deleteData(item.idCategory)}
                                    onPress= {() => (this.props.dispatch(getNotesSearchSort('', 'DESC')), console.warn('OK Pressed' + item.category))}
                                    >
                                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                            {/* <Image source={(item.image_url)} style={styles.iconImage} /> */}
                                            <Icon name={item.image_url}></Icon>
                                            <Text style={styles.textMenu}>{item.category}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                    <View style={{ margin: 10 }}>
                        <TouchableOpacity >
                            <ModalCategory />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
        // auth: state.auth
    }
}

export default connect(mapStateToProps)(Drawer)

const styles = StyleSheet.create({
    iconImage: {
        width: 25,
        height: 25,
    },
    textProfil: {
        color: '#000000',
        fontSize: 24,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 26,
        marginTop: 15,
    },
    textMenu: {
        color: '#000000',
        marginLeft: 10,
        marginTop: 3,
        fontSize: 22,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    view: {
        height: 150,
        backgroundColor: 'white'
    },
    profil: {
        alignItems: 'center',
        margin: 40,
        marginBottom: 30,
        justifyContent: 'center',
    },
    imageProfil: {
        height: 90,
        width: 90,
        borderRadius: 60,
    },
});