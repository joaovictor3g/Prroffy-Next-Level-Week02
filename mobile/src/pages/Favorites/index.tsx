import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherProps } from '../../components/TeacherItem';

export default function Favorites() {
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
            
            </ScrollView>
        </View>
    )
}

