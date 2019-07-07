import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Textarea, Form, Text, Icon, Left, Body, Right, Title, Item, Picker, View } from "native-base";
import { connect } from 'react-redux'
import { getCategories } from '../Publics/Redux/Action/categories'
import { patchNotes, getNotes } from '../Publics/Redux/Action/notes'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.navigation.state.params.title,
      note: this.props.navigation.state.params.note,
      category: this.props.navigation.state.params.category,
      id: this.props.navigation.state.params.id,
      selected: 3
    }
  }

  fetchDataCategories = () => {
    this.props.dispatch(getCategories())
  }

  componentDidMount() {
    this.fetchDataCategories()
  }

  data = this.props.categories.data

  createNotes = (title, notes, category, id) => {
    if (title != '', notes != '', category != '') {
      this.props.dispatch(patchNotes(title, notes, category, id))
      this.props.dispatch(getNotes())
      console.warn(`Success Success Success POST ${title} ${notes} idCategory = ${category}, id =${ id }`)
    } else {
      console.warn(`Fail Fail Fail POST ${title} ${notes} ${category}`)
    }
  }

  render() {
    console.log('this.props.categories picker:')
    console.log(this.props.categories.data)
    console.warn(this.state.selected)
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-round-back' style={{ color: 'black' }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 9 }}>
            <Title style={{ alignSelf: 'center', color: 'black', }}>Edit Note</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => (this.createNotes(this.state.title, this.state.note, this.state.selected, this.state.id), this.props.navigation.navigate('Home'))}>
              <Icon name='ios-checkmark-circle-outline' style={{ color: 'green', fontSize: 34, fontWeight: 'bold' }} />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content padder>
          <Form style={styles.form}>
            <Textarea
              style={styles.textTitle}
              rowSpan={5}
              placeholder="ADD TITLE ..."
              placeholderTextColor='#C4C4C4'
              onChangeText={title => this.setState({ title })} 
              value={this.state.title}/>
          </Form>
          <Form style={styles.form}>
            <Textarea
              style={styles.textBody}
              rowSpan={5}
              placeholder="ADD DESCRIPTION ..."
              placeholderTextColor='#C4C4C4'
              onChangeText={note => this.setState({ note })}
              value={this.state.note}
            />
          </Form>

          <Form>
            <Text style={styles.text}>CATEGORY</Text>
            <Form>
              <View style={{ width: 180 }}>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected}
                    onValueChange={(selected) => {
                      this.setState({
                        selected: selected,
                        category: selected,
                      })
                    }}
                  // onValueChange={category => this.setState({ category })}
                  >
                    <Picker.Item label="Select Category" value="a" />
                    {this.data.map(item => (
                      <Picker.Item label={item.category} value={item.idCategory} />)
                    )}
                  </Picker>
                </Item>
              </View>
            </Form>
          </Form>
        </Content>
      </Container>
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

export default connect(mapStateToProps)(Add)

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    lineHeight: 25,
    height: 80,
    top: 20,
  },
  textBody: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    lineHeight: 25,
    height: 150,
    top: 20,
  },
  form: {
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    lineHeight: 30,
    left: 10,
  },
  box: {
    margin: 5
  }
})