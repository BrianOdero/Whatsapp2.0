import { FlatList } from 'react-native';

import { useEffect, useState } from 'react';

import ContactListItem from '../components/ContactListItem/Index';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const ContactsScreen = () => {
  

  const [users, setUsers] = useState([]);

  //querying the data
  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((result) => {
      const data = result.data?.listUsers?.items;
      setUsers(result.data?.listUsers?.items);
    });
  }, []);



  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={{ backgroundColor: 'white' }}
    />
  )
}

export default ContactsScreen;