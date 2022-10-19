<template>
  <div>
    <div class="fond-black" v-if="!TurnOn">
      <div class="cnes-text">Vous arrivez proche du CNES</div>
      <img class="torch" :src="torche" />
      <div class="pulsating-circle" v-on:click="switchLight"></div>
    </div>

    <div class="fond" v-if="TurnOn">
      
      <div class="monstre1-div" >
        <img class="monstre1" :src="monstre1" />
        <div class="face-monstre1" >
          <div class="left eye" ref="eye-left-monstre1">
            <div class="pupil"  ref="pupil1"></div>
          </div>
          <div class="right eye" ref="eye-right-monstre1">
            <div class="pupil" ref="pupil2"></div>
          </div>
        </div>
      </div>

      <div class="monstre2-div" >
        <img class="monstre2" :src="monstre2" />
        <div class="face-monstre2"  >
          <div class="left eye-monster2" ref="eye-left-monstre2">
            <div class="pupil-monster2"  ref="pupil1-monster2"></div>
          </div>
          <div class="right eye-monster2" ref="eye-right-monstre2">
            <div class="pupil-monster2" ref="pupil2-monster2"></div>
          </div>
        </div>
      </div>

      <div class="monstre3-div" >
        <img class="monstre3" :src="monstre3" />
        <div class="face-monstre3"  >
          <div class="left eye-monster3" ref="eye-left-monstre3">
            <div class="pupil-monster3"  ref="pupil1-monster3"></div>
          </div>
          <div class="right eye-monster3" ref="eye-right-monstre3">
            <div class="pupil-monster3" ref="pupil2-monster3"></div>
          </div>
        </div>
      </div>

      <div class="monstre3-2-div" >
        <img class="monstre3" :src="monstre3" />
        <div class="face-monstre3"  >
          <div class="left eye-monster3" ref="eye-left-monstre3-2">
            <div class="pupil-monster3"  ref="pupil1-monster3-2"></div>
          </div>
          <div class="right eye-monster3" ref="eye-right-monstre3-2">
            <div class="pupil-monster3" ref="pupil2-monster3-2"></div>
          </div>
        </div>
      </div>

      <div class="monstre4-div" >
        <img class="monstre4" :src="monstre4" />
        <div class="face-monstre4"  >
          <div class="left eye-monster4" ref="eye-left-monstre4">
            <div class="pupil-monster4"  ref="pupil1-monster4"></div>
          </div>
          <div class="right eye-monster4" ref="eye-right-monstre4">
            <div class="pupil-monster4" ref="pupil2-monster4"></div>
          </div>
        </div>
      </div>

      <div class="monstre4-2-div" >
        <img class="monstre4" :src="monstre4" />
        <div class="face-monstre4"  >
          <div class="left eye-monster4" ref="eye-left-monstre4-2">
            <div class="pupil-monster4"  ref="pupil1-monster4-2"></div>
          </div>
          <div class="right eye-monster4" ref="eye-right-monstre4-2">
            <div class="pupil-monster4" ref="pupil2-monster4-2"></div>
          </div>
        </div>
      </div>

      <div class="button-finish click-button2" id="button-finish" v-on:click="onClickButton">
          <div id="circle"></div>
          <b href="#">Rentrer à la base.</b>
      </div>

    <!-- <h1 class="click-button"><span>POSSIBLE</span></h1> -->

    <div>
          <div id="flashlight" ref="light"></div>
          <div class="container-text">
            <p class="text-1" v-for="text in textJournal" :key="text">
              {{text}}
            </p>
            <!-- <h1 class="click-button"><span>POSSIBLE</span></h1> -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LightComponent',
  props: {
    msg: String
  },

    data: function() {
    return {
      mouseX: 0,
      mouseY: 0,
      flashlight: null,
      TurnOn: false,
      textJournal: ["journal de bord, jour n°74",
        "Nous commençons a ne plus avoir de vivre, le CNES n'étais pas préparer a un problème aussi épineux.",
        "Nous vivons maintenant reclus depuis depuis 78 jour et plusieurs survivants commence à avoir quelques comportements étranges.",
        "Certain d'entre-eux commence à décorer un cactus afin de lutter contre la solitude... D'autres accroche des canards au plafond...",
        "Mais un élément nous permet de tenir: l'espoir !",
        "Nous savons que les monstres ont commencé à sortir de terre lors de l'apparition d'une entité nommée le 'Roi-monstre'. ", 
        "Tous indique que la menace des monstres sera anéantie à la disparition de ce dernier.",
        "Le plan est simple : l'appâter et le tuer.",
        "D'après des sources sûre, le Roi monstre adore les citrouille-lanterne et à un ego surdimensionner.",
        "Ceci pourrait peut être nous aider.", 
        "Caporal Ernest Georges Alphonse."],
      walkSound: "",
      music: "",
    };
  },

  created() {

      document.addEventListener("mousemove", this.getMousePosition);
      document.addEventListener("touchmove", this.getMousePosition);
      this.torche = require('../assets/torche.svg')
      this.monstre1 = require('../assets/monstre1.svg')
      this.monstre2 = require('../assets/monstre2.svg')
      this.monstre3 = require('../assets/phantome.svg')
      this.monstre4 = require('../assets/pingouin.svg')
  },

  mounted(){

    this.walkSound = require("../assets/sound/walk.mp3");
    this.music = require("../assets/sound/music/music4.mp3")
    setTimeout(() => {this.launchWalk()}, 100);


  },

  methods: {

      getMousePosition(event) {

      this.flashlight = this.$refs["light"]


      let pupils = []
      for (let [key, value] of Object.entries(this.$refs)) {
        if (/^pupil/.test(key)) {
            pupils.push(value)
        }
      }

      let eyes = []
      for (let [key, value] of Object.entries(this.$refs)) {
        if (/^eye/.test(key)) {
            eyes.push(value)
        }
      }

      this.mouseX = event.pageX;
      this.mouseY = event.pageY;


      if (this.flashlight != null) {
        this.flashlight.style.setProperty("--Xpos", this.mouseX + "px");
        this.flashlight.style.setProperty("--Ypos", this.mouseY + "px");
      


      pupils.forEach(item => this.trackingPupil(item))
      eyes.forEach(item => this.trackingEye(item))

      }


    },

    trackingPupil(pupil) {

      let bound = pupil.getBoundingClientRect()
      let centerX = bound.left + bound.width/2
      let centerY = bound.bottom
      let radians = Math.atan2(this.mouseX - centerX, this.mouseY - centerY)
      let degree = radians* (180/ Math.PI) * -1
      pupil.style.setProperty("transform", 'rotate('+ (degree + 180) + 'deg)')

    },

    trackingEye(eye) {

      let bound = eye.getBoundingClientRect()
      let centerX = bound.x 
      let centerY = bound.y

      let x_less = Math.pow(this.mouseX - centerX, 2)
      let y_less =  Math.pow(this.mouseY - centerY, 2)

      let distance = (Math.sqrt(x_less + y_less))

      if (distance < 60){
        eye.style.setProperty("--color-eyes", 'rgb(255, 0, 0)')
        eye.style.setProperty("opacity", '1')
        eye.style.setProperty("animation", "faceAnim 1s linear reverse infinite")
      }
      else if (distance < 150){
        eye.style.setProperty("--color-eyes", 'rgb(255, 153, 0)')
        eye.style.setProperty("opacity", '1')
        eye.style.setProperty("animation", "faceAnim 1s linear reverse infinite")
      }
      else{
        eye.style.setProperty("--color-eyes", 'rgb(255, 255, 255)')
        eye.style.setProperty("opacity", '0')
        // eye.style.setProperty("animation", "faceAnim "+ alea +"s linear reverse infinite")
      }

      // console.info(face.getBoundingClientRect())

    },

    launchWalk() {
      this.walkSound = new Audio(this.walkSound);
      this.walkSound.addEventListener("canplaythrough", () => { 
      this.walkSound.play(); 
      this.walkSound.volume = 0.2
      

      this.music = new Audio(this.music);
      this.music.addEventListener("canplaythrough", () => { 
      this.music.play(); 
      this.music.volume = 0.3
      })

        })

    },

    switchLight() {

      this.walkSound.pause(); 

      this.TurnOn = true;

    },

    onClickButton(){

        this.$emit('launchConsole', 2);
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@import '../styles/monstre/monstre1.css';
@import '../styles/monstre/monstre2.css';
@import '../styles/monstre/monstre3.css';
@import '../styles/monstre/monstre4.css';
@import '../styles/text.css';
@import '../styles/buttons.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.cnes-text{

  position: absolute;
  top: 428px;
  left: 580px;
  font-family: 'Gloomy-Things', monospace;
  font-size: 75px;
  color: white;
  
}

.fond{

  background-color: rgb(255, 255, 255);
  width: 1735px;
  height: 1069px;
  cursor: none;
}

.fond-black{
cursor: pointer;
background-color: rgb(0, 0, 0);
width: 1905px;
height: 920px;
}

.click-button2{

  position: absolute;
  top: 831px;
  left: 40.2%;
}

.torch{
  cursor: pointer;
  width: 400px;
  position: absolute;
  top: 615px;
  left: 40%;
}

.container-text {
  position: absolute;
  top: 100px;
  left: 100px;
  font-family: 'Roboto Mono', monospace;
}

p {
  font-size: 1.4em;
  text-align: center;
  line-height: 2em;
  /* padding: 0 2em; */
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 1em;
}
#flashlight {
  --Xpos: 50vw;
  --Ypos: 50vh;
}
#flashlight:before {
  content: "";
  display: block;
  width: 1905px;
  height: 99%;
  position: absolute;
  background: radial-gradient(
    circle 6em at var(--Xpos) var(--Ypos),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
  z-index: 1;
}
@media screen and (min-width: 800px) {
  body {
    font-size: 24px;
  }
}


