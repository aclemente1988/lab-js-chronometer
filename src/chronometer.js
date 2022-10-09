class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;

  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(()=> {
      this.currentTime +=1;
      if (printTimeCallback){printTimeCallback()} ;
    },1000);
    
    
  }

  getMinutes() {
    return Math.floor((this.currentTime)/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    let valueElement = value.toString();
    if (valueElement.length===1){
      return  `0${valueElement}`
    }
    else return valueElement
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
  }
}
