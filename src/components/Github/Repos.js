import React from 'react';

class Repos extends React.Component {
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

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
};

export default Repos;