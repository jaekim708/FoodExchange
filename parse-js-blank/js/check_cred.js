function check_cred() {
  Parse.initialize("TnvJePY5vT2oSuP3VgWsO8OTWwZO2rMX0ZdwvRIh", "moibVX5koKKKLKGvMmavEGVDkvZ3lVfWw9x23cIt");
  var currentUser = Parse.User.current();
  if (currentUser) {
    alert("Welcome " + currentUser.get('username'));
  } else {
    alert("Please login");
    window.location.href="./login.html";
  }
}