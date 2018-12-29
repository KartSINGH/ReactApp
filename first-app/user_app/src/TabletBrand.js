import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {tabletBrandSelected} from './Actions/index.js';
class TabletBrand extends Component{
    state={
        data:[],
    }
    componentWillMount() {
        var m =1;
        var unit=[];
        axios({
            method: 'get',
            url :'https://api.shuttlescrap.com/tablets/get_count', 
        })
        .then((data1)=>{
            this.setState({
                data: data1.data
            })
        })
        .catch(function(error){
            alert(error);
        })
    }
    select_brand(brand){
        console.log("brand selected")
        this.props.tabletBrandSelected(brand);
    }
    renderBrands(){
          return this.state.data.map(options =>{
             options=options.toString();
             options=options.split(',')
             console.log("check "+options[1])
            return(
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.select_brand(options[1])}>
                <Card style={{flex:0.3,width:300}}>
                    <CardSection style={{flex:0.5,backgroundColor:'#22aa86'}}>
                        <Text style={{color:'white',fontSize:18,lineHeight:20}}>{options[1]}</Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <Card style={{flex:0.3,width:100}}>
                    <CardSection style={{flex:0.5}}>
                        <Text style={{fontSize:15,lineHeight:20}}>{options[0]+" tablet"}</Text>
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
export default connect(null,{tabletBrandSelected})(TabletBrand);