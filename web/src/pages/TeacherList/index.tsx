import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Estes são os Proffys disponíveis."
            >
                <form  id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
    
        </div>
    )
}
