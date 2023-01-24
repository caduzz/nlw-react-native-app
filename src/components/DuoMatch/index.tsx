import { CheckCircle, Paperclip, X } from 'phosphor-react-native'
import { View, Modal, ModalProps, Text, TouchableOpacity, ToastAndroid } from 'react-native';

import * as Clipboard from 'expo-clipboard'

import { THEME } from '../../theme';
import { Heading } from '../Heading';

import { styles } from './styles';
import { useState } from 'react';
import { Loading } from '../Loading';

interface DuoMatchProps extends ModalProps {
    discord: string;
    onClose: () => void;
}


export function DuoMatch({discord, onClose, ...rest }: DuoMatchProps) {

    const [isCoping, setIsCoping] = useState(false);

    function hendleCopyDiscordToClipboard() {
        setIsCoping(true)
        Clipboard.setStringAsync(discord).then(() => {
            ToastAndroid.show('Discord Cópiado!', ToastAndroid.SHORT);
            setIsCoping(false)
        });
    }

    return (
        <Modal
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>
                    <TouchableOpacity 
                        onPress={onClose}
                        style={{position: 'absolute', right: 15, top: 15}}
                    >
                        <X
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>
                    <CheckCircle 
                        size={60}
                        color={THEME.COLORS.SUCCESS}
                        weight='bold'
                    />
                    <Heading 
                        title='Let`s play!'
                        subTitle='Agora é só começar a jogar'
                        style={{alignItems: 'center', marginTop: 24 }}
                    />
                    <Text style={styles.label}>Adicione no Discord</Text>
                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={hendleCopyDiscordToClipboard}
                        disabled={isCoping}
                    >
                        <Text style={styles.discord}>{isCoping ? <Loading size='small' /> : discord}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}