import { useForm } from "react-hook-form";
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
      console.log("Team Members Registered:", formattedData);
      await registerOrder(formattedData);
      // Уведомление об успехе должно быть после успешной регистрации
      toast.success("Вы успешно зарегистрированы проверьте вашу почту!"); // уведомление об успехе
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      // Уведомление об ошибке должно быть в блоке catch
      toast.error("Произошла ошибка при регистрации участника команды."); // уведомление об ошибке
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
        }}
      >
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
            {...register("fio", { required: true })} // Поле "fio" правильно
            error={!!errors.fio}
            helperText={errors.fio && "Это поле обязательно"}
            onChange={(e) => setFio(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email", { required: true })} // Поле "email" правильно
            error={!!errors.email}
            helperText={errors.email && "Это поле обязательно"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Номер телефона"
            type="tel"
            fullWidth
            margin="normal"
            {...register("phone_number", { required: true })} // Поле "phone_number" правильно
            error={!!errors.phone_number}
            helperText={errors.phone_number && "Это поле обязательно"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Возраст"
            type="number"
            fullWidth
            margin="normal"
            {...register("age", { required: true, min: 10, max: 100 })} // Поле "age" правильно
            error={!!errors.age}
            helperText={
              errors.age
                ? errors.age.type === "required"
                  ? "Это поле обязательно"
                  : "Возраст должен быть от 10 до 100 лет" // Исправлено на 10
                : ""
            }
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
          <FormControl fullWidth margin="normal" error={!!errors.role}>
            <InputLabel id={`role-label`}>Роль в команде</InputLabel>
            <Select
              labelId={`role-label`}
              label="Роль в команде"
              {...register("role", { required: true })} // Поле "role" правильно
              defaultValue=""
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="maintainer">Руководитель команды</MenuItem>
              <MenuItem value="captain">Капитан</MenuItem> // Исправлено на
              "captain"
              <MenuItem value="participant">Участник</MenuItem>
            </Select>
            {errors.role && (
              <Typography color="error" variant="caption">
                Это поле обязательно
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth margin="normal" error={!!errors.tarck}>
            <InputLabel id={`tarck-label`}>Выберите направление</InputLabel>
            <Select
              labelId={`track-label`}
              label="Выберите направление"
              {...register("track", { required: true })} // Поле "track" правильно
              defaultValue=""
              onChange={(e) => setTrack(e.target.value)}
            >
              <MenuItem value="AR">AR</MenuItem>
              <MenuItem value="3D">3D</MenuItem>
              <MenuItem value="VR">VR</MenuItem>
            </Select>
            {errors.role && (
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default TeamMemberRegistration;
