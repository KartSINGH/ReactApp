import React, { Component } from 'react';
import { Text,
     TouchableWithoutFeedback,
      View, 
      LayoutAnimation
    } from 'react-native';
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../action/index.js';


class ListItem extends Component{
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription(){
        const { library, expanded } = this.props;
        console.log(library);
      
        if(expanded){
            console.log("things matched");
            return(
              <CardSection>
                <Text style={{ flex:1 }}>{ library.description }</Text>
            </CardSection>
            );
        }else{
            console.log("matching failed");
        }

    }
    render(){
        
const { id, title} = this.props.library;
        return(
            <TouchableWithoutFeedback 
            onPress={()=>this.props.selectLibrary(id)}
            >
            <View>
             <CardSection>
                    <Text style={styles.titleStyle}>{title}</Text>
             
             </CardSection>
             { this.renderDescription() }
             </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles={
titleStyle: {
    fontSize: 18,
    paddingLeft: 15
}
};
const mapStateToProps =  (state,ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return{
        expanded
    };
}
export default connect(mapStateToProps,actions)(ListItem);