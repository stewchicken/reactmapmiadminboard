import React, { Component } from 'react';
import { Button } from 'antd';
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: new Date().getFullYear(),
            company: ' MapMi '
        }
    }

    render() {
        return (
            <footer>
                <ul className="site-link">
                    <li> &copy; {this.state.year} {this.state.company}
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;