import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class wellcomeScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

        //configura o objeto para a frase de bem-vindo
        let fraseBemVindo = new Label({
            text: "Bem vindo ao portfólio",
            width: 400,
            height: 50,
            pos: vec(engine.drawWidth/2, 300),
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            }),
        })
        
        let fraseEnter = new Label({
            text: 'Precione "Enter" para iniciar...',
            width: 200,
            height: 50,
            pos: vec(engine.drawWidth/2, 630),
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        //configurar para piscar 
        fraseEnter.actions.repeatForever( contex => {
            contex.fade(0, 1000)
            contex.fade(1, 1000)
        })

        //adiciona a frase na cena 
        this.add(fraseBemVindo)
        this.add(fraseEnter)


        //configurar actor da logo
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth/2, 430),
            color: Color.Red,
        })
        //chamar e configuar a logo 
        let imagemLogo = Resources.Logo.toSprite()
        imagemLogo.scale = vec(0.4, 0.4)
        actorLogo.graphics.add(imagemLogo)

        this.add(actorLogo)

        //ao precionar enter 
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter || Keys.NumpadEnter ){
                engine.goToScene("historia")
            }
        })

    }
}
    // onPreUpdate(engine: Engine<any>, delta: number): void {
    //     this.fraseEnter?.actions.fade(0, 1000)
    //     this.fraseEnter?.actions.fade(1, 1000)
    // }
    // para esse metodo de piscar é necessario declara a frase enter fora do oninitialize.