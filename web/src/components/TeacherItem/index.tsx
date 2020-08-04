import React from 'react';

// import { Container } from './styles';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
        <img src="https://avatars2.githubusercontent.com/u/55103977?s=460&v=4" alt="github" />
        <div>
            <strong>João Victor</strong>
            <span>Matemática</span>
        </div>
    </header>

    <p>
        Descrição
        <br /><br />
        Descrição
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>20, 00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </button>
    </footer>

</article>
  );
}

export default TeacherItem;