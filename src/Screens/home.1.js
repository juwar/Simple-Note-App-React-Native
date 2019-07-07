import React,{ Component } from 'react';
import { StyleSheet } from 'react-native'
import { 
    Container,
    Content,
} from 'native-base'
import FABAdd from '../Components/fab';
import Search from '../Components/search';
import Notes from '../Components/notes';
import NavBar from '../Components/navBar'

import { connect } from 'react-redux';
import { getNotes } from '../Publics/Redux/Action/notes'
import { getCategories } from '../Publics/Redux/Action/categories'

 class Home extends Component {
    
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

    componentDidMount() {
        this.fetchDataNotes()
        this.fetchDataCategories()
    }

     render(){
        console.log('this.props.notes home:')
        console.log(this.props.notes.data)
         return (
             <Container>
                 <NavBar/>
                 <Content>
                 <Search/>
                 <Notes navigation={this.props.navigation}/>
                 </Content>
                 <FABAdd/>
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

export default connect(mapStateToProps)(Home)
