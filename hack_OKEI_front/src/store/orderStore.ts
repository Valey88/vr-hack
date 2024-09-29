import { create } from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware"; // добавлено для devtools
import { url } from "./url/url";

const useOrderStore = create(
  devtools((get, set) => ({
    fio: "",
    age: 0,
    role: "", // maintainer or participant
    phone_number: "",
    email: "",
    team_name: "",
    track: "",
    setFio: (fio) => set({ fio }),
    setAge: (age) => set({ age }),
    setRole: (role) => set({ role }),
    setPhoneNumber: (phone_number) => set({ phone_number }),
    setEmail: (email) => set({ email }),
    setTeamName: (team_name) => set({ team_name }),
    setTrack: (track) => set({ track }),

    resetForm: () =>
      set({
        fio: "",
        age: 0,
        role: "",
        phone_number: "",
        email: "",
        team_name: "",
        track: "",
      }),

    registrationsOrder: async (data) => {
      // Добавлено: принимаем данные как аргумент
      const { fio, age, role, phone_number, email, team_name, track } = data; // Используем переданные данные

      try {
        const response = await axios.post(
          `${url}/api/v1/order/register`,
          {
            fio,
            age,
            role,
            phone_number,
            email,
            team_name,
            track,
          },
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
    id: "",
    link: "",
    setId: (id) => set({ id }),
    setLink: (link) => set({ link }),
    resetForm: () =>
      set({
        id: "",
        link: "",
      }),
    uploads: async (data) => {
      // Добавлено: принимаем данные как аргумент
      const { id, link } = data; // Используем переданные данные

      try {
        const response = await axios.put(
          `${url}/api/v1/team/update/${id}`,
          {
            id,
            link,
          },
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
