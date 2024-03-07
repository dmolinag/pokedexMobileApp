import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

export interface InputCompProps {
  onChange: (e: string) => void;
  isLoading?: boolean;
}

export const InputComp = ({ onChange, isLoading }: InputCompProps) => {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (text: string) => {
    setValue(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => handleOnChange(text)}
        placeholder="Search your Pokemon"
        placeholderTextColor='grey'
      />

      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size={1} color={"#fff"} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    width: "60%",
    borderRadius: 10,
    color: 'black'
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
});
