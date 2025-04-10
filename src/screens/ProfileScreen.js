import React from "react"
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from "react-native"
import Icon from "@react-native-vector-icons/feather"
import DialogInput from 'react-native-dialog-input';

const SECTIONS = [
  {
    header: "Profile",
    icon: "user",
    items: [
      {icon: "user", label: "Name", type: "textInput"}
    ]
  },
  {
    header: "Settings",
    icon: "settings",
    items: [
      {
        id: "darkMode",
        icon: "moon",
        label: "Dark Mode",
        type: "toggle"
      }
    ]
  }
]

export default function ProfileScreen() {
  const [form, setForm] = React.useState({
    darkMode: true
  })

  const [nameDialogVisible, setNameDialogVisible] = React.useState(false);

  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#ffffff"}}>
        <ScrollView contentContainerStyle={{paddingVertical: 24}}>
          <View style = {{padding: 24, alignItems: "center", justifyContent: "center"}}>
            <Text style = {{fontSize: 19, fontWeight: "600", textAlign: "center"}}>Hello, John Doe!</Text>
          </View>

          {SECTIONS.map(({header, items}) => (
            <View style = {{paddingHorizontal: 24}} key = {header}>
              <Text style = {{paddingVertical: 12, fontSize: 12, fontWeight: "600", textTransform: "uppercase"}}>{header}</Text>
            
              {items.map(({id, label, type, icon, color}) => (
                <TouchableOpacity key = {icon} onPress = {() => {
                  if (type === "toggle") {
                    setForm((prev) => ({ ...prev, [id]: !prev[id] }))
                  } else if (type === "textInput") {
                    setNameDialogVisible(true)
                  }
                }}>
                  <View style = {{flexDirection: "row", alignContent: "center", justifyContent: "flex-start", height: 50, borderRadius: 8, marginBottom: 12, paddingHorizontal: 12, backgroundColor: "#f2f2f2"}}>
                    <View style = {{borderRadius: 999, alignItems: "center", justifyContent: "center", marginRight: 12}}>
                      <Icon name = {icon} size = {25}/>
                    </View>
                    
                    <Text style = {{fontSize: 17, marginTop: 12}}>{label}</Text>
                  
                    <View style = {{flex: 1}}/>

                    {type === "toggle" && <Switch id = {id} value = {form[id]} onValueChange = {value => setForm({...form, [id]: value})}/>}
                    {type === "textInput" && (
                      <Icon style = {{marginTop: 12}} name = "chevron-right" size = {25}/>
                    ) && <DialogInput isDialogVisible = {nameDialogVisible}
                    title = {"Name"}
                    message = {"Input your name"}
                    hintInput = {""}
                    submitInput = { (inputText) => {
                      setForm((prev) => ({ ...prev, name: inputText }))
                      setNameDialogVisible(false)}
                    }
                    closeDialog = { () => {setNameDialogVisible(false)}}/>}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
    </SafeAreaView>
  );
}