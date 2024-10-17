import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';

export default function Index() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);

  useEffect(() => {
    // Open the database asynchronously
    const openDatabase = async () => {
      const database = await SQLite.openDatabaseSync('test.db');
      setDb(database);

    //   // Create table and insert test record
    //   database.transaction((tx) => { does not work
    //     tx.executeSql(
    //       'CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);'
    //     );
    //     tx.executeSql('INSERT INTO names (name) VALUES (?);', ['Test Name']);
    //   });
    };

    openDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text>SQLite Test</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
