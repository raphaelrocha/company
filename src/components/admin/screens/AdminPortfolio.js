import React, {Component} from 'react';

import firebaseConfig, {firebaseStorage} from "../../../firebaseConfig";

export default class AdminPortfolio extends Component{

  constructor(props) {
    super(props);

  }

  savePortfolio = (e) => {
    console.log('savePortfolio');
    console.log(this.refs.title.value);
    console.log(this.refs.description.value);
    console.log(this.refs.image.value);

    /*
    Evita o reload automático da tela.
     */
    e.preventDefault();
  };

  render() {
    return (
      <div style={{padding:'120px'}}>
        <form onSubmit={this.savePortfolio.bind(this)}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input type="text" className="form-control" id="title" placeholder="Título" ref={'title'}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descriçao</label>
            <textarea type="text" className="form-control" id="description" placeholder="Descrição" ref={'description'}/>
          </div>
          <div className="form-group">
            <label htmlFor="image">Imagem</label>
            <input type="file" className="form-control-file" id="image" ref={'image'}/>
          </div>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
      </div>
    );
  }
}