import React, { Component } from 'react'
import VotingButtons from './VotingButtons';

class VotingButtonsContainer extends Component {
  state = {  }
  handleLike = () => {
    this.props.addLike(this.props.profileId)
  }
  
  render() {
    return ( <VotingButtons handleLike={this.handleLike} /> );
  }
}
 
export default VotingButtonsContainer;