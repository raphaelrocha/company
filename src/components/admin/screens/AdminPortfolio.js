import React, {Component} from 'react';

import firebaseConfig, {firebaseStorage} from "../../../firebaseConfig";
import {sleep} from "../../../helpers/timer";

export default class AdminPortfolio extends Component{

  constructor(props) {
    super(props);

    this.state = {
      saving: false,
      error: false,
      errorMessage: '',
    }
  }

  savePortfolio = (e) => {

    const itemPortifolio = {
      title: this.refs.title.value,
      description:this.refs.description.value,
      file:this.refs.image.files[0]
    };

    this.setState({saving: true});

    // let file = this.refs.image.files[0];
    let {name,size,type} = itemPortifolio.file;

    let ref = firebaseStorage.ref(name);

    ref.put(itemPortifolio.file)
      .then(image => {
        ref.getDownloadURL().then(url=>{
          let data = {
            image: url,
            title: itemPortifolio.title,
            description:itemPortifolio.description,
          };
          firebaseConfig.push('portfolio',{data});
          this.setState({saving: false, error: false});
        })
      })
      .catch(err=>{
        console.warn('deu erro', err.message);
        this.setState({saving: false, error: true, errorMessage: err.message});
      });

    /*
    Evita o reload automático da tela.
     */
    e.preventDefault();
  };

  render() {

    if(this.state.saving){
      return (
        <div className={'container'}>
          <h1><span className="glyphicon glyphicon-refresh">Salvando....</span></h1>
        </div>
      );
    }

    if(this.state.error){
      sleep(3000).then(()=>{this.setState({saving: false, error: false});})
      return (
        <div className={'container'}>
          <p><span className="glyphicon glyphicon-refresh">{this.state.errorMessage}</span></p>
        </div>
      );
    }

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