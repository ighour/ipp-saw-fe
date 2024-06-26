import React from 'react';
import PropTypes from 'prop-types';
import { ListRow } from '../../../shared';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

class UserContainer extends React.Component { 
  constructor(props){
    super(props);
    this.state = {expanded: false};
  }

  changeExpanded(){
    if(this.state.expanded === true)
      this.setState({expanded: false});
    else
      this.setState({expanded: true});
  }

  render(){
    const {user, deleteDialogSet} = this.props;

    const id = user.id;
    const username = user.username;
    const email = user.email;
    const role = user.role !== 'admin' ? 'Common' : 'Admin';

    const expandedTexts = [];
    expandedTexts.push({label: 'Role:', value: role});

    const expandedActions = [
      {name: 'Delete', icon: <DeleteIcon/>, onClick: () => deleteDialogSet(id)}
    ];

    const defaultImgPath = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_DEFAULT_AVATAR_PATH;

    const image = {
      name: 'avatar',
      src: user.avatar !== null ? process.env.REACT_APP_API_URL + user.avatar : defaultImgPath,
      sizes: '100px 100px',
      fallback: defaultImgPath,
      position: 'default'
    };

    return (
      <ListRow
        primaryText={username}
        secondaryText={email}
        expandButtonAction={this.changeExpanded.bind(this)}
        ExpandButtonIcon={<ExpandMoreIcon/>}
        expandedTexts={expandedTexts}
        expandedActions={expandedActions}
        image={image}
      />
    );
  }
}

UserContainer.propTypes = {
  user: PropTypes.object.isRequired,
  deleteDialogSet: PropTypes.func.isRequired
};

export default UserContainer;