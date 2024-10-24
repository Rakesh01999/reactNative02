

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Home from './screeens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Gaming from './src/assets/images/gaming.png';


// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: 'center' , marginVertical:15}}>
      <View>
        <Text style={{ color: "blue", fontSize: 30, fontWeight: "bold" }}>
          Game On
          {/* <Home /> */}
        </Text>
      </View>

      {/* ----------- Gaming Image ----------  */}
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Image
          source={Gaming} // Use the image file as the source
          style={{ width: 200, height: 200 }} // Adjust the size accordingly
        />
      </View>

      <TouchableOpacity style={{ backgroundColor: "#b9c928", padding: 10, width: 300, height: 60, borderRadius: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" , marginBottom:50}}>
        <Text style={{ color: "black", fontWeight: "bold" }}>Let's Begin</Text>
        {/* <MaterialIcons name="house" color="#ff0000" size={20} /> */}
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
    </SafeAreaView>

    // <NavigationContainer>
    //   <MainNavigation />
    // </NavigationContainer>
  )
}

export default App;
