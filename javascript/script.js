class Cooker {
    constructor() {
        this.initialState()


        this.powerSocketCooker = document.querySelector("#powerSocket")
        this.powerSocketCooker.addEventListener("click", ()=> {
            this.changePowerSocket()
        })

        this.mouthOneCooker = document.querySelector("#mouthOne")
        this.mouthTwoCooker = document.querySelector("#mouthTwo")
        this.mouthThreeCooker = document.querySelector("#mouthThree")
        this.mouthFourCooker = document.querySelector("#mouthFour")

        this.mouthOneCooker.addEventListener("click", ()=> {
            this.changeState("mouthOne")           
            this.exibe()
        })
        this.mouthTwoCooker.addEventListener("click", ()=> {
            this.changeState("mouthTwo")           
            this.exibe()
        })
        this.mouthThreeCooker.addEventListener("click", ()=> {
            this.changeState("mouthThree")           
            this.exibe()
        })
        this.mouthFourCooker.addEventListener("click", ()=> {
            this.changeState("mouthFour")           
            this.exibe()
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
    }

    changeState(mouth) {
        if (!this.powerSocket) {
            console.log("Tomada desligada. Ligue-a primeiramente")
            return
        }
        this[mouth] = !this[mouth]
    }

    exibe() {
        console.log(this.mouthOne, this.mouthTwo, this.mouthThree, this.mouthFour);
    }
}

const cooker = new Cooker()
