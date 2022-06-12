import { Component } from 'react';
import './App.css';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar"
    };
    this.time = null;
    this.start = this.start.bind(this);
    this.limpa = this.limpa.bind(this);
  }

  start() {
    let state = this.state;
    if (this.time !== null) {
      clearInterval(this.time);
      this.time = null;
      state.botao = "Iniciar";
    }
    else {
      this.time = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = "Pausar"
    }
    this.setState(state);
  }

  limpa() {
    if (this.time !== null) {
      clearInterval(this.time);
      this.time = null
    }

    let state = this.state;
    state.numero = 0;
    state.botao = "Iniciar"
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/cronometro.png')} className='img' />
        <a className='time'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='botao' onClick={this.start}>{this.state.botao}</a>
          <a className='botao' onClick={this.limpa}>Limpar</a>
        </div>
      </div>
    );
  }
}
export default App;
