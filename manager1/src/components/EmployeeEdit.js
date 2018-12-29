import React,{Component} from 'react';
import {Card,CardSection,Button,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import {employeeUpdate, employeeSave,employeeDelete} from '../actions';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import Communications from 'react-native-communications';
class EmployeeEdit extends Component {
    state={
        showModal:false
    }
    componentWillMount(){
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        })
    }
    onButtonPress(){
        const {name, phone, shift} = this.props;
        console.log(name, phone, shift);
        this.props.employeeSave({ name,shift,phone,uid:this.props.employee.uid })
        
    }
    onTextPress(){
        const {phone , shift} = this.props;
        Communications.text(phone,'Your upcoming shift is on ${shift}');
    }
    onAccept(){
        const {uid} = this.props.employee;
        console.log("passed uid for deletion is "+ uid);
        this.props.employeeDelete(uid);
    }
    onDecline(){
        this.setState({showModal: false})
    }
    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Employee
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{this.setState({showModal:!this.state.showModal})}}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are You sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}
const mapStateToProps = (state) =>{
    const { name,phone, shift} = state.employeeForm;
    return { name, phone, shift }; 
}
export default connect(mapStateToProps,{employeeUpdate, employeeSave,employeeDelete})(EmployeeEdit);