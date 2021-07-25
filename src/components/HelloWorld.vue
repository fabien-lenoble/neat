<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div
            v-for="(user, index) in users"
            :key="index"
        >
            user {{ index }}: {{ user }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getAllUsers } from '@/services/UserService';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    users: string[] = [];

    async getAllUsers(): Promise<void> {
        const users = await getAllUsers();
        this.users = users;
    }

    async mounted(): Promise<void> {
        await this.getAllUsers();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
