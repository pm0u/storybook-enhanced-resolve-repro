import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
