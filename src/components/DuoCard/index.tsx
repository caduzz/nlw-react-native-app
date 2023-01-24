import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GameController } from 'phosphor-react-native'

import { DuoInfo } from './DuoInfo';

import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd: number;
  hourStart: number;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  connect?: boolean;
  onConnect?: ()=>void;
}

export function DuoCard({ data, onConnect, connect }: Props) {
  return (
    <View style={styles.container}>
        <DuoInfo
          label='Nome'
          value={data.name}
        />
        <DuoInfo
          label='Tempo de Jogo'
          value={`${data.yearsPlaying} anos`}
        />
        <DuoInfo
          label='Disponibilidade'
          value={`${data.weekDays.length} Dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
        />
        <DuoInfo
          label='Chamada de áudio'
          value={data.useVoiceChannel ? 'Sim' : 'Não'}
          colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity
          style={[styles.button, connect && { backgroundColor: THEME.COLORS.CAPTION_400 }]}
          onPress={onConnect}
        >
          <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
          />
          <Text style={styles.buttonTitle}>
            Conectar
          </Text>
        </TouchableOpacity>
    </View>
  );
}