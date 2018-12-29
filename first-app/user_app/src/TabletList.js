import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {tabletSelected} from './Actions/index.js';
class TabletList extends Component{
    state={
        data:[],
    }
    componentDidMount() {
        axios({
            method:'post',
            url:'https://api.shuttlescrap.com/tablets/get_tablets_from_brand',
            data:{
                brand_name:this.props.tablet_brand
            }
        }).then((resp)=>{
            this.setState({
                data: resp.data
            })
           
        }).catch((error)=>{
            console.log(error)
        })
    }
    getDevice(id){
        this.props.tabletSelected(id);
    }
    renderBrands(){
        console.log(this.state.data)
          return this.state.data.map(options =>{
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
                    <CardSection style={{backgroundColor:'#22aa86',flex:1,width:500,padding:20,flexDirection:'column'}}>
                        <Text style={{color:'white',fontSize:18}}>{options.product_name}</Text>
                        <Text style={{color:'white'}}>{options.brand_name}</Text>
                         <Text style={{color:'white',marginTop:5}}>{options.os}</Text>
                        <GreenButton onPress={()=>{this.getDevice(options.id)}}>Select</GreenButton>
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
        width:160,
        height:120,
        marginTop:5,   
   }
}
mapStateToProps=({tablet})=>{
    const {tablet_brand} = tablet;
    return{
        tablet_brand
    }
}
export default connect(mapStateToProps,{tabletSelected})(TabletList);