import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

export default function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
           />

           <main>
               <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        name="name"
                        label="Nome completo"
                    />
                    <Input 
                        name="avatar"
                        label="Avatar"
                   />
                    <Input 
                        name="whatsapp"
                        label="Whatsapp"
                   />
                   
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
                    />
                    <Input 
                        name="cost"
                        label="Custo da sua hora por aula"
                   />
                   <Textarea name="bio" label="Biografia"/>
                   
               </fieldset>

               <footer>
                   <p>
                       <img src={warningIcon} alt="warning" />
                       Importante <br />
                       Preencha todos os dados
                   </p>

                   <button type="button">
                       Salvar
                   </button>
               </footer>
           </main>
        </div>
    )
}
