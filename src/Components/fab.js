import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Icon, Fab } from 'native-base';
class FABAdd extends Component {

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Add')
  }
  render() {
    return (  
      <Fab
        style={{ backgroundColor: 'white' }}
        position="bottomRight"
        onPress={this.handleNavigate}>
        <Icon name="add" style={{color:'gray'}}/>
      </Fab>
    );
  }
}

export default withNavigation(FABAdd);