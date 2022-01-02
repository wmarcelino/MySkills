import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ISkillCard extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({skill, ...props}: ISkillCard): JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.8} {...props}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
