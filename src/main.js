import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
const app = createApp(App);

// app.component("friend-contact", FriendContact);
app
  .component("friend-contact", FriendContact)
  .component("new-friend", NewFriend);

// FriendContact is component or a file name, and friend-contact is a usage like <friend-contact>

app.mount("#app");
