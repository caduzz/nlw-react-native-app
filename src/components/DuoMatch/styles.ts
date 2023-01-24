import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  modalContent: {
    width: 311,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: THEME.COLORS.SHAPE
  },
  label: {
    marginTop: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT
  },
  discordButton: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: THEME.COLORS.BACKGROUND_800
  },
  discord: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_400,
    marginRight: 15,
  },
  close: {
    position: 'absolute'
  }
});