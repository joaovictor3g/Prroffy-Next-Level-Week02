import React from 'react';

// import { Container } from './styles';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';

interface TeacherProps {
    user_id: number;
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
}

const TeacherItem: React.FC<TeacherProps> = ({ user_id, name, avatar, subject, bio, cost, whatsapp }) => {
    function createConnection() {
        api.post('connections', {
            user_id
        })
    }
  
    return (
    <article className="teacher-item">
    <header>
        <img src={avatar} alt="avatar" />
        <div>
            <strong>{name}</strong>
            <span>{subject}</span>
        </div>
    </header>

    <p>
        {bio}
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>R$ {cost},00</strong>
        </p>
        <a target="_blank" onClick={createConnection} href={`https://wa.me/${whatsapp}`}>
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </a>
    </footer>

</article>
  );
}

export default TeacherItem;