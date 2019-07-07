import React, { Component } from 'react';
import { Form, Item, Picker, Icon, View } from 'native-base';
import { connect } from 'react-redux'
import { getCategories } from '../Publics/Redux/Action/categories'
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

    fetchDataCategories = () => {
        this.props.dispatch(getCategories())
    }

    componentDidMount() {
        this.fetchDataCategories()
    }

    data = this.props.categories.data

    render() {
        console.log('this.props.categories picker:')
        console.log(this.props.categories.data)
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
                            onValueChange={(selected) => {
                                this.setState({
                                    selected: selected,
                                    category: selected, 
                                })
                            }}
                            // onValueChange={category => this.setState({ category })}
                        >
                            {/* <Picker.Item label="Select Category" value="" /> */}
                            {this.data.map(item => (
                                <Picker.Item label={item.category} value={item.id} />)
                            )}
                        </Picker>
                    </Item>
                </View>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
        // auth: state.auth
    }
}

export default connect(mapStateToProps)(InputNote)