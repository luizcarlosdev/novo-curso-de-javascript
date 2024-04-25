// Factory JavaScript

function createMicrophone(setColor = "violet") {
  let isOn = true;
  return {
    color: setColor,
    isOn: isOn,
    toggleIsOn() {
      if (isOn) {
        console.log("desligar");
      } else {
        console.log("ligar");
      }
      isOn = !isOn;
    },
  };
}

const microphone = createMicrophone();
console.log(microphone);
console.log("-----------------------------------------------");

// prototype

function Micp(color = "black") {
    this.color = color;
}

const mc = new Micp();
const mc2 = new Micp("white");
console.log(mc)
console.log(mc2)