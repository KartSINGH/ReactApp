import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileSelected} from './Actions/index.js';
import SearchBar from 'react-native-searchbar';

class MobileList extends Component{
    state={
        data:[],
        results:[{
            product_name:'Nothing Searched',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuVIfquKE7UX6fynVmwX_E-qnaKb4OTrmVCMw4tuOxgNCJv1sARR7Q4Q'
        }],
        loading:true
    }
    select_brand(brand){
        this.props.mobileBrandSelected(brand);
    }
    componentWillMount() {
        axios({
            method:'post',
            url:'https://api.shuttlescrap.com/mobiles/get_mobile_from_brand',
            data:{
                brand_name:this.props.selected_brand
            }
        }).then((resp)=>{
            this.setState({
                data: resp.data,
                loading:false
            })
           
        }).catch((error)=>{
            alert(error)
        })
    }
    getDevice(id){
      
        this.props.mobileSelected(id);
    }
    _handleResults=(result)=> {
       this.setState({
           results:result
       })  
        }
    renderBrands(){
       
        if(this.state.loading==true){
            return(<View style={{marginTop:100}}>
             <Spinner size="large" />
            </View>)
        }else{
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
                        <Text style={{color:'white'}}>{options.os}</Text>
                        <Text style={{color:'white'}}>{options.brand_name}</Text>
                        <GreenButton onPress={()=>{this.getDevice(options.id)}}>Select</GreenButton>
                    </CardSection>
                </Card>
                
                </View>

            )
        })
        }
        
    }
   
    render(){
            return(
                <ScrollView>
                     <View style={{flexDirection:'column',marginTop:70}}>
                         <View style={{marginBottom:50}}>
                          <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        data={this.state.data}
                        handleResults={this._handleResults}
                        showOnLoad
                        />
                       </View>
                        { this.state.results.map(options =>{
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
                    <CardSection style={{backgroundColor:'#424242',flex:1,width:500,padding:20,flexDirection:'column'}}>
                        <Text style={{color:'white',fontSize:18}}>{options.product_name}</Text>
                        <Text style={{color:'white'}}>{options.os}</Text>
                        <Text style={{color:'white'}}>{options.brand_name}</Text>
                        <Button onPress={()=>{this.getDevice(options.id)}} style={{marginLeft:30,marginRight:30}}><Text style={styles.TextStyle}>Select</Text></Button>
                    </CardSection>
                </Card>
                
                </View>

            )
        })
     }
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
        
        
   },
    TextStyle: {
        alignSelf: 'center',
        color: '#22aa86',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN',
        textAlign:'center'

    }
}
mapStateToProps=({mobile})=>{
    const {selected_brand} = mobile;
    return{
        selected_brand
    }
}
export default connect(mapStateToProps,{mobileSelected})(MobileList);