import React from 'react';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <h3> User Profile </h3>
                <ul className="list-group">
                    {this.props.bio.avatar_url && <li classNmae="list-group-item"> <img src={this.props.bio.avatar_url} className="img-sm" /></li>}
                    {this.props.bio.name && <li classNmae="list-group-item">Name: {this.props.bio.name}</li>}
                    {this.props.bio.login && <li classNmae="list-group-item">Username: {this.props.bio.login}</li>}
                    {this.props.bio.email && <li classNmae="list-group-item">Email: {this.props.bio.email}</li>}
                    {this.props.bio.location && <li classNmae="list-group-item">Location: {this.props.bio.location}</li>}
                    {this.props.bio.company && <li classNmae="list-group-item">Company: {this.props.bio.company}</li>}
                    {this.props.bio.followers && <li classNmae="list-group-item">Followers: {this.props.bio.followers}</li>}
                    {this.props.bio.following && <li classNmae="list-group-item">Following: {this.props.bio.following}</li>}
                    {this.props.bio.public_repos && <li classNmae="list-group-item">Public Repos: {this.props.bio.public_repos}</li>}
                    {this.props.bio.blog && <li classNmae="list-group-item">Blog: {this.props.bio.blog}</li>}
                </ul>
            </div>
        )
    }
}

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
};

export default UserProfile;