import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

export default function TeacherList() {
    const [isFiltersVisbile, setFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setFiltersVisible(!isFiltersVisbile);
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
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual o dia"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual horário"
                            />
                        </View>
                    </View>

                    <RectButton style={styles.submitButton}>
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

