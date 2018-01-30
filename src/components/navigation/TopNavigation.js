import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import { logout } from '../../actions/auth';

const TopNavigation = ({ user }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link}>Dashboard</Menu.Item>
    <Menu.Menu position="right"/>
      <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
        <Dropdown.Item >Logout</Dropdown.Item>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: Proptypes.string.isRequired
  }).isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logout })(TopNavigation);
