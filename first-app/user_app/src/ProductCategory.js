import React, { Component } from 'react';
import { Text, View, Image,ScrollView,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
class ProductCategory extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'silver'}}>
            
            <TouchableOpacity onPress={()=>{Actions.dry_products()}} >
            <Card style={{marginTop:70}}>
                <CardSection style={{justifyContent:'center'}}>
                      <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/dry_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                        <Text style={styles.description} >Dry Waste Products</Text>
                </CardSection>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Actions.electronic_products()}} >
            <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/electronic_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Electronic Waste Products</Text>
                </CardSection>
            </Card>
            </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles={
   description:{
        color:'#242424',
        fontFamily:'Bangla Sangam MN',
        fontSize:16,
        textAlign:'center',
        alignSelf:'center',
        flex:1
   },
   heading:{
        color:'#22aa86',
        textAlign:'center',
        alignSelf:'center',
        fontFamily:'Bangla Sangam MN',
        fontSize:20,
        flex:1,
       
   },
   imgStyle:{
        width:240,
        height:170,
        marginTop:30,

   }
}
export default ProductCategory;