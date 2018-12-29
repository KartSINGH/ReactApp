import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner} from './common/index.js';
import { emailChanged, passwordChanged, loginUser} from '../actions/index.js';

class LoginForm extends Component{
    onEmailChange(text) {
        console.log("text is changing");
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        console.log("password text is changing");
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password} = this.props;
        this.props.loginUser({email,password});
    }
    renderButton(){
        console.log("loading value is "+this.props.loading);
        if(this.props.loading=='true'){
            console.log('Why i am loading');
            return <Spinner size="large" />
        }
            return(
                 <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            ); 
    }
    render(){
        return(
            <Card style={styles.gapStyle}>
               
            <CardSection>
                <Input 
                    label="Email"
                    placeholder="email@gmail.com"
                    onChangeText={
                        this.onEmailChange.bind(this)
                    }
                    value={this.props.email}
                    />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="Password"
                    onChangeText={
                        this.onPasswordChange.bind(this)
                    }
                    value={this.props.password}
                    />
            </CardSection>
            <Text style={styles.errorTextStyle}>
                {this.props.error}
            </Text>
            <CardSection>
                { this.renderButton() }
            </CardSection>
            </Card>
        );
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf: 'center',
        color:'red'
    },
    
}
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading} = auth;
    return{
        email ,
        password,
        error,
        loading
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);
