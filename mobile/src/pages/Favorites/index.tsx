import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles';
import PageHeader from '../../components/PageHeader';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys Favoritos" />
        </View>
    )
}

