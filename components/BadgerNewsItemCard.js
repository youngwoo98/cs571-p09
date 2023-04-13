import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Pressable, StyleSheet, View, Image, Text } from "react-native";
import BadgerPreferencesContext from "../contexts/BadgerPreferencesContext";



export default function BadgerNewsItemCard(props) {

    const [prefs, setPrefs] = useContext(BadgerPreferencesContext);
    const naviagtion = useNavigation();

    function handlePress(){
        naviagtion.push('SpecificPost', props)
    }

    useEffect(() => {
        props.tags.map(tag => {
            prefs[tag] = true
        })
      }, [])

    return <Pressable onPress={handlePress}>
        <View style={[styles.card, props.style]}>
            {props.children}
            <View>
                <Image 
                    style = {{
                        alignSelf: `center`,
                        width: 300,
                        height: 300,
                    }}
                    source = {{uri: props[`img`]}}
                />
                <Text>{props[`title`]}</Text>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
    }
})