.pulsating-circle {
  cursor: pointer;
  position: absolute;
  left: 972px;
  top: 828px;
  transform: translateX(-50%) translateY(-50%);
  width: 27px;
    height: 27px;
}
.pulsating-circle:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: #ffffff;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }
  
  .pulsating-circle:after {
    content: '';
    position: absolute;
    left: 0; 
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
  }

.click-button{
  position: absolute;
  top: 730px;
  left: 40.2%;
  z-index: 4;
}


@keyframes pulse-ring {
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
}


.button-finish {
    display: inline-flex;
    height: 107px;
    width: 341px;
    border: 2px solid #000000;
    margin: 20px 20px 20px 20px;
    color: #e69508;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.5em;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index : 3;
}

#button-finish {
  overflow: hidden;
  cursor: pointer;
}

#button-finish  b {
  color : black;
  position: relative;
  transition: all .45s ease-Out;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  background: #ed9700;
  position: absolute;
  transition: all .5s ease-Out;
  top: 30px;
  left: 145px;
}

#button-finish :hover #circle {
  width: 200%;
  height: 500%;
  opacity: 0.8;
  top: -70px;
  left: -110px;
}

#button-finish :hover b {
  color: #000000;
}

b {
  color: #000000;
  text-decoration: none;
  letter-spacing: 1px;
}


</style>
