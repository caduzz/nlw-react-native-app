import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingBottom: 32,
    marginTop: 28,
  },
  logo: {
    width: 72,
    height: 40,
  },
  cover: {
    width: 300,
    height: 150,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 32,
  },
  containerList: {
    marginBottom: 30
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  listEmptyText: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  listEmptyContent: { 
    alignItems: 'center',
    justifyContent: 'center',
  },
});