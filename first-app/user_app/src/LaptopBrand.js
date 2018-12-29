import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity,BackAndroid,
  ToastAndroid} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {laptopBrandSelected} from './Actions/index.js';
class LaptopBrand extends Component{
    state={
        data:[],
         backPress:false
    }
     
   
   
    componentWillMount() {
        var m =1;
        var unit=[];
        axios({
            method: 'get',
            url :'https://api.shuttlescrap.com/laptop_data/get_count', 
        })
        .then((data1)=>{
            this.setState({
                data: data1.data
            })
        })
        .catch(function(error){
            alert(error);
        })
        BackAndroid.addEventListener('hardwareBackPress', function() {
      var _this = this;
      if(!this.state.backPress) {
      ToastAndroid.show('Back again to exit', ToastAndroid.SHORT);
      this.setState({backPress:true});
      setTimeout(function() {
      _this.setState({backPress:false});
      },2500);
      } else {
      return false;
      }
      return true;
      }.bind(this));
    }
    select_brand(brand){
        this.props.laptopBrandSelected(brand);
    }
    renderBrands(){
          return this.state.data.map(options =>{
             options=options.toString();
             options=options.split(',')
            return(
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.select_brand(options[1])}>
                <Card style={{flex:0.5,width:200}}>
                    <CardSection style={{flex:0.5,backgroundColor:'#22aa86'}}>
                        <Text style={{color:'white',fontSize:18,lineHeight:20}}>{options[1]}</Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <Card style={{flex:0.5,width:100}}>
                    <CardSection style={{flex:0.5}}>
                        <Text style={{fontSize:15,lineHeight:20}}>{options[0]+" laptop"}</Text>
                    </CardSection>
                </Card>
                </View>
            )
        })
    }
    render(){
            return(
                <ScrollView>
                     <View style={{flexDirection:'column',marginTop:70}}>
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
        width:140,
        height:70,
        marginTop:10,
   }
}
export default connect(null,{laptopBrandSelected})(LaptopBrand);