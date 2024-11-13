import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

export default function HomeScreen() {
  const {currentTheme, toggleTheme} = useTheme();

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        //headerBackgroundColor={{ light: '#DBE4EE', dark: '#1D3D47' }}
        headerBackgroundColor={{ light: currentTheme.background, dark: currentTheme.background }}

        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.headerImage}
          />
        }
      >
        <View style={[styles.contentWrapper, { backgroundColor: currentTheme.background }]}>
          <ScrollView contentContainerStyle={[styles.contentContainer, { backgroundColor: currentTheme.background }]}>
            <Collapsible title="Use Information">
              <ThemedView style={[styles.stepContainer, { backgroundColor: currentTheme.background }]}>
                <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  When you register, you will pick either BarterBuy or BarterSell.
                </ThemedText>
                <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  You will have a partner that has access to the other platform.
                </ThemedText>
                <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  BarterBuy allows you to view and buy from the bulletin board using goods.
                </ThemedText>
                <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  BarterSell allows you to post an item to the bulletin board to sell for other goods.
                </ThemedText>
              </ThemedView>
            </Collapsible>

            <Collapsible title="Terms & Conditions">
            <ThemedView style={[styles.stepContainer, { backgroundColor: currentTheme.background }]}>
              <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  Using this product, you agree that you will not hold Barter Buddy liable for any scams or trickery.
                </ThemedText>
              </ThemedView>
            </Collapsible>

            <Collapsible title="FAQ">
            <ThemedView style={[styles.stepContainer, { backgroundColor: currentTheme.background }]}>
              <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  Can I buy an item if I signed up for BarterSell?
                  </ThemedText>
                <ThemedText style={[styles.baseText, { color: currentTheme.text }]}>
                  You can only buy an item through your partner, and vice versa for selling.
                </ThemedText>
              </ThemedView>
            </Collapsible>

          </ScrollView>
        </View>
      </ParallaxScrollView>

      <View style={[styles.footer, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.baseText, { color: currentTheme.text }]}>
          © 2024 Barter Buddy. All rights reserved.
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  Logo: {
    height: 130,
    width: 350,
    marginTop: 100,
    alignSelf: 'center',
    position: 'relative',
  },
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
  item: {
    fontSize: 16,
    marginVertical: 5,
  },
  contentWrapper: {
    gap: 4,
    marginBottom: 8,
  },
  inputWrapper: {
    //backgroundColor: '#DBE4EE',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
    gap: 8,
    marginBottom: 8,
  },
  footer: {
    //backgroundColor: '#2F242C',
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
