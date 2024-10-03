import { useForm } from "react-hook-form"; // Импортируем useForm из react-hook-form
import { TextField, Button } from "@mui/material"; // Импортируем компоненты Material-UI
import {
  ThemeProvider,
  Container,
  Typography,
  createTheme,
} from "@mui/material"; // Импортируем компоненты Material-UI
import useOrderStore from "../../../../store/orderStore";
import { url } from "../../../../store/url/url";
import { ToastContainer, toast } from "react-toastify";
const TestFormUploads = () => {
  const { id, link, setId, setLink, uploads } = useOrderStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
  const onSubmit = async (data) => {
    // Указаны типы для data
    const requestUrl = `${url}/api/v1/team/update/${encodeURIComponent(
      data.id
    )}`; // Исправлено: используем шаблонные строки для подстановки id
    await uploads({ id: data.id, link: data.link }); // Передаем id и link в uploads
    console.log(data); // Логируем данные для проверки
    try {
      console.log("Team Members Registered:", formattedData);
      await registerOrder(formattedData);
      // Уведомление об успехе должно быть после успешной регистрации
      toast.success("Вы успешно отправили задание!"); // уведомление об успехе
    } catch (error) {
      console.error("Ошибка отправки задания:", error);
      // Уведомление об ошибке должно быть в блоке catch
      toast.error("Произошла ошибка при отправке задания."); // уведомление об ошибке
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          background: theme.palette.background.paper,
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 3px 10px 2px rgba(106, 27, 154, 0.3)",
        }}
      >
        <Typography variant="h5" component="h3" color="secondary" gutterBottom>
          Прекрепить тестовое задание
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Номер команды"
            fullWidth
            margin="normal"
            {...register("id", { required: true })}
            error={!!errors.id}
            helperText={errors.id && "Это поле обязательно"} // Исправлено с errors.teamName на errors.id
            onChange={(e) => setId(e.target.value)} // Добавлено получение значения из события
          />
          <TextField
            label="Ссылка на облако c заданием"
            fullWidth
            margin="normal"
            {...register("link", { required: true })}
            error={!!errors.link}
            helperText={errors.link && "Это поле обязательно"}
            onChange={(e) => setLink(e.target.value)} // Добавлено получение значения из события
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Отправить
          </Button>
        </form>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default TestFormUploads;
