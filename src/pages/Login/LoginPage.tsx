import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Box, Paper, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";

import { login } from "../../services/auth";
import { validateEmail, validatePassword } from "../../utils/validators/auth";
import { AUTH_ME_QUERY_KEY } from "../../hooks/useAuth";
import { mapAxiosErrorToI18n } from "@/utils/i18n/httpErrorI18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);

  const [snack, setSnack] = React.useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
      navigate("/dashboard", { replace: true });
    },
    onError: (err: unknown) => {
      const { key, fallbackMessage } = mapAxiosErrorToI18n(err);
      setSnack({
        open: true,
        message: fallbackMessage ?? t(key),
      });
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eErr = validateEmail(email, t) || null;
    const pErr = validatePassword(password, t, 6) || null;

    setEmailError(eErr);
    setPasswordError(pErr);

    if (eErr || pErr) return;

    mutation.mutate({ email, password });
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 420,
          mx: "auto",
          mt: 6,
          p: 3,
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={2}>
          {t("auth.loginTitle")}
        </Typography>

        <Box component="form" onSubmit={onSubmit} sx={{ display: "grid", gap: 2 }}>
          <TextField
            label={t("auth.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError ?? " "}
            autoComplete="email"
            fullWidth
          />

          <TextField
            label={t("auth.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError ?? " "}
            type="password"
            autoComplete="current-password"
            fullWidth
          />

          <Button type="submit" variant="contained" disabled={mutation.isPending}>
            {mutation.isPending ? t("common.loading", "Loading...") : t("auth.submit")}
          </Button>
        </Box>
      </Paper>

      <LanguageSwitcher />

      <Snackbar
        open={snack.open}
        autoHideDuration={3500}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity="error"
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          sx={{ width: "100%" }}
        >
          <strong>{t("errors.title")}</strong> — {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
}
