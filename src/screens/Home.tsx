import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface ISkillData {
  id: string;
  name: string;
}

export const Home = (): JSX.Element => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<ISkillData[]>([]);
  const [greeting, setGreeting] = useState<string>('');

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(previousState => [...previousState, data]);
    setNewSkill('');
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(previousState =>
      previousState.filter(skill => skill.id !== id),
    );
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Welcome, Wesley</Text>
      <Text style={[styles.greetings]}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} text={'Add'} />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
  },
  greetings: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
