<template>


<div class="background-black">
  
  <p class="text-avertissement" v-if="nbClick == 0">

    L'expérience est optimal avec un casque.
    La page n'étant pas responsive, elle ne fonctionne pas sur mobile.
  </p>

  <Transition name="fade" appear>
    
    <div class="panneau body" v-if="nbClick >= 1">
      <div class="poteau1"></div>
      <div class="poteau2"></div>
      <div class="bienvenue">
        <span id="light">B</span>
        <span id="T">I</span>
        <span id="light">E</span>
        <span id="T">N</span>
        <span id="G">V</span>
        <span id="L">E</span>
        <span id="G">N</span>
        <span id="L">U</span>
        <span id="T">E</span>
      </div>
      <!-- <span id="light">🎃</span> -->
    </div>  
  </Transition>


  <Transition name="fade" appear>
    <div class="lamp swing" v-if="nbClick >= 3"></div>
    <div class="lamp2 swing" v-if="nbClick == 2"></div>
  </Transition>

  <img class="zombie1" :src="zombie" v-if="nbClick >= 3" />
  <img class="zombie2" :src="zombie2" v-if="nbClick >= 3" />
  <img class="decor" :src="decor" v-if="nbClick >= 3" />

  <div class="button click-button" id="button-3" v-if="buttonEnable" v-on:click="onClickButton">
    <div id="circle"></div>
    <a href="#">{{textClickButton}}</a>
  </div>

  <div class="message-text" v-if="newMessageFlag">Vous avez un nouveau message.</div>

  <!-- <div class="made-by">Fait par Benjamin THEYTAZ</div> -->

</div>
</template>

<script>
export default {
  name: 'IntroComponent',
  props: {
    msg: String
  },

    data: function() {
    return {
      beast: '',
      textClickButton: "Commencement",
      nbClick: 0,
      audio1: "",
      audio2: "",
      audio3: "",
      audio4: "",
      music1: "",
      buttonEnable: true,
      newMessageFlag: false,
    };
  },

  created() {
    this.zombie = require('../assets/zombie.svg')
    this.zombie2 = require('../assets/zombie2.svg')
    this.decor = require('../assets/terrain.svg')

  },

  mounted(){

    this.audio1 = require("../assets/sound/zombie1.mp3");
    this.audio2 = require("../assets/sound/neon.mp3")
    this.audio3 = require("../assets/sound/rope.mp3")
    this.audio4 = require("../assets/sound/phone.mp3")
    this.music1 = require("../assets/sound/music/music3.mp3")

    // setTimeout(() => {this.launchMusic()}, 100);
  

  },

  methods: {

    onClickButton: function () {
      
      this.nbClick += 1

      if (this.nbClick == 1) {

        this.launchMusic()

        this.toggleFullScreen();
        this.textClickButton = "Que la Lumière fût !"

        this.audio2 = new Audio(this.audio2);

        this.audio2.addEventListener("canplaythrough", () => { 
          this.audio2.play(); 
          this.audio2.volume = 0.3
        })


      }

      if (this.nbClick == 2) {
        this.textClickButton = "Surprise !"


      }

      if (this.nbClick == 3) {
        this.textClickButton = "Accéder à la console.";
        this.buttonEnable =  false;
      
        this.audio1 = new Audio(this.audio1);
        this.audio1.addEventListener("canplaythrough", () => { 
        this.audio1 .play(); 
        this.audio1.volume = 0.7
        });
        setTimeout(() => {
              this.newMessage();
            }, 5000);

      }

      if (this.nbClick == 4) {

        this.audio2.pause();
        this.$emit('launchConsole', 1);

        this.music1.pause();
      
      }

    },

    newMessage: function () {

      this.buttonEnable =  true;
      this.newMessageFlag =  true;

      this.audio4 = new Audio(this.audio4);

      this.audio4.addEventListener("canplaythrough", () => { 
        this.audio4.play(); 
      })
    },


    toggleFullScreen: function () {

     
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    },

    launchMusic() {
      this.$emit('launchMusic', 0);
    },


    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../styles/eyes.css';
@import '../styles/lampe.css';
@import '../styles/light.css';
@import '../styles/buttons.css';



:root {
  --white:#FFA200 
}

.panneau {
    position: absolute;
    font-size: 150px;
    top: 223px;
    right: 928px;
    width: 915px;
    height: 171px;
    border: solid;
    border-color: #FFA200;
    border-radius: 18px;
    /* opacity: 0; */
}

.text-avertissement {
    position: absolute;
    font-size: 59px;
    top: 318px;
    right: 20%;
    width: 1127px;
    color: #FFA200;
}

.bienvenue {

  font-family: 'Friday13', monospace;
  letter-spacing: 24px;
}

.message-text {
  position: absolute;
    font-size: 36px;
    top: 676px;
    right: 381px;
    width: 1127px;
    color: #ffffff;
}

.poteau1 {
    background-color: #FFA200;
    width: 5px;
    height: 142px;
    position: absolute;
    top: 173px;
    left: 50px;
}

.poteau2 {

    background-color: #FFA200;
    width: 5px;
    height: 142px;
    position: absolute;
    top: 173px;
    left: 835px;
}

.made-by{
  position: absolute;
    font-size: 20px;
    top: 95%;
    right: 938px;
    color: #FFA200 ;
    opacity: 0.8;
}


body {
  margin: 0;
  font-family: Montserrat;
  font-size: 40px;
  color: #FFA200 ;
  letter-spacing: 0.7em;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
div > span {
  opacity: 0.40;
}

.click-button{
  position: absolute;
  top: 730px;
  left: 40.2%;
}
.zombie1 {
  position: absolute;
  width: 109px;
  top: 379px;
  /* left: 1496px; */
  z-index: 3;
  animation: animation-zombie1 5s linear reverse infinite
}

.zombie2 {
  position: absolute;
  width: 109px;
  /* top: 379px; */
  left: 1474px;
  z-index: 3;
  transform: scaleX(-1);
  animation: animation-zombie2 2s linear reverse infinite
}

.decor{
  width: 944px;
    position: absolute;
    top: 290px;
    left: 976px;
    z-index: 2;
}

.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 3s;
}


  @keyframes animation-zombie2{
    0% {
      top: 379px;
    }
    50% {
      top: 400px;
    }
    100% {
      top: 379px;
    }
  }

    @keyframes animation-zombie1{
    0% {
      left: 1250px;
      transform: scaleX(-1);
    }
    49% {
      transform: scaleX(-1);
    }
    50% {
      left: 1320px;
      transform: scaleX(1);
    }
    100% {
      left: 1250px;
      transform: scaleX(1);
      /* transform: scaleX(1); */
    }
  }



</style>
