<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <container>
                <iframe :src="url + linguagem" frameborder="0" allowfullscreen>
                </iframe>
            </container>
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '~/components/php/menuPHP.vue'
export default {
    name: "codePHP",
    data() {
        return {

            url: "https://onecompiler.com/",
            linguagem: "php",
        }
    },
    components: {
        MenuPHP
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
