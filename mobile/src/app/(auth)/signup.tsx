import { Button } from "@/components/ui/Button";
import { Imput } from "@/components/ui/Imput";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView, Platform
} from "react-native";
import { Link } from "expo-router";
import { constants } from "@/lib/constants"

export default function SignUp() {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ios:"padding", android:"height"})}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/imgAuth.png")}
            style={styles.illustration}
          />

          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>
            Crie sua conta para acessar.
          </Text>

          <View style={styles.form}>
            <Imput placeholder="Nome" />
            <Imput placeholder="E-mail" keyboardType="email-address" />
            <Imput placeholder="Senha" secureTextEntry />
            <Imput placeholder="Confirmar Senha" secureTextEntry />
            <Button label="Cadastrar" />
          </View>
          <Text style={styles.footerText}>
            Já tem uma conta?{" "}
            <Link href={"/"} style={styles.footerLink}>
              Entre aqui
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.gray[800],
    padding: 32,
  },
  illustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },
  title: {
    fontSize: constants.fontSize.xl,
    fontWeight: 900,
    color: constants.colors.white[100],
  },
  subtitle: {
    fontSize: constants.fontSize.lg,
    color: constants.colors.white[300],
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: constants.colors.white[100],
  },
  footerLink: {
    color: constants.colors.blue[100],
    fontWeight: 700,
  },
});
