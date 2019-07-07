import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native'
import {
    Card,
    CardItem,
    Body,
} from 'native-base'
import { connect } from 'react-redux';
import moment from 'moment'
import { getNotes, deleteNotes, getMoreNotes } from '../Publics/Redux/Action/notes'

// function createRows(data, columns) {
//     const rows = Math.floor(data.length / columns); 
//     let lastRowElements = data.length - rows * columns; 
//     while (lastRowElements !== columns) { 
//       data.push({ 
//         id: `empty-${lastRowElements}`,
//         name: `empty-${lastRowElements}`,
//         empty: true 
//       });
//       lastRowElements += 1;
//     }  return data; 
//   }

class Notes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            page: 1,
        };
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }

    moreData = () => {
        console.log('Masuk Aksi')            
        if (this.state.page < this.props.notes.totalPage) {
            console.log('Masuk')
            this.setState({
                page: this.state.page + 1
            },
            () => this.props.dispatch(getMoreNotes(this.state.page)))
        } else {
            console.log('ga jalan broo')
        }
    }
    
    fetchDataNotes = () => {
        this.props.dispatch(getNotes())
        this.setState({
            page: 0
        })
    }

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
                    onPress: () => (this.props.dispatch(deleteNotes(id)), this.props.dispatch(getNotes()), console.warn('OK Pressed'))
                },
            ],
            { cancelable: false },
            );
        }
        
        _keyExtractor = (item, index) => item.id

    render() {
        state = {
            page: 1,
        }

        console.log('this.props.notes:')
        console.log(this.props.notes.totalPage)
        console.log(this.state.page)
        const columns = 2;
        
        return (
            // <SafeAreaView>
                <FlatList
                    // data={createRows(this.props.notes.data, columns)}
                    data={this.props.notes.data}
                    keyExtractor={this._keyExtractor}
                    numColumns={2}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.moreData}
                    refreshing={this.props.notes.isLoading}
                    onRefresh={this.fetchDataNotes}
                    renderItem={({ item }) => {
                        if (item.empty) {
                            return <View style={[styles.card, styles.itemEmpty]} />
                        }
                        if (item.category === 'Dreams') {
                            categoryColor = '#2FC2DF'
                        } else if (item.category === 'How') {
                            categoryColor = '#ff8a86'
                        } else if (item.category === 'Daily') {
                            categoryColor = '#39da96'
                        } else {
                            categoryColor = '#c6a7d3'
                        }
                        return (
                            <Card style={[styles.card, { backgroundColor: [categoryColor] }]}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Edit', item)}
                                    onLongPress={() => this.deleteData(item.id)}
                                >
                                    <CardItem style={[styles.cardItem, { backgroundColor: [categoryColor] }]}>
                                        <Body>
                                            <View style={{ alignSelf: 'flex-end' }}>
                                                <Text style={styles.date}>
                                                    {moment(item.time).format('D MMM YYYY HH:MM')}
                                                </Text>
                                            </View>
                                            <Text style={styles.title} numberOfLines={1}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.category} numberOfLines={1}>
                                                {item.category}
                                            </Text>
                                            <Text style={styles.note} numberOfLines={4}>
                                                {item.note}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        )
                    }}
                />
            // </SafeAreaView>
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

export default connect(mapStateToProps)(Notes)

//  export default withNavigation(Notes)

const styles = StyleSheet.create({
    card: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 7,
        overflow: 'hidden',
        maxHeight: 174,
        flexGrow: 1,
        flexBasis: 0,
    },
    cardItem: {
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 7,
        overflow: 'hidden',
        maxHeight: 174,
    },
    date: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 14,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24,
    },
    category: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '100',
        lineHeight: 16,
    },
    note: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 16,
    },

    itemEmpty: {
        backgroundColor: 'transparent'
    }
})