import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

export default function TabTwoScreen() {
  const {currentTheme, toggleTheme} = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
            <ParallaxScrollView
        headerBackgroundColor={{ light: '#DBE4EE', dark: '#2F242C' }}
        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.headerImage}
          />
          }>
      <ThemedView style={[styles.titleContainer, { backgroundColor: currentTheme.background }]}>
        <ThemedText style={[styles.container, { backgroundColor: currentTheme.background }]} type="title">BarterSell</ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //padding: 20,
  },
  headerImage: {
    alignSelf: 'center',
    marginTop: 100,
},
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  footer: {
    //backgroundColor: '#2F242C',
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
});
