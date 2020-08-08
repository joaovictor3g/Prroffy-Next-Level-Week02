import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface TeacherProps {
    user_id: number;
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherProps> = ({ user_id, name, avatar, subject, bio, cost, whatsapp, favorited  }) => {
    const [isFavorited, setFavorited] = useState<boolean>(favorited);
    
    function handleLinkToWhatsapp() {
        api.post('connections', {
            user_id
        })
        
        Linking.openURL(`whatsapp://send?phone=${whatsapp}`)
    }
    
    async function handleToggleToFavorites() {
        const favorites = await AsyncStorage.getItem('favorites');
        
        let favoritesArray: any[] = [];
        
        if(isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: TeacherProps) => teacherItem.user_id===user_id)
        
            favoritesArray.splice(favoriteIndex, 1);

            setFavorited(false);

        } else {         
            if(favorites)
                favoritesArray = JSON.parse(favorites);

            favoritesArray.push({ user_id, name, avatar, subject, bio, cost, whatsapp });
            
            setFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subject}>{subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ {cost},00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        style={[styles.favoriteButton, isFavorited ? styles.favorited: {}]}
                        onPress={handleToggleToFavorites}
                    >
                        { !isFavorited ?  
                        <Image source={heartOutlineIcon} />:
                        <Image source={unfavoriteIcon} /> }
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;
