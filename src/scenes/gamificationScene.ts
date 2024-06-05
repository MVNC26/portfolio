import { Color, Engine, Keys, Scene } from "excalibur";



export class gameficationScene extends Scene{
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Chartreuse

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter || Keys.NumpadEnter ){
                engine.goToScene("historia")
            }
        })

    }
}