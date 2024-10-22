class Cooker {
    constructor() {
        this.initialState()

        this.powerSocketCooker = document.querySelector("#powerSocket")
        this.powerSocketCooker.addEventListener("click", ()=> {this.changePowerSocket()})

        this.spanPowerSocket = document.querySelector("#spanPowerSocket")
        this.mouthOneCooker = document.querySelector("#mouthOne")
        this.mouthTwoCooker = document.querySelector("#mouthTwo")
        this.mouthThreeCooker = document.querySelector("#mouthThree")
        this.mouthFourCooker = document.querySelector("#mouthFour")
        this.stoveCooker = document.querySelector("#stove")

        this.mouthOneCooker.addEventListener("click", ()=> {this.changeState("mouthOne")})
        this.mouthTwoCooker.addEventListener("click", ()=> {this.changeState("mouthTwo")})
        this.mouthThreeCooker.addEventListener("click", ()=> {this.changeState("mouthThree")})
        this.mouthFourCooker.addEventListener("click", ()=> {this.changeState("mouthFour")})
        this.stoveCooker.addEventListener("click", ()=> {this.changeState("stove")})
    }

    initialState() {
        this.mouthOne = false
        this.mouthTwo = false
        this.mouthThree = false
        this.mouthFour = false
        this.stove = false
        this.powerSocket = false
    }

    changePowerSocket() {
        this.powerSocket = !this.powerSocket
        this.spanPowerSocket.innerHTML = this.powerSocket ? 'Tomada ligada' : 'Tomada desligada'
    }

    changeState(mouth) {
        if (!this.powerSocket && !this[mouth]) {
            this.deviceName = (mouth === 'stove') ? 'forno' : 'boca';
            this.spanPowerSocket.innerHTML = `Tomada desligada. Ligue-a primeiramente para acender o ${this.deviceName}.`;
            return;
        }
        this[mouth] = !this[mouth]
        this[mouth] ? this.spanScreen(mouth) : this.spanScreenOff(mouth);
    }

    spanScreen(mouth) {
        this.isStove = (mouth === 'stove');
        this.deviceName = this.isStove ? 'Forno' : `Boca ${this.getMouthNumber(mouth)}`;
        this.spanPowerSocket.innerHTML = `${this.deviceName} ligada`;
    }

    spanScreenOff(mouth) {
        this.isStove = (mouth === 'stove');
        this.deviceName = this.isStove ? 'Forno' : `Boca ${this.getMouthNumber(mouth)}`;
        this.spanPowerSocket.innerHTML = `${this.deviceName} desligada`;
    }

    getMouthNumber(mouth) {
        this.mouthMap = {
            mouthOne: '1',
            mouthTwo: '2',
            mouthThree: '3',
            mouthFour: '4'
        };
        return this.mouthMap[mouth];
    }

    displays() {
        console.log(this.mouthOne, this.mouthTwo, this.mouthThree, this.mouthFour, this.stove, this.powerSocket);
    }
}

const cooker = new Cooker()
