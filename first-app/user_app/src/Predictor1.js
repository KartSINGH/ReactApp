import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Predictor1 extends Component{
   goMobile(){
    Actions.mobile_brands();
   }
   goTablet(){
    Actions.tablet_brands();
   }
   goTV(){
    Actions.tv_brands();
   }
   goLaptop(){
    Actions.laptop_brands();
   }
   goAC(){
    Actions.ac_brands();
   }
   goDesktop(){
    Actions.desktop_brands();
   }
   goFridge(){
    Actions.fridge_brands();
   }
   goMicrowave(){
    Actions.microwave_brands();
   }
    render(){
        
        return(
        <ScrollView>
            <View style={{flexDirection:'row',marginTop:70}}>
                <TouchableOpacity onPress={this.goMobile.bind(this)}>
                <Card style={styles.viewStyle}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/smartphone_predict.png'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                       <Text style={{textAlign:'left'}}>Mobiles</Text>
                       <Text style={{position:'absolute',right:5,fontSize:30}}><FontAwesome>{Icons.mobilePhone}</FontAwesome></Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goTablet.bind(this)}>
                <Card style={styles.viewStyle}>
                    <CardSection>
                         <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/tablet_predict.png'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>Tablets</Text>
                        <Text style={{position:'absolute',right:5,fontSize:30}}><FontAwesome>{Icons.tablet}</FontAwesome></Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.goTV.bind(this)}>
                <Card style={styles.viewStyle}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/tv_predict.png'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>T.V</Text>
                       <Text style={{position:'absolute',right:5,fontSize:24}}><FontAwesome>{Icons.television}</FontAwesome></Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goLaptop.bind(this)}> 
                <Card style={styles.viewStyle}>
                    <CardSection style={styles.viewStyle}>
                         <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/laptop_predict.png'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>Laptops</Text>
                        <Text  style={{position:'absolute',right:5,fontSize:24}}><FontAwesome>{Icons.laptop}</FontAwesome></Text>
                    </CardSection>
                </Card>
                 </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.goAC.bind(this)}>
                <Card style={styles.viewStyle}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                          source={{uri:'http://image.priceprice.k-img.com/global/images/product/airconditioners/Carrier_ICOOL_0_5_HP/Carrier_ICOOL_0_5_HP_S_1.jpg'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>AC</Text>
                       <Text style={{position:'absolute',right:5,fontSize:24}}><FontAwesome>{Icons.starO}</FontAwesome></Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goDesktop.bind(this)}> 
                <Card style={styles.viewStyle}>
                    <CardSection style={styles.viewStyle}>
                         <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/desktop_predict.png'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>Desktop</Text>
                        <Text  style={{position:'absolute',right:5,fontSize:24}}><FontAwesome>{Icons.desktop}</FontAwesome></Text>
                    </CardSection>
                </Card>
                 </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.goFridge.bind(this)}>
                <Card style={styles.viewStyle}>
                    <CardSection>
                        <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/fridge_predict.png'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>Fridge</Text>
                       <Text style={{position:'absolute',right:5,fontSize:24}}><FontAwesome>{Icons.angleDoubleUp}</FontAwesome></Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goMicrowave.bind(this)}> 
                <Card style={styles.viewStyle}>
                    <CardSection style={styles.viewStyle}>
                         <Image 
                         resizeMode='contain'
                          source={{uri:'http://image.priceprice.k-img.com/global/images/product/microwaveovens/Samsung_ME731K/Samsung_ME731K_S_1.jpg'}}
                         style={styles.imgStyle}
                         />
                    </CardSection>
                    <CardSection>
                        <Text style={{textAlign:'left'}}>Mircowaves/Ovens</Text>
                        <Text  style={{position:'absolute',right:5,fontSize:24}}><FontAwesome>{Icons.handPointerO}</FontAwesome></Text>
                    </CardSection>
                </Card>
                 </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}
const styles={
    viewStyle:{
        width:Dimensions.get('window').width/2.1,
        backgroundColor:'white',
       
    },
     imgStyle:{
        width:140,
        height:70,
        marginTop:10,
   }
}
export default Predictor1;