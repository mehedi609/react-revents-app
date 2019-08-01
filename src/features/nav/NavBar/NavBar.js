import React, { Component } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { Link, NavLink, withRouter } from "react-router-dom";
import SignOutMenu from "../Menus/SignOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticate: true
  };

  handleSignIn = () => this.setState({ authenticate: true });
  handleSignOut = () => {
    this.setState({ authenticate: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticate } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" exact header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item name="Events" as={NavLink} to="/events" />
          <Menu.Item name="People" as={NavLink} to="/people" />
          <Menu.Item name="Test" as={NavLink} to="/test" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticate ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
