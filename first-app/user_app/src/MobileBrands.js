import React, {Component} from 'react';
import {ScrollView,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import { Card, CardSection, Input, Button, Spinner,GreenButton} from './Components/index.js';
import {Actions} from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import axios from 'axios';
import {connect} from 'react-redux';
import {mobileBrandSelected} from './Actions/index.js';
import SearchBar from 'react-native-searchbar';
class MobileBrands extends Component{
    state={
        data:[],
        result:[],
        loading:true,
        results:['0,No Search Result']
    }
    componentDidMount() {
        var m =1;
        var unit=[];
        
        axios({
            method: 'get',
            url :'https://api.shuttlescrap.com/mobiles/get_count', 
        })
        .then((data1)=>{
           
            this.setState({
                data: data1.data,
                loading:false
            })
            
       
        })
        .catch(function(error){
            alert(error);
        })
    }
    
    select_brand(brand){
        this.props.mobileBrandSelected(brand);
    }
    _handleResults=(result)=> {
       this.setState({
           results:result
       })  
        }
    renderBrands(){
if(this.state.loading == true){
return(<View style={{marginTop:100}}>
             <Spinner size="large" />
            </View>)
}else{
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
                        <Text style={{fontSize:15,lineHeight:20}}>{options[0]+" Devices"}</Text>
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
                        onX={this.getAllBrands}
                        />
                       </View>
                        { this.state.results.map(options =>{
            
             options=options.toString();
             options=options.split(',')
             
            return(
                <View style={{flexDirection:'row'}}>
                    
                <TouchableOpacity onPress={()=>this.select_brand(options[1])}>
                <Card style={{flex:0.3,width:200}}>
                    <CardSection style={{flex:1,backgroundColor:'#424242'}}>
                        <Text style={{color:'white',fontSize:18,lineHeight:20}}>{options[1]}</Text>
                    </CardSection>
                </Card>
                </TouchableOpacity>
                <Card style={{flex:0.3,width:100}}>
                    <CardSection style={{flex:1}}>
                        <Text style={{fontSize:15,lineHeight:20}}>{options[0]+" Devices"}</Text>
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
        width:140,
        height:70,
        marginTop:10,
   }
}
export default connect(null,{mobileBrandSelected})(MobileBrands);