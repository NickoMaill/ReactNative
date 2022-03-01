import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from "./Card"

export default function App() {
    const [countries, setDataCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => {
                setDataCountries(res)
                console.log(res);
            })
    }, []);

    return (
        <View>
            <FlatList
                data={countries}
                renderItem={(data) =>
                    <Card
                    name={data.item.name.common}
                    capital={data.item.capital}/>
                }
                keyExtractor={(data, i) => i.toString()}
                ListHeaderComponent={() => <Text>Header</Text>}
                ListFooterComponent={() => <Text>Footer</Text>}
                ItemSeparatorComponent={() => (
                    <View style={{ borderBottomWidth: 1 }}></View>
                )}
            >
            </FlatList>
        </View>
    );
}