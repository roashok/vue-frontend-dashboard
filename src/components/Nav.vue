<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href>Home</router-link>
          <div>
            <ul class="navbar=nac me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link to="/login" class="navbar-brand" href>Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="navbar-brand" href>Register</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}

</script>
