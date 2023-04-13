import { useContext, useEffect, useState } from "react";
import BadgerNewsItemCard from "../BadgerNewsItemCard";
import { ScrollView } from "react-native-gesture-handler";
import BadgerPreferencesContext from "../../contexts/BadgerPreferencesContext";
import { useIsFocused } from "@react-navigation/native";
import { Text } from "react-native";

function BadgerNewsScreen(props) {
    
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [ prefs, setPrefs] = useContext(BadgerPreferencesContext);
    const isFocused = useIsFocused();

    useEffect(() => {
      fetch('https://www.cs571.org/s23/hw9/api/news/articles', {
        headers:{
          "X-CS571-ID": "bid_c49825b5bd469d794555",
        }
      })
      .then(res => res.json())
      .then(data => {
        setNews(data)
      })
      .catch(error => console.error(error));
    }, [])

  
  useEffect(() => {
    filterNews()
  }, [isFocused, prefs, news])
 

  const filterNews = () => {
    const filtered = news.filter(prop => {
        return !prop.tags.some(tag => prefs[tag] === false);
    });
    setFilteredNews(filtered);
};

    
    return <ScrollView>
      {filteredNews.length > 0 ?(
        filteredNews.map(prop => {
          return <BadgerNewsItemCard 
            {...prop}
            key={`${prop.id}`}
          />
        }))
        :
        <Text style = {{alignSelf: "center"}}>No articles found based on your preferences.</Text>
      }
    </ScrollView>
}  

export default BadgerNewsScreen;