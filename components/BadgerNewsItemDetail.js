import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import { StyleSheet, ScrollView, Image, Text, Button, Animated } from "react-native";

export default function BadgerNewsItemDetail(props) {

    const [item, setItem] = useState([]);

    const fadeAnim = useRef(new Animated.Value(0)).current; // Animated value for opacity


    const id = props.route.params.id;


    useEffect(() => {
        fetch(`https://www.cs571.org/s23/hw9/api/news/articles/${id}`, {
            headers:{
                "X-CS571-ID": "bid_c49825b5bd469d794555", 
            }
        })
        .then(res => res.json())
        .then(data => {
            setItem(data);
        })
        .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        // Trigger fade-in animation once the item data is loaded
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000, // You can adjust the duration as per your preference
            useNativeDriver: true,
        }).start();
    }, [item, fadeAnim]);

    function BackButton(){
        const navigation = useNavigation();

        return(
            <Button
                title="Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        )
    }
    

    return(
        
            item.length === 0 ?
            <Animated.View style={{ opacity: fadeAnim}}>
                <Text style = {{alignSelf: `center`}}>The content is loading!</Text> 
            </Animated.View>
            :
            <Animated.View style={{ opacity: fadeAnim}}>
                <ScrollView 
                    style = {{
                    backgroundColor: 'white'
                }}>
                    <Image
                    style = {[styles.img]} 
                    source = {{uri: item.img}}
                    />
                    <Text style = {styles.title}>{item.title}</Text>
                    <Text style = {{padding: 6}}/>
                    {
                        item.body.map(prop => <Text key = {item.body.indexOf(prop)}style = {{
                            fontSize: 17,
                        }}>{prop}</Text>)
                    }
                    <BackButton/> 
                </ScrollView>
            </Animated.View>
    )
}

const styles = StyleSheet.create({
    img: {
        maxWidth: '100%',
        height: 250
       },
    title: {
        fontSize: 30,
    }
})