import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import {connect} from 'react-redux';

class ProfileCardContainer extends Component {
  state = { 
    showContactDetails: false,
    profile: null,
    content: true,
  }

  componentDidMount() {
    if (this.props.match.path.includes('settings')) {
      this.setState({profile: this.props.profiles[this.props.currentUserId],
                     showContactDetails: true})
    }
    // Is also checking whether the requested id is actually in the user's matches
    else if (this.props.match.path.includes('matches') /*&&
        this.props.profiles[this.props.currentUserId].matches.includes(this.props.match.params.userId)*/) {
      this.setState({profile: this.props.profiles[this.props.match.params.userId],
                     showContactDetails: true});
    }
  }

  switchToContent = () => {
    this.setState({content: true});
  }

  switchToMedia = () => {
    this.setState({content: false});
  }

  render() {
    return ( <div>
      <ProfileCard profile={ this.state.profile || this.props.profile } showContactDetails={this.state.showContactDetails} switchToContent={this.switchToContent} switchToMedia={this.switchToMedia} content={this.state.content} />
    </div> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
  }
}

export default connect(mapStateToProps, null)(ProfileCardContainer);