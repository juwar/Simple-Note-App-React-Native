import React, { Component } from 'react';
import {Form, Item, Picker, Icon, View } from 'native-base';
class InputNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: this.props.type
      };
    }
    onValueChange(value) {
      this.setState({
        selected: value
      });
    }
  render() {
    return (

          <Form>
            <View style={{ width: 180 }}>
            <Item picker>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Learn" value="Learn" />
              <Picker.Item label="School" value="School" />
              <Picker.Item label="Try" value="Try" />
            </Picker>
            </Item>
            </View>
          </Form>
    );
  }
}

export default InputNote