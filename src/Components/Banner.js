import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Banner extends Component{
        render(){
            const {children} = this.props;
            return(
                <div className='App-banner'>
                    <h6>{children}</h6>
                </div>
            );
    }
}
export default Banner;

Banner.propTypes = {
    children: PropTypes.string.isRequired
}

Banner.defaultProps = {
    children:[
        "Copyright &copy; Todos los derechos reservados"
    ]
}