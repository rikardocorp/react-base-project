import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import photo from './img/logo.png';
import * as actions from "../../store/actions"

class Header extends Component {
    render() {
        return (
            <div id="nav_bar">
                <NavLink className="logo" to={"/home"}>
                    <img src={photo} alt="Front-end Developer Logo, Web Developer Logo , Front End Developer Logo" />
                </NavLink>
                <nav className="en">
                    <NavLink rel="index" className="link-home" to={"/home"} exact path="/"><i className="icon-home"></i></NavLink>
                    <NavLink rel="about" className="link-page" to={"/about"}><i className="icon-prof"></i></NavLink>
                    <NavLink rel="skills" className="link-page" to={"/skill"}><i className="icon-gear"></i></NavLink>
                    <NavLink rel="gallery" className="link-page" to={"/project"}><i className="icon-eye"></i></NavLink>
                    <NavLink rel="contact" className="link-page" to={"/contact"}><i className="icon-mail"></i></NavLink>
                </nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/aydeequispe" target="_blank" rel='noopener noreferrer' ><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/AydeeQM" target="_blank" rel='noopener noreferrer' ><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.facebook.com/QM.AyDee" target="_blank" rel='noopener noreferrer' ><i className="fa fa-facebook"></i></a></li>
                </ul>
                <a id="mobile-link" onClick={() => this.props.isHidden()}><i className="fa fa-bars"></i></a>
                {this.props.showing &&
                    <nav className={"en show"}>
                        <NavLink rel="index" onClick={() => this.props.clickit()} className="link-home" exact path="/" to={"/home"}><i className="icon-home"></i></NavLink>
                        <NavLink rel="about" onClick={() => this.props.clickit()} className="link-page" to={"/about"}><i className="icon-prof"></i></NavLink>
                        <NavLink rel="skills" onClick={() => this.props.clickit()} className="link-page" to={"/skill"}><i className="icon-gear"></i></NavLink>
                        <NavLink rel="gallery" onClick={() => this.props.clickit()} className="link-page" to={"/project"}><i className="icon-eye"></i></NavLink>
                        <NavLink rel="contact" onClick={() => this.props.clickit()} className="link-page" to={"/contact"}><i className="icon-mail"></i></NavLink>
                    </nav>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showing: state.general.showing,
        isHide: state.general.isHide
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isHidden: () => dispatch(actions.isHidden()),
        clickit: () => dispatch(actions.clickit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);