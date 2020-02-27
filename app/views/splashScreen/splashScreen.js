import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { getFromApiAsync } from '../../services/alchoholApi';
import { styles } from './styles';

export const SplashScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{res}</Text>
        </ScrollView>
    );
};