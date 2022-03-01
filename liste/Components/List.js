import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [countries, setDataCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(res => {
      setDataCountries(res)
      console.log(res);
    })
    return () => {
      cleanup
    };
  }, [input]);

  return (
    <View style={styles.container}>
        
    </View>
  );
}