import React from 'react'
import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';


import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const navigation = useNavigation();
    
    function handleGoBack() {
        navigation.navigate('landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logo} resizeMode="contain" />
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default PageHeader;