<template>
  <v-app>

    <v-navigation-drawer app>
      <MenuJs />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Olá! Hoje vamos aprender sobre <strong>interpolação de strings</strong> em JavaScript. Vamos explorar como
              usar Template Literals para tornar o código mais legível e poderoso!
            </p>

            <v-container video>
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                </iframe>
              </v-responsive>
            </v-container>
            <h2><strong>O que são Template Literais?</strong></h2>
            <p class="justificar">
              Template Literais é uma maneira de criar strings que permitem a interpolação de variáveis e expressões.
              Eles são delimitados por crases (<code>`</code>) em vez de aspas simples ou duplas. Isso facilita a
              construção de strings dinâmicas.
            </p>
            <h2><strong>Interpolação de Variáveis</strong></h2>
            <p>Você pode incorporar variáveis diretamente dentro de uma string usando Template Literals. Veja um
              exemplo:</p>
            <v-code>
              <pre><code>
  const nome = "João";
  const idade = 30;
  
  const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
  console.log(mensagem); // Saída: Olá, meu nome é João e eu tenho 30 anos.
                  </code></pre>
            </v-code>

            <h2><strong>Interpolação de Expressões</strong></h2>
            <p>Você pode incluir expressões JavaScript dentro das crases. Por exemplo:</p>
            <v-code>
              <pre><code>
  const a = 5;
  const b = 10;
  
  const resultado = `A soma de ${a} e ${b} é ${a + b}.`;
  console.log(resultado); // Saída: A soma de 5 e 10 é 15.
                  </code></pre>
            </v-code>

            <h2><strong>Uso de Funções dentro de Template Literais</strong></h2>
            <p>Funções podem ser chamadas diretamente dentro de Template Literais para gerar strings dinâmicas:</p>
            <v-code>
              <pre><code>
  function saudacao(nome) {
    return `Olá, ${nome}!`;
  }
  
  const nome = "Maria";
  const mensagem = `${saudacao(nome)} Como você está?`;
  console.log(mensagem); // Saída: Olá, Maria! Como você está?
                  </code></pre>
            </v-code>

            <h2><strong>Comparação com Concatenação de Strings</strong></h2>
            <p>Antes dos Template Literais, usamos concatenação de strings com o operador <code>+</code>. Veja a
              comparação:</p>
            <h3>Concatenação:</h3>
            <v-code>
              <pre><code>
  const nome = "Ana";
  const idade = 25;
  
  const mensagem = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";
  console.log(mensagem); // Saída: Olá, meu nome é Ana e eu tenho 25 anos.
                  </code></pre>
            </v-code>
            <h3>Template Literals:</h3>
            <v-code>
              <pre><code>
  const nome = "Ana";
  const idade = 25;
  
  const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
  console.log(mensagem); // Saída: Olá, meu nome é Ana e eu tenho 25 anos.
                  </code></pre>
            </v-code>

            <h2><strong>Conclusão</strong></h2>
            <p class="justificar">
              Agora você aprendeu como usar Template Literals para interpolação de variáveis e expressões em JavaScript.
              Isso torna o seu código mais limpo e mais fácil de ler. Experimente usar Template Literals nos seus
              projetos e veja como eles podem ajudar a melhorar o seu trabalho com strings!
            </p>
          </v-col>
        </v-row>
      </v-container>
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
import MenuJs from '~/components/js/menuJS.vue'
export default {
  name: "interpolacao",
  data: () => ({
    msg: "Aula de Interpolação em JavaScript",
    video: '/videos/js/aula1_js.mp4',
    propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    listaReferencias: [
      { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
      { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
      { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
    ],
  }),
  components: {
    MenuJs
  }
}
</script>
<style scoped>
.video {
  max-width: 70%;
  max-height: 70%;
}
</style>