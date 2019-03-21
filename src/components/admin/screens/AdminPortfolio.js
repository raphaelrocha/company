import React, {Component} from 'react';

import firebaseConfig, {firebaseStorage} from "../../../firebaseConfig";

export default class AdminPortfolio extends Component{

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{padding:'120px'}}>
        <form>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input type="text" className="form-control" id="title" placeholder="Título"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descriçao</label>
            <textarea type="text" className="form-control" id="description" placeholder="Descrição"/>
          </div>
          <div className="form-group">
            <label htmlFor="image">Imagem</label>
            <input type="file" className="form-control-file" id="image"/>
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </div>
    );
  }
}