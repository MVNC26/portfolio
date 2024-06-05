import { Actor, Color, Engine, FadeInOut, Keys, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {

    //declaracão elementotexto 
    elementotexto?: HTMLElement

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
        this.elementotexto = document.createElement("div") as HTMLElement
        this.elementotexto.style.opacity = "1"
        
        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementotexto)

        this.elementotexto.classList.add("sobre-gamefica")

        this.elementotexto.innerHTML = `<h2>Sobre o GameficaAi</h2>
        <p>
          Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.
        </p>`


        //cria actor da imagem logo vertical
        let actorLogov = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight),
        })

        //chama e configura logo vertical
        let imagemLogov = Resources.Logov.toSprite()
        imagemLogov.scale = vec(0.7, 0.7)
        actorLogov.graphics.add(imagemLogov)

        this.add(actorLogov)

        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter) {
                engine.goToScene ("gamificacao")
            }   
         })
    }
}