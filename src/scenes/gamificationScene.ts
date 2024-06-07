import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";



export class gameficationScene extends Scene {

    elementotextoH?: HTMLElement

    fadeoutElement(elemento: HTMLElement){

        let opacidade = parseFloat(elemento.style.opacity)
        setInterval(() => {
            
            if (opacidade > 0 ){
    
                opacidade -= 0.01
                elemento.style.opacity = opacidade.toString()
            }

        }, 10 )
    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        //criar elemento sobre a empresa, e insere elemento texto no container-game, adiciona classe na div
        this.elementotextoH = document.createElement("div") as HTMLElement
        this.elementotextoH.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementotextoH)

        this.elementotextoH.classList.add("gamificacao")

        this.elementotextoH.innerHTML = `<h2>oque é gamificação</h2>
        <p>
	    Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.
        </p>`

        //cria actor da imagem logo vertical
        let actorLogov = new Actor({
            pos: vec(300, engine.halfDrawHeight),
        })

        //chama e configura logo vertical
        let imagemLogov = Resources.Logov.toSprite()
        imagemLogov.scale = vec(0.7, 0.7)
        actorLogov.graphics.add(imagemLogov)

        this.add(actorLogov)

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter || Keys.NumpadEnter) {
                engine.goToScene("exposicao", {
                    sourceOut: new FadeInOut({ duration: 1000 })
                })

                this.fadeoutElement(this.elementotextoH!)
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementotextoH?.remove()
    }
}