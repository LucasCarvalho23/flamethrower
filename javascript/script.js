class Cooker {
    constructor() {
        this.initialState()


        this.powerSocketCooker = document.querySelector("#powerSocket")
        this.powerSocketCooker.addEventListener("click", ()=> {
            this.changePowerSocket()
        })

        this.spanPowerSocket = document.querySelector("#spanPowerSocket")
        this.mouthOneCooker = document.querySelector("#mouthOne")
        this.mouthTwoCooker = document.querySelector("#mouthTwo")
        this.mouthThreeCooker = document.querySelector("#mouthThree")
        this.mouthFourCooker = document.querySelector("#mouthFour")
        this.stoveCooker = document.querySelector("#stove")

        this.mouthOneCooker.addEventListener("click", ()=> {
            this.changeState("mouthOne")           
        })
        this.mouthTwoCooker.addEventListener("click", ()=> {
            this.changeState("mouthTwo")           
        })
        this.mouthThreeCooker.addEventListener("click", ()=> {
            this.changeState("mouthThree")           
        })
        this.mouthFourCooker.addEventListener("click", ()=> {
            this.changeState("mouthFour")           
        })
        this.stoveCooker.addEventListener("click", ()=> {
            this.changeState("stove")           
        })
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
        if (this.powerSocket) {
            this.spanPowerSocket.innerHTML = `Tomada ligada`
        } else {
            this.spanPowerSocket.innerHTML = `Tomada desligada`
        }
    }

    changeState(mouth) {
        if (!this.powerSocket && !this[mouth]) {
            if (mouth == 'stove') {
                this.spanPowerSocket.innerHTML = `Tomada desligada. Ligue-a primeiramente para acender o forno.`
            } else {
                this.spanPowerSocket.innerHTML = `Tomada desligada. Ligue-a primeiramente para acender a boca.`
            }
            return
        }
        this[mouth] = !this[mouth]
        if (this[mouth]) {
            this.spanScreen(mouth) 
        } else {
            this.spanScreenOff(mouth)
        }
    }

    spanScreen(mouth) {
        if (mouth == 'stove') {
            this.spanPowerSocket.innerHTML = `Forno ligado`
        } else if (mouth == 'mouthOne') {
            this.value = '1'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} ligada`
        } else if (mouth == 'mouthTwo') {
            this.value = '2'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} ligada`
        } else if (mouth == 'mouthThree') {
            this.value = '3'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} ligada`
        } else if (mouth == 'mouthFour') {
            this.value = '4'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} ligada`
        }
    }

    spanScreenOff(mouth) {
        if (mouth == 'stove') {
            this.spanPowerSocket.innerHTML = `Forno desligado`
        } else if (mouth == 'mouthOne') {
            this.value = '1'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} desligada`
        } else if (mouth == 'mouthTwo') {
            this.value = '2'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} desligada`
        } else if (mouth == 'mouthThree') {
            this.value = '3'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} desligada`
        } else if (mouth == 'mouthFour') {
            this.value = '4'
            this.spanPowerSocket.innerHTML = `Boca ${this.value} desligada`
        }
    }

    exibe() {
        console.log(this.mouthOne, this.mouthTwo, this.mouthThree, this.mouthFour, this.stove, this.powerSocket);
    }
}

const cooker = new Cooker()
