import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherForm() {
    const [name, setName] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [whatsapp, setWhatsapp] = useState<string>('');
    const [bio, setBio] = useState<string>('');

    const [subject, setSubject] = useState<string>('');
    const [cost, setCost] = useState<string>('');
    
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: '', from: '', to: '' }
    ]);

    const history = useHistory();

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: '', from: '', to: '' }
        ]);
    }

    function handleCreateClasses(e: FormEvent) {
        e.preventDefault();
    
        const data = {
            name, 
            avatar,
            bio,
            whatsapp,
            cost: Number(cost), 
            subject,
            schedule: scheduleItems
        };

        api.post('/classes', data)
            .then(() => {
                alert('Cadastro realizado com sucesso!!')
                history.push('/');
            })
            .catch(() => alert('Erro no cadastro'));
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if(index === position) 
                return {...scheduleItem, [field]: value }
            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItem);
    }
    
    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
           />

           <main>
               <form onSubmit={handleCreateClasses}>
               <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        name="name"
                        label="Nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        name="avatar"
                        label="Avatar"
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                   />
                    <Input 
                        name="whatsapp" 
                        label="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                   />
                   <Textarea name="bio" label="Biografia" value={bio} onChange={e => setBio(e.target.value)}/>
                   
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
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
                        defaultValue={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <Input 
                        name="cost"
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                   />
                   
                   
                </fieldset>

                <fieldset>
                    <legend>
                        <div className="time-and-button">
                            Horários disponíveis

                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </div>
                        {scheduleItems.map((scheduleItem, idx) => {
                            return (
                                <div key={idx} className="schedule-item">
                                    <Select 
                                        name="week_day"
                                        label="Dia da semana"
                                        onChange={e => setScheduleItemValue(idx, 'week_day', e.target.value)}
                                        value={scheduleItem.week_day}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda' },
                                            { value: '2', label: 'Terça' },
                                            { value: '3', label: 'Quarta' },
                                            { value: '4', label: 'Quinta' },
                                            { value: '5', label: 'Sexta' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(idx, 'from', e.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(idx, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </legend>
                    
                </fieldset>

                <footer>
                   <p>
                       <img src={warningIcon} alt="warning" />
                       Importante <br />
                       Preencha todos os dados
                   </p>

                   <button type="submit">
                       Salvar
                   </button>
               </footer>
               </form>
           </main>
        </div>
    )
}
