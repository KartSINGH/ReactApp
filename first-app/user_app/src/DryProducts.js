import React, { Component } from 'react';
import { Text, View, Image,ScrollView} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';

class DryProducts extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'silver'}}>
           
            <Card style={{marginTop:80}}>
                <CardSection style={{justifyContent:'center'}}>
                      <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/battery_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                        <Text style={styles.description}> Lead Batteries</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 40/kg</Text>
                </CardSection>
                
            </Card>
            <Card>
                 <CardSection style={{justifyContent:'center'}}>
                      <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/battery_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                        <Text style={styles.description}>li-ion Batteries</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 30/kg</Text>
                </CardSection>
            </Card>
            <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/book_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} onPress={()=>{alert("DryWaste Products")}}>Books</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 8/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                         source={{uri:'https://test.shuttlescrap.com/img/cardboard_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Cardboard</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 7/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/furniture_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Furniture</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 10/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/glass_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Glass Items</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 1/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/tincan_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Tin Cans</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 5/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/metal_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description} >Metal</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 7/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/newspaper_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Newspaper</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 12/kg</Text>
                </CardSection>
            </Card>
             <Card>
                <CardSection style={{justifyContent:'center'}}>
                    <Image 
                         resizeMode='contain'
                          source={{uri:'https://test.shuttlescrap.com/img/plastic_predict.png'}}
                         style={styles.imgStyle}
                         />
                </CardSection>
                <CardSection>
                         <Text style={styles.description}>Plastic Products</Text>
                </CardSection>
                 <CardSection>
                         <Text style={styles.description}>Rs 10/kg</Text>
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
export default DryProducts;