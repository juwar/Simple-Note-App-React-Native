import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    Image,
    StyleSheet
} from 'react-native';
import {
    Right,
    Input,
    Button,
    Form,
    Item,
} from 'native-base'
import { connect } from 'react-redux';
import { postCategory, getCategories } from '../Publics/Redux/Action/categories';

class ModalSort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            imageUrl: '',
            modalVisible: false,
        }
    }

    createCategory = (data) => {
        this.props.dispatch(postCategory(data))
        this.props.dispatch(getCategories())
    }

    categoryChange = (values) => {
        this.setState({
            category: values
        })
    }

    imageUrlChange = (values) => {
        this.setState({
            imageUrl: values
        })
    }

    showDialog(isShow) {
        this.setState({ isDialogVisible: isShow })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View>
                <Modal
                    transparent
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,.5)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '80%', height: 150, backgroundColor: 'rgba(100,100,100,.5)' }}>
                            <View style={{ padding: 20, backgroundColor: 'white' }}>
                                <Form>
                                    <Item>
                                        <Input placeholder='Add Category' onChangeText={this.categoryChange} />
                                    </Item>
                                    <Item>
                                        <Input placeholder='Name Icon' onChangeText={this.imageUrlChange} />
                                    </Item>
                                </Form>
                                <View style={{ flexDirection: 'row' }}>
                                    <Right>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Button transparent onPress={() => { this.createCategory({ category: this.state.category, imageUrl: this.state.imageUrl }), this.setModalVisible(!this.state.modalVisible) }}>
                                                <Text style={{ fontSize: 20, marginRight: 10 }}>Add</Text>
                                            </Button>
                                            <Button transparent onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                                                <Text style={{ fontSize: 20, color: 'gray' }}>Cancel</Text>
                                            </Button>
                                        </View>
                                    </Right>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Image source={require('../Assets/plus.png')} style={styles.iconImage} />
                        <Text style={styles.textMenu}>Add Category</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

//map state to props to referring data in store
const mapStateToProps = state => {
    return {
        notes: state.notes,
        categories: state.categories
        // auth: state.auth
    }
}

export default connect(mapStateToProps)(ModalSort)

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