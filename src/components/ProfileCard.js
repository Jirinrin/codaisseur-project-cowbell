import React, { Component } from 'react';

export const MAX_CHIPS = 2

class ProfileCard extends Component {

  renderProfilePicture() {
    return (
      <div>
        <img src={this.props.profile.pictureURL} alt={this.props.profile.name}/>
        <p>{this.props.profile.name}, {this.props.profile.age}</p>
        <p>{this.props.profile.location}</p>
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderDescription()}
        {this.renderMediaURLs()}
      </div>
    )
  }

  extractPlatform(url) {
    const platforms = [
      'Discogs',
      'SoundCloud',
      'Spotify',
      'YouTube'
    ]

    return platforms.find(p => {
      return url.replace('.','').includes(p.toLowerCase()) // replace() for domains like youtu.be
    })
  }

  renderChips(items, cssClass='chip') {
    let listItems = items.splice(MAX_CHIPS)
    listItems.map(item => {
      { return <li className={cssClass}>{item}</li> }
    })
  }

  renderMediaURLs() {
    return (
      <div>
        <h2>Media</h2>
        <ul>
          { this.props.profile.recordingURLs.map((url) => {
            let platform = this.extractPlatform(url)
            return <li className={`${platform.toLowerCase()}-url`} key={url}><a href={url}>{platform}</a></li>
          })}
        </ul>
      </div>
    )
  }

  renderDescription() {
    return (
      <div>
        <h2>Description</h2>
        <p>
        <ul>
          { this.renderChips(this.props.profile.genres) }
          { this.props.profile.type === 'musician' ? this.renderChips(this.props.profile.roles) : this.renderChips(this.props.profile.wantedRoles ) }
        </ul>
        </p>
        <p>{this.props.profile.description}</p>
      </div>
    )
  }

  render() { 
    if (!this.props.profile) {
      return (
        <p>No profiles available.</p>
      )
    }
    else {
      return (
        <div>
        {this.renderProfilePicture()}
        {this.renderContent()}
        </div>
      )
    }
  }
}

export default ProfileCard;