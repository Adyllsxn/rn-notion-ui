import { constants } from "@/lib/constants"
import { TextInput, TextInputProps, StyleSheet } from "react-native";

export function Imput({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: constants.colors.gray[100],
    color: constants.colors.white[100],
    borderRadius: 8,
    fontSize: constants.fontSize.lg,
    paddingLeft: 12,
  },
});
