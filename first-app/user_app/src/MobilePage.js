import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton,GoogleButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileSelected} from './Actions/index.js';
class MobilePage extends Component{
    state={
        data:[],
    }
    
    componentDidMount() {
        axios({
            method:'post',
            url:'https://api.shuttlescrap.com/mobiles/get_single_mobile',
            data:{
                id:this.props.mobile_id
            }
        }).then((resp)=>{
            this.setState({
                data: resp.data
            })
           
        }).catch((error)=>{
            alert(error)
        })
    }
  
    renderBrands(){
      
          return this.state.data.map(options =>{
              var price=options.price.split(' ');
              price=price[1].split(',');
              price=price[0]+price[1];
              price=parseInt(price)/2.01;
              price=Math.floor(price);
              
              price=price.toString()
              var show_price = price.split('');
              var show=''
              if(show_price.length==4){
                show=show_price[0]+','+show_price[1]+show_price[2]+show_price[3]
              }else if(show_price.length==5){
                show=show_price[0]+show_price[1]+','+show_price[2]+show_price[3]+show_price[4]
              }
              else{
                 show=show_price[0]+show_price[1]+show_price[2]
              }
            return(
                <View style={{flexDirection:'column',marginBottom:20}}>
                <Card style={{flexDirection:'row'}}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                         source={{uri:options.image}}
                         style={styles.imgStyle}
                        />
                    </CardSection>
                    <CardSection style={{backgroundColor:'#22aa86',flex:1,width:500,flexDirection:'column'}}>
                        <Text style={{color:'white',fontSize:18}}>{options.product_name}</Text>
                        <Text style={{color:'#424242'}}>{options.brand_name}</Text>
                        <Text style={{color:'white',fontSize:18,marginTop:5}}>Get upto Rs. {show}</Text>
                        <GreenButton onPress={()=>{Actions.mobile_ques_1({type:'reset'})}}>Sell</GreenButton>
                    </CardSection>
                </Card>
                <Card style={{flexDirection:'column'}}>
                    <CardSection style={{flexDirection:'column',padding:30}}>
                         <Text style={{color:'#424242',fontSize:20}}>Current Price : {options.price}</Text>
                    </CardSection>
                    <CardSection style={{flexDirection:'column',padding:30}}>
                         <Text style={{color:'#424242',fontSize:20}}>Display : {options.screen_size}</Text>
                          <Text style={{color:'#424242',fontSize:20}}>Description : {options.description}</Text>
                           <Text style={{color:'#424242',fontSize:20}}>OS : {options.os}</Text>
                    </CardSection>
                    
                </Card>
                <Card style={{flexDirection:'column'}}>
                    <CardSection style={{flexDirection:'column',padding:15}}>
                       <Text style={{fontSize:15,marginBottom:15,textAlign:'center',alignSelf:'center',color:'#22aa86'}}> Looking to sell this mobile to Shuttlescrap?Get upto Rs.{show} from us!</Text>
                    </CardSection>
                </Card>
                
                </View>

            )
        })
    }
   
    render(){
            return(
                <View style={{flex:1}}>
                     <ScrollView style={{flexDirection:'column',marginTop:50}}>
                        {this.renderBrands()}
                    </ScrollView>
                     <Button style={{position:'absolute',bottom:0,flex:1,width:Dimensions.get('window').width,margin:0,backgroundColor:'#424242',borderWidth:0,padding:0,marginLeft:0}} onPress={()=>{Actions.mobile_ques_1({type:'reset'})}} ><Text style={{ alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center',
        }}>Get Assured Estimate</Text></Button>
                </View>
        )
    }
}
const styles={
    viewStyle:{
        width:Dimensions.get('window').width/2.1,
        backgroundColor:'white'
    },
     imgStyle:{
        width:160,
        height:120,
        marginTop:5,
        
        
   }
}
mapStateToProps=({mobile})=>{
    const {mobile_id} = mobile;
    return{
        mobile_id
    }
}
export default connect(mapStateToProps,{mobileSelected})(MobilePage);