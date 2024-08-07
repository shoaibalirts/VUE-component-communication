<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <div style="display: flex; justify-content: center">
      <new-friend @submit-button-event="newFormData"></new-friend>
    </div>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact-event="handleDeleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find((friend) => {
        console.log("toggleFavoriteStatus triggered");

        // console.log(friend);
        // iterates all elements from 0 to the length of array, but as soon as it meets the below condition then
        // it stops further iteration and returns that element which is pointing the current position
        return friend.id === friendId;
      });
      console.log(identifiedFriend);

      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    newFormData(formData) {
      // console.log(formData);

      const newFriend = {
        id: Math.random(),
        name: formData.name,
        phone: formData.phoneNumber,
        email: formData.emailAddress,
        isFavorite: false,
      };
      // console.log(formData);

      this.friends.push(newFriend);
    },
    handleDeleteContact(contactId) {
      console.log(contactId);

      this.friends = this.friends.filter((contact) => {
        return contact.id !== contactId;
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
