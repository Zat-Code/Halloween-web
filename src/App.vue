<template>
  <div id="app">

    <IntroComponent @launchConsole="onLaunchConsole" @launchMusic="onLaunchMusic" v-if="vueNumber == 0"></IntroComponent>
    <Transition name="console" appear>
      <MissionComponent  @launchMission="onLaunchMission" :msgConsole="msgConsole" class="mission" v-if="vueNumber == 1"></MissionComponent>
    </Transition>
    <LightComponent @launchConsole="onLaunchConsole" class="light-component" v-if="vueNumber == 2"></LightComponent>

  </div>
</template>

<script>
import LightComponent from './components/Light.vue'
import IntroComponent from './components/Intro.vue'
import MissionComponent from './components/Mission.vue'

export default {
  name: 'App',
  components: {
    IntroComponent,
    LightComponent,
    MissionComponent
  },

  data: function() {
    return {
    vueNumber: 0,
    music1: "",
    msgConsole: 1,

    };
  },

  mounted(){

  this.music1 = require("./assets/sound/music/music3.mp3")

// setTimeout(() => {this.launchMusic()}, 100);


  },

   methods: {
    onLaunchConsole(msgConsole) {
      this.vueNumber = 1;
      this.msgConsole = msgConsole
      console.info("console: ", this.msgConsole)
    },


    onLaunchMission() {
      this.vueNumber = 2;
      this.music1.pause();
    },

    onLaunchMusic() {
      this.music1 = new Audio(this.music1);
      this.music1.addEventListener("canplaythrough", () => { 
      this.music1.play(); 
      this.music1.volume = 0.2
      })

    },
		
  },

}
</script>

<style>


@font-face {
  font-family: "Gloomy-Things";
  src: local("Gloomy-Things"),
   url(assets/fonts/Gloomy-Things.ttf) format("truetype");
}

@font-face {
  font-family: "Curse-Zombie";
  src: local("Curse-Zombie"),
   url(assets/fonts/Curse-of-the-Zombie.ttf) format("truetype");
}

@font-face {
  font-family: "Friday13";
  src: local("Friday13"),
   url(assets/fonts/Friday13.ttf) format("truetype");
}

@font-face {
  font-family: "stranger-back";
  src: local("stranger-back"),
   url(assets/fonts/stranger-back.ttf) format("truetype");
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: #2c3e50;
}

html {
  margin:0;
  padding:0;
  height:100%;
  background-color: black;
}

.mission {

  position: absolute;
  top: 100px;
  left: 642px;
  width: 1080px;

}

.light-component{
  background-color: white;
}


.console-enter{
  position: absolute;
  top: 100px;
  left: 642px;
  width: 10px;
}

.console-enter-active{
  transition: all 2s;
}

</style>
