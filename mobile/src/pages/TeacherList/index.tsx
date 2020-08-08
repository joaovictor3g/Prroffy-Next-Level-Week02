import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
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
    const [isFiltersVisbile, setFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    const [favorites, setFavorites] = useState<number[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map((teacher: TeacherProps) => teacher.user_id)
                
                setFavorites(favoritedTeachersId);
            }
        })
    }

    function handleToggleFiltersVisible() {
        setFiltersVisible(!isFiltersVisbile);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setTeachers(response.data);
        setFiltersVisible(false);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
            )}>
                { isFiltersVisbile && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                        placeholderTextColor="#c1bccc"
                        style={styles.input}
                        placeholder="Qual a matéria"
                        value={subject}
                        onChangeText={text => setSubject(text)}
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual o dia"
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual horário"
                                value={time}
                                onChangeText={text => setTime(text)}
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>)}
            </PageHeader>
            
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 7,
                    paddingBottom: 24
                }}
            >
                {teachers.map((teacher: TeacherProps) => {
                    return <TeacherItem 
                        key={teacher.user_id}
                        user_id={teacher.user_id}
                        name={teacher.name}
                        avatar={teacher.avatar}
                        bio={teacher.bio}
                        cost={teacher.cost}
                        subject={teacher.subject}
                        whatsapp={teacher.whatsapp}
                        favorited={favorites.includes(teacher.user_id)}
                    />
                })}
                
            </ScrollView>
        </View>
    )
}

