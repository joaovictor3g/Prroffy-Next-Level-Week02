import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
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

export default function TeacherList() {
    const [subject, setSubject] = useState(''); 
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);
    
    async function handleGetTeacherByFilters(e: FormEvent) {
        e.preventDefault();
        
        const response =  await api.get('/classes', {
            params: {
                week_day: weekDay,
                subject,
                time
            }
        })
        
        setTeachers(response.data);

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Estes são os Proffys disponíveis."
            >
                <form onSubmit={handleGetTeacherByFilters} id="search-teachers">
                    <Select 
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciência', label: 'Ciência' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Quimíca', label: 'Quimíca' },
                        ]}
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />

                    <Select 
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sábado' },
                        ]}
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
                    />
                    <Input 
                        name="time" 
                        label="Hora" 
                        type="time"
                        value={time}
                        onChange={e => {
                            setTime(e.target.value)
                        }}    
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: TeacherProps) => 
                    <TeacherItem
                        key={teacher.user_id} 
                        user_id={teacher.user_id}
                        avatar={teacher.avatar}
                        name={teacher.name}
                        bio={teacher.bio}
                        cost={teacher.cost}
                        subject={teacher.subject}
                        whatsapp={teacher.whatsapp}
                    />
                
                )}
            </main>
    
        </div>
    )
}
