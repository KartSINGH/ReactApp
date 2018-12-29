import React, {Component} from 'react';
import { Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/index.js';
import {Card, CardSection, Input, Button} from './common/index.js'; 


class EmployeeCreate extends Component {
    onButtonPress(){
        const { name ,phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift:shift||'Monday'});
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="kartik"
                        onChangeText={
                            text => this.props.employeeUpdate({prop:'name',value:text})
                        }
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="9868623520"
                        value={this.props.phone}
                        onChangeText={
                            text=>this.props.employeeUpdate({prop:'phone',value:text})
                        }
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'row' }}>
                    <Text style={styles.pickerLabelStyle}>Select Shift</Text>
                </CardSection>
                <CardSection>
                    <Picker 
                        selectedValue={this.props.shift}
                        onValueChange={text=>this.props.employeeUpdate({ prop:'shift',value:text })}
                        style={{flex:1}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Entry
                    </Button>
                   
                </CardSection>
            </Card>
        )
    }
}
const styles={
    pickerLabelStyle:{
        fontSize:18,
        paddingLeft: 20
    }
}
const mapStateToProps =(state)=>{
    const {
        name,
        phone,
        shift
    } = state.employeeForm;
    return {
        name,
        phone,
        shift
    }
}
export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);