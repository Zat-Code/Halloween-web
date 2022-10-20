<template>
    <div>
      <v-shell
        :banner="banner"
        :shell_input="send_to_terminal"
        :commands="commands"
        @shell_output="prompt"
      ></v-shell>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MissionComponent',
    data() {
      return {
        send_to_terminal: "",
        message: ["Allô ? Il y a quelqu'un ?", "Comment avez-vous réussi à survivre aussi longtemps dans cette zone ?", "Quoi ? Vous n'êtes pas au courant ?! \n ça fait 4 mois que les rues sont infestées de monstres en tous genres... vous viviez dans une grotte ou quoi ?"],
        banner: {
        header: "Mission AGC",
        subHeader: "Vous avez 1 nouveau message.",
        helpHeader: "Ecrivez msg dans le terminal pour le lire.",
          emoji: {
              first: "💬",
              second: "💬",
              time: 750
          },
          sign: " AGC $",
        },
        commands: [

          { name: "cheatcode",
            desc: "Do you want cheat ? ",
            get() {
              return `<p>🐧🐧🐧  42   🐧🐧🐧 </p>`;
          }
          },
          
        ],

        Message1: `<div class="message-text-2">
              <t class="t">Allô ? Il y a quelqu'un ?</t>
              <t class="t">Comment avez-vous réussi à survivre aussi longtemps dans cette zone ?</t>
              <t class="t">Quoi ? Vous n'êtes pas au courant ?!</t>
              <t class="t">ça fait 4 mois que les rues sont infestées de monstres en tous genres... vous viviez dans une grotte ou quoi ??</t>
              <t class="t">Bon, je vais vous faire un court récap. La situation est très tendue ici. </t>
              <t class="t">Le monde entier s'est fait complètement surprendre et nous faisons partie, vous et moi, des derniers survivants.</t>
              <t class="t">D'ailleurs, j'en oublie les bonnes manières, je ne me suis même pas présenté.</t>
              <t class="t">Je m'appelle Toes, Thomas Toes et j'essaye de coordonner ce qui qu'il reste de l'humanité.</t>
              <t class="t">Et voilà que vous débarquez, tout proches d'un objectif critique. </t>
              <t class="t">On va avoir besoin de vous, si vous l'acceptez.</t>
              <t class="t">D'après des sources fiables, le CNES était en train de mettre sur pied un plan pour contrer cette invasion. </t>
              <t class="t">Malheureusement, l'endroit est infecté de monstres. Mais nous avons une chance de le récupérer, grâce à vous.</t>
              <t class="t">Votre géolocalisation m'indique que vous êtes très proche du CNES,</t>
              <t class="t">et vous pouvez y accéder très facilement via les égouts. </t>
              <t class="t">J'aimerais que vous y alliez et que vous récupériez des informations sur ce fameux plan, je vous guiderais.</t>
              <t class="t"></t>
              <t class="t">[Ecrivez mission dans le terminal pour avancer]</t>
              </div>`,

        messageSound1: "",
        
        Message2: `<div class="message-text-2">
              <t class="t">Mais oui bien sûr ! J'avais aussi entendu parler de ce fameux Roi monstre.</t>
              <t class="t">Nous avons enfin une chance de sauver l'humanité !</t>
              <t class="t">Il est temps de mettre en place l'opération "Anéantissement du Grand Cruel" ou AGC pour les intime.</t>
              <t class="t">Cette opération est programmée pour le : </t>
              <t class="t"></t>
              <div class="date">Jeudi 10 Novembre 2022</div>
              <t class="t"></t>
              <t class="t">Nous avons encore un peu de temps pour nous préparer.</t>
              <t class="t"> Au programme : </t>
              <t class="t">- Un concours de "Jack'o lantern", afin d'attirer le Roi dans notre piège.</t>
              <t class="t">- Un concours de déguisements, le Roi monstre ne pourra pas s'empêcher de venir pour le concours du plus beau monstre.</t>
              <t class="t">- Un loup garou, les monstres raffolent de ce jeu.</t>
              <t class="t">Nous devons gagner la confiance des monstres, et pour cela, une seule solution : nous déguiser.</t>
              <t class="t">Sortez votre meilleur costume si vous souhaitez passer inaperçu.</t>
              <t class="t">Plus nous serons nombreux, plus les chances de succès seront grandes !</t>
              <t class="t"></t>
              <t class="t">Je vous recontacterais bientôt avec plus d'informations.</t>
              </div>`,

        messageSound2: "",






      };
    },

    props: {
      msgConsole: Number
    },


    mounted(){

      this.messageSound1 = require("../assets/sound/histoire1.mp3");
      this.messageSound2 = require("../assets/sound/histoire2.mp3");


      // setTimeout(() => {this.launchMusic()}, 100);


      },

    methods: {
      prompt(value) {
        if (value.trim() == "mission") {
          this.LaunchMission();
        }

        else if (value.trim() == "msg") {

          if (this.msgConsole == 1){
            this.LaunchMessage1()
          }

          else if (this.msgConsole == 2){
            this.LaunchMessage2()
          }

          // this.LaunchMessage1()
        }
        else{
            this.send_to_terminal = value
        }

      },


      LaunchMission()
      {
        this.messageSound1.pause();
        this.$emit('launchMission', 0);
      },



      LaunchMessage1(){
        console.info("Bonjour")
        // this.Message1.forEach(item => this.send_to_terminal = item)
        this.send_to_terminal = this.Message1

        this.messageSound1 = new Audio(this.messageSound1);

        this.messageSound1.addEventListener("canplaythrough", () => { 
          this.messageSound1.play(); 
          this.messageSound1.volume = 1
        })
      },

      LaunchMessage2(){
        console.info("Bonjour")
        // this.Message1.forEach(item => this.send_to_terminal = item)
        this.send_to_terminal = this.Message2

        this.messageSound2 = new Audio(this.messageSound2);

        this.messageSound2.addEventListener("canplaythrough", () => { 
          this.messageSound2.play(); 
          this.messageSound2.volume = 1
        })
      },


    },




  };
  </script>
  
  <style>

.date {

  font-family: 'stranger-back', monospace;
  color: #FFA200;
  font-size: 62px;
}

.button-green {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.message-text-2{
  text-align: justify;
  /* position: relative;
  left: -115px; */
}

.message-text-2  > * {
  display: block;
  margin-bottom: -20px;
}

.t{
  margin-bottom: -20px;
}

  </style>