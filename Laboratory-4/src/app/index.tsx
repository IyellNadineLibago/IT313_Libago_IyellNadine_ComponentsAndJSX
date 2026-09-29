import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

interface StudentCardProps {
  id?: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

function StudentCard({ name, course, units, isFullLoad }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>
      
      {/* Conditional Rendering for Full Load label */}
      {isFullLoad && <Text style={styles.fullLoadLabel}>Full Load</Text>}
    </View>
  );
}

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);
  const handleReverse = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* JSX Expression for computed header */}
      <Text style={styles.header}>Student Roster ({students.length} Enrolled)</Text>
      
      <Button title="Reverse Roster Order" onPress={handleReverse} />

      <View style={styles.listContainer}>
        {/* .map() with stable student.id key */}
        {students.map((student, index) => (
          <StudentCard
            key={student.id} 
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f5f5f5', alignItems: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
  listContainer: { width: '100%', maxWidth: 400 },
  card: { 
    backgroundColor: '#fff', 
    padding: 15, 
    marginBottom: 10, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#ddd' 
  },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  fullLoadLabel: { color: 'white', backgroundColor: 'green', padding: 4, marginTop: 8, borderRadius: 4, alignSelf: 'flex-start', overflow: 'hidden' }
});