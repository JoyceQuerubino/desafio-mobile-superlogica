import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

import { 
    Container, 
} from './styles';

interface Props extends TouchableOpacityProps {
    id: string; 
    name: string;
}

export function CharactereCard({name, ...rest}: Props){
    return(
        <Container
            {...rest}
        >
            <Text>{name}</Text>
        </Container>
    )
}   