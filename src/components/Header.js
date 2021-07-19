// Created with rcc snippet
import React, { Component } from "react";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelpers";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };
  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={Link} to="/">
                <Image size="mini" src="https://react.semantic-ui.com/logo.png"/></Menu.Item>
              <Menu.Item as={NavLink} to="/" exact header>Movie App</Menu.Item>
              <Menu.Item as={NavLink} to="movies" exact>Movies</Menu.Item>
              <Menu.Item as={NavLink} to="movies/new" exact>Add New</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    ); 
  }
}
