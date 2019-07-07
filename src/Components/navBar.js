import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'
import {
    Body,
    Header,
    Left,
    Right,
    Title,
    Thumbnail,
} from 'native-base'
import { withNavigation } from 'react-navigation';
import Menu, { MenuItem, } from 'react-native-material-menu'
import { connect } from 'react-redux'
import { getNotesSearchSort } from '../Publics/Redux/Action/notes'

class navBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            sort: 'DESC',
        }
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

    findNotes = (search, sort) => {
        this.props.dispatch(getNotesSearchSort(search, sort))
    }

    render() {
        return (
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
        );
    }
}

//map state to props to referring data in store
const mapStateToProps = state => {
    return {
        notes: state.notes,
        // auth: state.auth
    }
}

export default connect(mapStateToProps)(navBar)
// export default withNavigation(navBar)

const styles = StyleSheet.create({
    thumbnailProfil: {
        width: 35,
        height: 35,
    },
    imageIcon: {
        width: 25,
        height: 25,
    }
});