import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Showplaces from 'showplace/showplaces';

class Adv extends PureComponent {
  state = {
    isOpenedShowplace: false
  };

  showShowplaces = () => {
    console.log('я вызвал showShowplace')
    this.setState({ isOpenedShowplace: !this.state.isOpenedShowplace });
  }

  render() {
    console.log('отрендерилось одно путешествие', this.props.name);
    const {
 name, id, dateFrom, dateTo,
} = this.props.name;
    const func = this.props.func;
    console.log('adv this.props', func);
    return (
      <div className="adventure card bg-warning mb-4" data-id={id}>
        <div className="adventure-name card-header bg-info">
          {name}
        </div>
        <div className="adventure-date-from card-title">{dateFrom}</div>
        <div className="adventure-date-to card-title">{dateTo}</div>
        <button type="button" className="btn btn-info" onClick={this.showShowplaces}>Open showplace</button>
        {
          this.state.isOpenedShowplace && <Showplaces adventureId={id} />
        }
      </div>
    );
  }
}
export default Adv;
