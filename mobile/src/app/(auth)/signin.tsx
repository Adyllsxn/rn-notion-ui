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
import { Link, useRouter } from "expo-router";
import { constants } from "@/lib/constants"

export default function SignIn() {
  const router = useRouter();
  function handleLogin() {
    router.replace("/(tabs)");
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ios:"padding", android:"height"})}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/imgAuth.png")}
            style={styles.illustration}
          />

          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha.
          </Text>

          <View style={styles.form}>
            <Imput placeholder="E-mail" keyboardType="email-address" />
            <Imput placeholder="Senha" secureTextEntry />
            <Button label="Entrar" onPress={handleLogin} />
          </View>
          <Text style={styles.footerText}>
            Não tem uma conta?{" "}
            <Link href={"/signup"} style={styles.footerLink}>
              Cadastre-se aqui
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
