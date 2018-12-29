import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton,GoogleButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {fridgeSelected} from './Actions/index.js';
class FridgePage extends Component{
    state={
        data:[],
    }
    componentDidMount() {
        axios({
            method:'post',
            url:'https://api.shuttlescrap.com/fridge/get_single_fridge',
            data:{
                id:this.props.fridge_id
            }
        }).then((resp)=>{
            this.setState({
                data: resp.data
            })
           
        }).catch((error)=>{
            console.log(error)
        })
    }
    renderBrands(){
        console.log(this.state.data)
          return this.state.data.map(options =>{
              var price=options.price.split(' ');
              price=price[1].split(',');
              price=price[0]+price[1];
              price=parseInt(price)/1.9;
              price=Math.floor(price);
              console.log(price);
              price=price.toString()
              var show_price = price.split('');
              var show=''
              if(show_price.length==4){
                show=show_price[0]+','+show_price[1]+show_price[2]+show_price[3]
              }else{
                show=show_price[0]+show_price[1]+','+show_price[2]+show_price[3]+show_price[4]
              }
            return(
                <View style={{flexDirection:'column'}}>
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
                        <GreenButton>Sell</GreenButton>
                    </CardSection>
                </Card>
                <Card style={{flexDirection:'column'}}>
                    <CardSection style={{flexDirection:'column',padding:30}}>
                         <Text style={{color:'#424242',fontSize:20}}>Current Price : {options.price}</Text>
                    </CardSection>
                    <CardSection style={{flexDirection:'column',padding:30}}>
                          <Text style={{color:'#424242',fontSize:20}}>Description : {options.description}</Text>
                    </CardSection>    
                </Card>
                <Card style={{flexDirection:'column'}}>
                    <CardSection style={{flexDirection:'column',padding:15}}>
                       <Text style={{fontSize:15,marginBottom:15,textAlign:'center',alignSelf:'center',color:'#22aa86'}}> Looking to sell this Fridge to Shuttlescrap?Get upto Rs.{show} from us!</Text>
                        <GreenButton style={{color:'white',fontSize:20}}>Get Assured Estimate</GreenButton>
                    </CardSection>
                </Card>
                
                </View>
            )
        })
    }
   
    render(){
            return(
                <ScrollView>
                     <View style={{flexDirection:'column',marginTop:50}}>
                        {this.renderBrands()}
                    </View>
                </ScrollView>
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
mapStateToProps=({fridge})=>{
    const {fridge_id} = fridge;
    return{
        fridge_id
    }
}
export default connect(mapStateToProps,{fridgeSelected})(FridgePage);