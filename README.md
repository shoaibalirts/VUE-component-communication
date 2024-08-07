# VUE component communication from parent to child using props

<p>Added compoents and ensure coomuncaiton between them </p>
<p>FriendContact component enlists the friends list using received props </p>
<p>NewFriend component has form to get user input and then sends user data to App</p>
<p>App is the common place where both components along with two static user data </p>
<p>App ensures that events emitted by FriendContact and NewFriend must be listened using @ or v-on and then has a pointer/function to fulfill the functionality i.e. toToggleFavoritStatus, handleAddContact, and handleDeleteContact</p>
