import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// styles are implemented at global level
// inside src/components/gd_case_section/styles.scss
import Styles from '../gd_case_section/styles.scss';

export default class GDCaseLink extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    externalURL: PropTypes.string.isRequired,
  };

  static defaultProps = {
    id: '',
  };

  hover = (e) => {
    // if (e.target.id === 'chi' || e.target.classList.contains('chi')) {
    //   document.querySelector('.chi-icon').setAttribute('src', '../../assets/White_YingYang.svg');
    // }
  }

  unhover = (e) => {
    // if (e.target.id === 'chi' || e.target.classList.contains('chi')) {
    //   document.querySelector('.chi-icon').setAttribute('src', '../../assets/YingYang.svg');
    // }
  }

  renderChiIcon() {
    return this.props.id === 'chi' ? (
      <span>
        <img className='chi-icon' src='../../assets/YingYang.svg'/>
      </span>) : null;
  }

  renderTitle() {
    return this.props.id === 'tuft' ? (
      <span className={`gd-case-title ${this.props.id}`}>
        Tuft <span className='amp'>&</span> Needle
      </span>
    ) : (<span className={`gd-case-title ${this.props.id}`}>
          {this.props.title}
        </span>
    );
  }

  render() {
    return (
      <div className='gd-case-section' id={this.props.id} onMouseOver={this.hover} onMouseLeave={this.unhover}>
        <a className={`gd-case-link ${this.props.id}`} href={this.props.externalURL} target="_blank">
          <div className={`gd-case-content-wrapper ${this.props.id}`}>
            {this.renderTitle()}
            {this.renderChiIcon()}
            <span className={`horizontal-line ${this.props.id}`}>
              &mdash;
            </span>
            <span className={`gd-case-description ${this.props.id}`}>
              {this.props.description}
            </span>
          </div>
        </a>
      </div>
    )
  }
}
