<script lang="ts" setup>
const supabase = useSupabaseClient()

const onSignIn = () => {
  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `http://localhost:3000/api/auth/callback`,
    },
  })
}
</script>

<template>
  <section>
    <h1>Login</h1>
    <button @click="onSignIn">login with google</button>
  </section>
</template>