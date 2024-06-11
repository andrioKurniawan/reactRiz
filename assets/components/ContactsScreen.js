// ContactScreen.js

import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import axios from 'axios';

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=20');
        setContacts(response.data.results);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar rounded source={{ uri: item.picture.thumbnail }} />
      <ListItem.Content>
        <ListItem.Title>{`${item.name.first} ${item.name.last}`}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ContactsScreen;
