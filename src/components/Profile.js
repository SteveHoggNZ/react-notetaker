import React from 'react';
import Firebase from 'firebase';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from './utils/helpers';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }

    init() {
        helpers.getGithubInfo(this.getParams().username)
            .then(function (dataObj) {
                this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
                });
            }.bind(this));
    }
    componentDidMount() {
        //this.ref = new Firebase('https://stevetestreact.firebaseio.com/');
        this.init();
    }
    componentWillUnmount() {
    }
    componentWillReceiveProps() {
        this.init();
    }
    handleAddNote(newNote) {
    }
    render() {
        var username = this.getParams().username;

        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
}

export default Profile;