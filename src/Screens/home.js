import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
} from 'react-native'
import {
    Container,
    Content,
    Body,
    Header,
    Left,
    Right,
    Title,
    Thumbnail,
} from 'native-base'
import FABAdd from '../Components/fab';
import Search from '../Components/search';
import Notes from '../Components/notes';
import NavBar from '../Components/navBar'
import { TextInput } from 'react-native-gesture-handler';
import Menu, { MenuItem, } from 'react-native-material-menu'
import { connect } from 'react-redux';
import { getNotes, getNotesSearchSort } from '../Publics/Redux/Action/notes'
import { getCategories } from '../Publics/Redux/Action/categories'
import _ from 'lodash'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            sort: 'DESC',
        }
        this.limitSearch = _.debounce(this.findNotes, 500)
    }

    handleNavigate = () => {
        const { navigation } = this.props
        navigation.navigate('edit')
    }

    fetchDataNotes = () => {
        this.props.dispatch(getNotes())
    }

    fetchDataCategories = () => {
        this.props.dispatch(getCategories())
    }

    findNotes = (search, sort) => {
        this.props.dispatch(getNotesSearchSort(search, sort))
    }

    componentDidMount() {
        this.fetchDataNotes()
        this.fetchDataCategories()
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    }

    hideMenu = () => {
        this._menu.hide()
    }

    showMenu = () => {
        this._menu.show()
    }

    render() {
        console.disableYellowBox = true;
        console.log(this.limitSearch, this.state.search, this.state.sort)
        console.log('this.props.notes home:')
        console.log(this.props.notes.data)
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Thumbnail source={require('../Assets/profil2.jpg')} style={styles.thumbnailProfil} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 9 }}>
                        <Title style={{ alignSelf: 'center', color: 'Black', }}>Notes</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Menu
                            ref={this.setMenuRef}
                            button={
                                <TouchableOpacity
                                    onPress={this.showMenu} style={{ alignSelf: 'flex-end' }}>
                                    <Image source={require('../Assets/download.png')} style={styles.imageIcon} />
                                </TouchableOpacity>
                            }
                        >
                            <MenuItem
                                onPress={() =>
                                    this.findNotes(this.state.search, 'ASC' || this.state.sort)
                                }
                            >Ascending</MenuItem>
                            <MenuItem
                                onPress={() =>
                                    this.findNotes(this.state.search, 'DESC' || this.state.sort)
                                }
                            >Descending</MenuItem>
                        </Menu>
                    </Right>
                </Header>
                <TextInput
                    placeholder='Search...'
                    onChangeText={((text) => this.limitSearch(text, this.state.sort))}
                    style={styles.input} />
                <Notes navigation={this.props.navigation} />
                <View>
                <FABAdd />
                </View>
            </Container>
        )
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

const styles = StyleSheet.create({
    thumbnailProfil: {
        width: 35,
        height: 35,
    },
    imageIcon: {
        width: 25,
        height: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        borderWidth: 1.2,
        height: 40,
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
    }
});

export default connect(mapStateToProps)(Home)
