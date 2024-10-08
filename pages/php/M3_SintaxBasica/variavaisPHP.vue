<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá a declarar e usar variáveis em PHP, além de entender a sintaxe básica e ver
                exemplos práticos.
            </p>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <h2><b>1. Declaração de Variáveis</b></h2>
            <p><b>O que são Variáveis?</b><br>
                Variáveis são "caixinhas" onde você pode guardar informações, como números ou texto. Em PHP, variáveis
                começam com o símbolo <code>$</code>.
            </p>
            <p><b>Como Declarar uma Variável:</b><br>
                Para criar uma variável, você usa o símbolo <code>$</code>, seguido pelo nome da variável e atribui um
                valor a ela usando o sinal de igual (<code>=</code>).
            </p>
            <pre>
<code>
    &lt;?php
        $nome = "João";      // Variável que armazena uma string
        $idade = 20;         // Variável que armazena um número inteiro
        $preco = 15.75;      // Variável que armazena um número decimal
    ?&gt;
</code>
            </pre>
            <p><b>Exibindo o Valor das Variáveis:</b><br>
                Para mostrar o valor de uma variável, você pode usar o comando <code>echo</code>.
            </p>
            <pre>
<code>
    &lt;?php
        $nome = "Ana";
        $idade = 30;
        echo "Nome: " . $nome . "&lt;br&gt;";  // Exibe o nome
        echo "Idade: " . $idade;             // Exibe a idade
    ?&gt;
</code>
            </pre>
            <p><b>Exemplo Completo:</b><br>
                Aqui está um exemplo completo mostrando como declarar e exibir variáveis.
            </p>
            <pre>
<code>
    &lt;?php
        $nome = "Carlos";
        $idade = 25;
        $cidade = "São Paulo";
        echo "Nome: " . $nome . "&lt;br&gt;";
        echo "Idade: " . $idade . "&lt;br&gt;";
        echo "Cidade: " . $cidade;
    ?&gt;
</code>
            </pre>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
        </v-main>
        <v-footer>
            <h3>Referências:</h3>
            <v-container class="d-block">
                <p v-for="(ref, index) in listaReferencias" :key="index">
                    <a :href="ref.link">{{ ref.name }}</a>
                </p>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
import MenuPHP from '~/components/php/menuPHP.vue'
export default {
    name: "Variaveis",
    data() {
        return {
            msg: 'Variáveis em PHP',
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
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