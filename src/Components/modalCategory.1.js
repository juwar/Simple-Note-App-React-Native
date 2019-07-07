import React, {Component} from 'react';
import {
    Modal, 
    Text, 
    TouchableHighlight, 
    View,
    Image, 
    StyleSheet} from 'react-native';
import { 
    Right,
    Input,
    Button,
    Form,
    Item,
} from 'native-base'
import { postCategory } from '../Publics/Redux/Action/categories';

class ModalSort extends Component {
  constructor (props){
    super(props),
    this.state = {
      category: '',
      imageUrl: '',
    }
  }

  state = {
    modalVisible: false,
  };

  showDialog(isShow){
    this.setState({isDialogVisible: isShow})
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  createCategory = (data) => {
    this.props.dispatch(postCategory(data))
  }

  categoryChange = (values) => {
    this.state({
      category: values
    })
  }

  imageUrlChange = (values) => {
    this.state({
      imageUrl: values
    })
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
            <View style={{backgroundColor:'rgba(0,0,0,.5)', flex:1, alignItems:'center', justifyContent:'center'}}>
              <View style={{width:'80%', height:150, backgroundColor:'rgba(100,100,100,.5)'}}>
                <View style={{padding:20, backgroundColor:'white'}}>
                  <Form>
                    <Item>
                      <Input placeholder='Add Category' onChangeText={this.categoryChange}/>
                    </Item>
                    <Item>
                      <Input placeholder='Url Image' onChangeText={this.imageUrlChange}/>
                    </Item>
                  </Form>
                  <View style={{flexDirection:'row'}}>
                    <Right>
                      <View style={{flexDirection:'row'}}>
                        <Button transparent onPress={() => {this.createCategory({category: this.state.category, imageUrl: this.state.imageUrl}),this.setModalVisible(!this.state.modalVisible)}}>
                          <Text style={{fontSize:20, marginRight:10}}>Add</Text>
                        </Button>
                        <Button transparent onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                          <Text style={{fontSize:20,color:'gray'}}>Cancel</Text>
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
          <View style={{flexDirection:'row', marginLeft:20}}>
              <Image source={require('../Assets/plus.png')} style={styles.iconImage}/>
              <Text style={styles.textMenu}>Add Category</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalSort

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