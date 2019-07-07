import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { getNotesSearchSort } from '../Publics/Redux/Action/notes'
import _ from 'lodash'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            sort: 'DESC',
        }
        this.limitSearch = _.throttle(this.findNotes, 1000)
    }

    findNotes = (search, sort) => {
        this.props.dispatch(getNotesSearchSort(search, sort))
    }

    // categoryChange = (values) => {
    //     this.findNotes(values,this.state.sort)
    //     console.warn(values)
    // }
    
    render() {
        return (
            <View>
                <TextInput 
                placeholder='Search...' 
                onChangeText = {(text) => this.limitSearch(text,this.state.sort)}
                style={styles.input} />
            </View>
        )
    }
}

//map state to props to referring data in store
const mapStateToProps = state => {
    return {
        notes: state.notes,
        // auth: state.auth
    }
}

export default connect(mapStateToProps)(Search)

const styles = StyleSheet.create({
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
})