import { Button, PasswordInput, Paper, TextInput, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/auth";
import { getHttpErrorMessage } from "../../utils/httpError";
import { validateEmail, validatePassword } from "../../utils/validators/auth"; // theo kiểu mày đang dùng t truyền vào

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (v) => validateEmail(v, t),
      password: (v) => validatePassword(v, t, 6),
    },
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      notifications.show({
        title: t("auth.loginTitle"),
        message: t("auth.loginSuccess"),
      });
      navigate("/dashboard", { replace: true });
    },
    onError: (err: unknown) => {
      notifications.show({
        title: t("errors.title"),
        message: getHttpErrorMessage(err, t),
      });
    },
  });

  return (
    <Paper maw={400} mx="auto" mt="xl" p="lg">
      <Title order={2} mb="md">{t("auth.loginTitle")}</Title>

      <form
        onSubmit={form.onSubmit((values) => {
          mutation.mutate(values);
        })}
      >
        <TextInput
          label={t("auth.email")}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label={t("auth.password")}
          mt="md"
          {...form.getInputProps("password")}
        />

        <Button
          type="submit"
          fullWidth
          mt="xl"
          loading={mutation.isPending}
        >
          {t("auth.submit")}
        </Button>
      </form>
    </Paper>
  );
}
