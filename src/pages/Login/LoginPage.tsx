import { Button, TextInput, PasswordInput, Paper, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validators/auth";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const { t } = useTranslation();

  const form = useForm({
    initialValues: { email: "", password: "" },

    validate: {
      email: (v) => validateEmail(v, t),
      password: (value) => validatePassword(value, t, 6),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("login submit:", values);
  };

  return (
    <Paper maw={400} mx="auto" mt="xl" p="lg">
      <Title order={2}>{t("auth.loginTitle")}</Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label={t("auth.email")} {...form.getInputProps("email")} />
        <PasswordInput
          label={t("auth.password")}
          mt="md"
          {...form.getInputProps("password")}
        />
        <Button type="submit" fullWidth mt="xl">{t("auth.submit")}</Button>
      </form>
    </Paper>
  );
}
