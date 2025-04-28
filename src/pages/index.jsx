import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header.jsx';
import { Silvestr } from '../components/silvestr.jsx';
import { Ctirad } from '../components/ctirad';

const introClass = 'intro';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    <header>
      <div className="logo"></div>
      <h1>Plyšáci</h1>
    </header>
    <main>
        <div className="plushy-list">
        <Silvestr />
        <Ctirad /> 
         
        </div>
    </main>
    <footer>
      <p className={introClass}>
        Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.
      </p>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
