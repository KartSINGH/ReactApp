import React,{Component} from 'react';
import {View, Text, Image, ScrollView } from 'react-native';
import { Card, CardSection,Input,Button,GreenButton,Spinner} from './Components/index.js';
import {showUpdatePassword, showPreviousPickups,passwordChanged,passwordMatched,passwordNotMatched,setNewPassword,logOut} from './Actions/index.js';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class UserProfile extends Component{
   componentWillMount() {
        this.state={
            data1:this.props.data
        }
    
   }
    onUpdatePassword(){
       
        this.props.showUpdatePassword();
    }
    onShowPickups(){
        const {email} = this.props;
        this.props.showPreviousPickups({email});
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onConfirmPasswordChange(text){
        if(this.props.password == text){
          this.props.passwordMatched();
        }else{
             this.props.passwordNotMatched();
        }
    }
    onSetNewPassword(){
      
        const {email,password} = this.props;
        this.props.setNewPassword({email,password});
    }
    onLogout(){
        this.props.logOut();
    }
    renderUpdatePasswordButton(){
       
        if(this.props.passwordMatch==true){
            
           return(
                 <GreenButton onPress={this.onSetNewPassword.bind(this)}>Update Password</GreenButton> 
            )
           
        }else if(this.props.passwordNotMatch==true){
            return(
            <Text style={styles.description3}>Both Passwords Donot Match</Text>
            )
        }
    }
    renderContent({data}){
        
        if(this.props.isShowPreviousPickupsVisible==true){
            return(
                <Card>
                <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="Password"
                    styles={styles.description}
                    onChangeText={this.onPasswordChange.bind(this)}
                    />
            </CardSection>
                <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="Confirm Password"
                    styles={styles.description}
                    onChangeText={this.onConfirmPasswordChange.bind(this)}
                    />
            </CardSection>
            <CardSection>
               {this.renderUpdatePasswordButton()}
            </CardSection>
                </Card>
            )
        }else{
             console.log(data);
            return data.map((l)=>{return(
            <Card>
            <CardSection>
                <Text style={styles.description2}>ID: {l.booking_id}</Text>
                <Text style={styles.description3}>TIME: {l.time}</Text>
                <Text style={styles.description3}>STATUS: {l.booking_status}</Text>
            </CardSection>
            </Card>)})
           
        }
    }
    render(){
        const {data} = this.props;
        return(
            <ScrollView>
                <Card style={{marginTop:70}}>
                    <CardSection style={{borderColor:'transparent'}}>
                        <Image 
                         resizeMode='contain'
                         source={require('../img/user.png')}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection  style={{borderColor:'transparent'}}>
                        <Text style={styles.description}>{this.props.name}</Text>
                    </CardSection>
                     <CardSection  style={{borderColor:'transparent'}}>
                        <Text style={styles.description3}>{this.props.email}</Text>
                    </CardSection>
                     <CardSection >
                        <Text style={styles.description3}>Credits: {this.props.credits}</Text>
                    </CardSection>
                </Card>  
                <Card>
                    <CardSection style={{justifyContent:'flex-start',}}>
                        <Text style={styles.description1} onPress={this.onUpdatePassword.bind(this)}>View Previous Pickup Record</Text>
                        <Text style={styles.description2}  onPress={this.onShowPickups.bind(this)}>Update Password</Text>
                    </CardSection>
                </Card>  
                {this.renderContent({data})}    
                <Card>
                    <CardSection>
                       <GreenButton style={styles.description} onPress={this.onLogout.bind(this)}>
                            Logout
                       </GreenButton>
                   </CardSection>
               </Card>    
                   
            </ScrollView>
        )
    }
}
const styles={
     description:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:20,
        alignSelf:'center',
        textAlign:'center',     
        flex:1
   },
    description1:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:14,
        marginLeft:5,
        flex:1
   },
    description2:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:14,
        marginRight:5,
        flex:1
   },
    description3:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:14,
        marginRight:5,
        flex:1,
        alignSelf:'center',
        textAlign:'center'
   },
   imgStyle:{
        width:240,
        height:170,
        alignSelf:'center',
        flex:1
   },
   ButtonWrapp:{
    marginTop:5,
    backgroundColor:'transparent',
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderColor:'transparent'
   }
}
const mapStateToProps= ({userProfile,login})=>{
    const {isUpdatePasswordVisibile,isShowPreviousPickupsVisible, passwordMatch, passwordNotMatch, updateLoading,data} = userProfile;
    const { email,password,name,credits } = login;
    return{
       isUpdatePasswordVisibile,
       isShowPreviousPickupsVisible,
       password,
       passwordMatch,
       passwordNotMatch,
       updateLoading,
       email,
       name,
       credits,
       data
    }
}

export default connect(mapStateToProps,{showPreviousPickups,showUpdatePassword,passwordChanged,passwordMatched,passwordNotMatched,setNewPassword,logOut})(UserProfile);