import React, {Component} from 'react';

import {connect} from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions/index.js';
import {Card, CardSection, Input, Button} from './common/index.js'; 
import EmployeeForm from './EmployeeForm.js';


class EmployeeCreate extends Component {
    onButtonPress(){
        const { name ,phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift:shift||'Monday'});
    }
    render(){
        console.log(this.props.employee)
        return(
            <Card>

                <EmployeeForm {...this.props} />
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