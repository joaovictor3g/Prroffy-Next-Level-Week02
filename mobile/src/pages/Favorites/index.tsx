import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherProps } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                
                setFavorites(favoritedTeachers)
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 7,
                    paddingBottom: 24
                }}
            >   
            { favorites.map((teacher: TeacherProps) => {
                return (
                    <TeacherItem 
                        key={teacher.user_id}
                        avatar={teacher.avatar}
                        bio={teacher.bio}
                        cost={teacher.cost}
                        favorited
                        user_id={teacher.user_id}
                        name={teacher.name}
                        subject={teacher.subject}
                        whatsapp={teacher.whatsapp}
                    />
                )
            }) }
            
            </ScrollView>
        </View>
    )
}

