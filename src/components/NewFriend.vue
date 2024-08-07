// ----------- mark up -------------------------- // in the form we get user
inputs and when everything is in place then we emit a custom event to // send
this form data to App component.
<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" v-model="name" placeholder="enter your name" />
    </div>
    <div>
      <label>Phone</label>
      <input
        type="text"
        v-model="phoneNumber"
        placeholder="enter your phone number"
      />
    </div>
    <div>
      <label>Email</label>
      <input
        type="text"
        v-model="emailAddress"
        placeholder="enter your email address"
      />
    </div>
    <button type="submit" @click="handleForm">Add Contact</button>
  </form>
</template>

// ----------- configuration object -------------
<script>
export default {
  emits: ["submit-button-event"],
  data() {
    {
      return {
        name: "",
        phoneNumber: "",
        emailAddress: "",
      };
    }
  },
  methods: {
    handleForm(event) {
      event.preventDefault();
      const formData = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
      };
      //   console.log(formData);

      this.$emit("submit-button-event", formData);
    },
  },
};
</script>

// ---------- css styling ------------------------
<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
