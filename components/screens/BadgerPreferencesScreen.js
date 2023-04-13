import { useContext } from "react";
import BadgerPreferencesContext from "../../contexts/BadgerPreferencesContext";
import BadgerPreferenceSwitch from "../BadgerPreferenceSwitch";
import { ScrollView } from "react-native-gesture-handler";


function BadgerPreferencesScreen(props) {

    const handleToggle = (prefName, isOn) => {
        prefs[prefName] = isOn;
      };

    const [prefs, setPrefs] = useContext(BadgerPreferencesContext)
    console.log(prefs)
    return <>
    <ScrollView>{
        Object.keys(prefs).map(pref => {
            return(
                <BadgerPreferenceSwitch
                    key={pref}
                    prefName={pref}
                    initVal={true}
                    handleToggle={handleToggle}
                />
            )
        })
    }
    </ScrollView>
    </>
}

export default BadgerPreferencesScreen;