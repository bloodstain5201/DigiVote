import React, { Component } from 'react';
import OrganizerHome from './Organizer/OrganizerHome'
import CandidateHome from './Candidate/CandidateHome'
import VoterHome from './Voter/VoterHome'
import ElectionList from './Elections/ElectionList';

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            val : 0,
            userObject : null
        }
    }

    componentWillMount(){
        const userObject = {
            contract        :   this.props.contract, 
            accounts        :   this.props.accounts,
            web3            :   this.props.web3, 
            accountCreator  :   this.props.accountCreator, 
            acc             :   this.props.accAddress
        }

        this.setState({
            userObject
        })
    }

    updateHomeState = () => {
        this.setState({
            val : 0
        })
    }

    

    render(){

       
        let Option = "";

        switch(this.state.val){
            case 1 : Option = <OrganizerHome 
                                    isLogin={this.props.isLogin} 
                                    loginUpdate={this.props.loginUpdate} 
                                    userObject={this.state.userObject} 
                                />
            break;
            case 2 : Option = <CandidateHome isLogin={this.props.isLogin} loginUpdate={this.props.loginUpdate} userObject={this.state.userObject}/>
            break;
            case 3 : Option = <VoterHome isLogin={this.props.isLogin} loginUpdate={this.props.loginUpdate} userObject={this.state.userObject}/>
            break;
            default : Option = <ElectionList userObject={this.state.userObject} /> 
        }

        return(
            <div>
                <h1>This is Home Page</h1>
                <button onClick={() => { this.setState({val:0})}}>Home</button>
                <button onClick={() => { this.setState({val:1})}}>Organize</button>
                <button onClick={() => { this.setState({val:2})}}>Candidate</button>
                <button onClick={() => { this.setState({val:3})}}>Voter</button>
                { Option }
            </div>
        )
    }
}