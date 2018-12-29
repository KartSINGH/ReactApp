import React, { Component } from 'react';
import { View,Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/index.js';
import _ from 'lodash/index.js';
class EmployeeList extends Component {
   componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        //nexxt Props are next set opf props for component to be rendered with
        this.createDataSource(nextProps);
    }
    createDataSource({employees}){
                const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=>r1!==r2
        });
        this.dataSource = ds.cloneWithRows(this.props.employees)
    }
    render(){
        console.log(this.props);
        return(
            <View>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const employees = _.map(state.employees,(val,uid)=>{
        return { ...val, uid };
    });
    return {employees};
};
export default connect(mapStateToProps,{ employeesFetch})(EmployeeList);