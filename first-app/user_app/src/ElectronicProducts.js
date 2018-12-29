import React, { Component } from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
class ElectronicProducts extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'silver'}}>
            
            <Card style={{marginTop:80}}>
                <CardSection style={{justifyContent:'center'}}>
                      <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/smartphone_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                        <Text style={styles.description}>Smartphones</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.mobile_brands()}}>View</Text>
                </CardSection>
                
            </Card>
            <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/tablet_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Tablets</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.tablet_brands()}}>View</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/mobile_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Iphones</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.mobile_brands()}}>View</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/ipad_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Ipad</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.tablet_brands()}}>View</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/laptop_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Laptops</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.laptop_brands()}}>View</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/tv_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>T.V</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.tv_brands()}}>View</Text>
                </CardSection>
            </Card>
             
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                         source={{uri:'https://test.shuttlescrap.com/img/fridge_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Refridgerator</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.fridge_brands()}}>View</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/desktop_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Desktops</Text>
                </CardSection>
                <CardSection>
                        <Text style={styles.description} onPress={()=>{Actions.desktop_brands()}}>View</Text>
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
        width:140,
        height:70,
        marginTop:10,

   }
}
export default ElectronicProducts;