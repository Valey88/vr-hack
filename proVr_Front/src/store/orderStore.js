import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware"; // добавлено для devtools
import { url } from "./url/url";
const useOrderStore = create(
  devtools((_, set) => ({
    // Изменено: убрано неиспользуемое значение get
    fio: "",
    age: 0,
    role: "",
    phone_number: "",
    email: "",
    team_name: "",
    track: "",
    id: "",
    link: "",
    setFio: (fio) => set((state) => ({ ...state, fio })),
    setAge: (age) => set((state) => ({ ...state, age })),
    setRole: (role) => set((state) => ({ ...state, role })),
    setPhoneNumber: (phone_number) =>
      set((state) => ({ ...state, phone_number })),
    setEmail: (email) => set((state) => ({ ...state, email })),
    setTeamName: (team_name) => set((state) => ({ ...state, team_name })),
    setTrack: (track) => set((state) => ({ ...state, track })),
    setId: (id) => set((state) => ({ ...state, id })),
    setLink: (link) => set((state) => ({ ...state, link })),
    resetForm: () =>
      set({
        fio: "",
        age: 0,
        role: "",
        phone_number: "",
        email: "",
        team_name: "",
        track: "",
        id: "",
        link: "",
      }),
    registrationsOrder: async (data) => {
      try {
        const response = await axios.post(
          `${url}/api/v1/order/register`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log(response.data);
        useOrderStore.getState().resetForm();
      } catch (error) {
        console.log("Error:", error);
      }
    },
    uploads: async (data) => {
      // Добавлено: указание типа возвращаемого значения
      // Используем новый тип
      const { id, link } = data; // Используем переданные данные

      try {
        const response = await axios.post(
          `${url}/api/v1/team/update/${id}`,
          data, // Используем переданные данные
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log(response.data); // Обработка ответа
        useOrderStore.getState().resetForm();
      } catch (error) {
        console.log("Error:", error);
      }
    },
  }))
);
export default useOrderStore;
