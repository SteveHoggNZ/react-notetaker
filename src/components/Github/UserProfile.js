import React from 'react';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                User Profile <br />
                Username: {this.props.username} <br />
                Bio: {this.props.bio}
            </div>
        )
    }
}

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
};

export default UserProfile;