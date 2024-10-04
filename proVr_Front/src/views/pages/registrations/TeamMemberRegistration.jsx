import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import useOrderStore from "../../../store/orderStore";
import { ToastContainer, toast } from "react-toastify"; // добавлено для уведомлений
import "react-toastify/dist/ReactToastify.css"; // добавлено для использования store

// Создаем новую тему с черно-фиолетовой и розовой цветовой гаммой
const theme = createTheme({
  palette: {
    primary: {
      main: "#a236d5", // Глубокий фиолетовый
    },
    secondary: {
      main: "#d536bc", // Яркий розовый
    },
    background: {
      default: "#1a1a1a", // Почти черный фон
      paper: "#2a2a2a", // Темно-серый фон для карточек
    },
    text: {
      primary: "#ffffff", // Белый текст
      secondary: "#b3b3b3", // Светло-серый текст
    },
  },
});

// Определяем интерфейс для данных формы

function TeamMemberRegistration() {
  const {
    fio,
    age,
    role,
    phone_number,
    email,
    team_name,
    track,
    setFio,
    setAge,
    setRole,
    setPhoneNumber,
    setEmail,
    setTeamName,
    setTrack,
    registrationsOrder,
  } = useOrderStore();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const registerOrder = useOrderStore((state) => state.registrationsOrder); // получаем метод из store
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // типизация onSubmit
    const formattedData = {
      fio: data.fio,
      age: Number(data.age), // Преобразуем age в число
      role: data.role,
      phone_number: data.phone_number,
      email: data.email,
      team_name: data.team_name,
      track: data.track,
    };

    try {
      setLoading(true);
      await registerOrder(formattedData); // получаем ответ от метода регистрации
      toast.success("Вы успешно зарегистрированы проверьте вашу почту!"); // уведомление об успехе
    } catch (error) {
      const errorMessage = String(error).split("Error: ")[1];
      toast.error(
        `Произошла ошибка при регистрации участника команды. Ошибка: ${errorMessage}`
      ); // уведомление об ошибке
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Container
        maxWidth="sm"
        sx={{
          background: theme.palette.background.paper,
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 3px 10px 2px rgba(106, 27, 154, 0.3)",
          position: "relative", // добавлено для позиционирования оверлея
        }}
      >
        {loading && ( // добавлено для отображения оверлея загрузки
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <CircularProgress color="secondary" /> {/* анимация загрузки */}
          </Box>
        )}
        <Typography variant="h4" component="h2" color="secondary" gutterBottom>
          Регистрация участника команды
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Название команды"
            fullWidth
            margin="normal"
            {...register("team_name", { required: true })}
            error={!!errors.team_name}
            helperText={errors.team_name && "Это поле обязательно"}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <TextField
            label="ФИО"
            fullWidth
            margin="normal"
            {...register("fio", { required: true })}
            error={!!errors.fio}
            helperText={errors.fio && "Это поле обязательно"}
            onChange={(e) => setFio(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email && "Это поле обязательно"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Номер телефона"
            type="tel"
            fullWidth
            margin="normal"
            {...register("phone_number", { required: true })}
            error={!!errors.phone_number}
            helperText={errors.phone_number && "Это поле обязательно"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Возраст"
            type="number"
            fullWidth
            margin="normal"
            {...register("age", { required: true, min: 10, max: 100 })}
            error={!!errors.age}
            helperText={
              errors.age
                ? errors.age.type === "required"
                  ? "Это поле обязательно"
                  : "Возраст должен быть от 10 до 100 лет"
                : ""
            }
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
          <FormControl fullWidth margin="normal" error={!!errors.role}>
            <InputLabel id={`role-label`}>Роль в команде</InputLabel>
            <Select
              labelId={`role-label`}
              label="Роль в команде"
              {...register("role", { required: true })}
              defaultValue=""
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="maintainer">Руководитель команды</MenuItem>
              <MenuItem value="captain">Капитан</MenuItem>
              <MenuItem value="participant">Участник</MenuItem>
            </Select>
            {errors.role && (
              <Typography color="error" variant="caption">
                Это поле обязательно
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth margin="normal" error={!!errors.track}>
            <InputLabel id={`track-label`}>Выберите направление</InputLabel>
            <Select
              labelId={`track-label`}
              label="Выберите направление"
              {...register("track", { required: true })}
              defaultValue=""
              onChange={(e) => setTrack(e.target.value)}
            >
              <MenuItem value="AR">AR</MenuItem>
              <MenuItem value="3D">3D</MenuItem>
              <MenuItem value="VR">VR</MenuItem>
            </Select>
            {errors.track && (
              <Typography color="error" variant="caption">
                Это поле обязательно
              </Typography>
            )}
          </FormControl>
          <Box mt={2}>
            <FormControlLabel
              control={
                <Checkbox {...register("agreement", { required: true })} />
              }
              label={
                <a
                  href="/Согласие ОПД хакатон.docx"
                  download
                  style={{ color: "#d536bc", textDecoration: "none" }}
                >
                  Я согласен на обработку личных данных
                </a>
              }
            />
            {errors.agreement && (
              <Typography color="error">
                Вы должны согласиться с условиями
              </Typography>
            )}
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default TeamMemberRegistration;
