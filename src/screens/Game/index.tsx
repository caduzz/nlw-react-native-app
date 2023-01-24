import { useEffect, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { View, TouchableOpacity, Image, FlatList, ScrollView, Text } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'

import { Background } from '../../components/Background';

import { styles } from './styles';
import { THEME } from '../../theme';
import { GameParams } from '../../@types/navigation';

import { DuoMatch } from '../../components/DuoMatch';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

import api from '../../service/api';
import { Loading } from '../../components/Loading';

export function Game() {
  const navigation = useNavigation();

  const routeNavigate = useRoute();
  const game = routeNavigate.params as GameParams;

  const [ loading, setLoading ] = useState(true)

  const [ ads, setAds ] = useState<DuoCardProps[]>([])
  const [ discord, setDiscord ] = useState<string>('')

  function handleGoBack () {
    navigation.goBack() 
  }

  async function handleConnect (id: string) {
    api.connect(id).then(data => {
      setDiscord(data.discord)
    })
  }

  function handleDisconnect () {
    setDiscord('');
  }

  useEffect(() => {
    api.listAds(game.id).then(data => {
      setAds(data)
      setLoading(false)
    })
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <ScrollView
            style={{
              width: '100%'
            }}
            contentContainerStyle={{
              flexGrow : 1,
              justifyContent : 'center',
              alignItems: 'center'
            }}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={handleGoBack}>
                <Entypo 
                  name='chevron-thin-left'
                  color={THEME.COLORS.CAPTION_300}
                  size={22}
                />
              </TouchableOpacity>

              <Image
                source={logoImg}
                defaultSource={logoImg}
                style={styles.logo}
              />
              <View />
            </View>

            <Image 
              source={{ uri: game.bannerUrl }}
              style={styles.cover}
              resizeMode='cover'
            />
            <Heading 
              title={game.title}
              subTitle='Conecte-se e comece a jogar!'
            />
            {loading ?
            <Loading size='large' />
            :
            <FlatList 
              data={ads}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <DuoCard
                  data={item}
                  onConnect={()=>handleConnect(item.id)}
                />
              )}
              horizontal
              style={styles.containerList}
              contentContainerStyle={[
                ads.length == 0 || ads.length == 1
                ? styles.listEmptyContent
                : styles.contentList
              ]}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={()=> (<Text style={styles.listEmptyText}>Não há Anuncios publicados ainda</Text>)}
            />
            }
          </ScrollView>
      </SafeAreaView>
      <DuoMatch
        visible={discord.length > 0}
        discord={discord}
        animationType='slide'
        onClose={handleDisconnect}
      />
    </Background>
  );
}