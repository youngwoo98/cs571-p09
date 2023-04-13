import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BadgerNewsScreen from '../screens/BadgerNewsScreen';
import BadgerNewsItemDetail from '../BadgerNewsItemDetail';

const NewsStack = createNativeStackNavigator();


function BadgerNewsStack() {
  return (
      <NewsStack.Navigator initialRouteName="News">
        <NewsStack.Screen name="AllPosts" component={BadgerNewsScreen} options={{headerShown: false}}/>
        <NewsStack.Screen name="SpecificPost" component={BadgerNewsItemDetail} options={{headerShown: false}}/>
      </NewsStack.Navigator>
  );
}

export default BadgerNewsStack;