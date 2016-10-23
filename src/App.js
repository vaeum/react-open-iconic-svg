import React, { Component } from 'react';
import * as icon from 'react-open-iconic-svg';
import CopyToClipboard from 'react-copy-to-clipboard';

import './style.scss';

const cn = require('bem-cn')('icons');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copiedId: null,
      showNote: false
    }
  }

  renderIcon() {
    var arr = [];

    for (var key in icon) {
      arr.push(icon[key])
    }

    return arr;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>react-open-iconic-svg</h1>
        </div>

        <div className={cn('note').state({show: this.state.showNote})}>
          <span>Copied</span>
        </div>

        <ul className={cn('list').mix('row')}>
          {this.renderIcon().map((e, i) =>
             <li className={cn('list-item')} key={i}>
                <CopyToClipboard text={`<${e.name} />`}
                  onCopy={() => this.setState({copied: true})}>

                  <div
                    className={cn('link').state({copied: this.state.copiedId == i})}
                    onClick={() => this.handerClick(i)} >

                    <span className={cn('icon')}>{React.createElement(e)}</span>
                    <span className={cn('icon-description')}>{e.name}</span>
                  </div>
                </CopyToClipboard>
             </li>
           )}
        </ul>
      </div>
    );
  }

  handerClick(id){
    this.setState({
      copiedId: id,
      showNote: true
    })

    let hideNote = () => {
      this.setState({
        showNote: false
      })
    }

    setTimeout(hideNote, 2000)

  }
}
