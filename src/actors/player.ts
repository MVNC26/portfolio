import { Actor, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor{
    //propiedade do player
    private velocidade: number = 180



    //configura o player
    constructor(){
        super({
            pos: vec(500, 500),
            width: 32,
            height: 32,
            name: "jogador",
            color: Color.Red
        })
        
    }
    
    onInitialize(engine: Engine<any>): void {
        //configurar player para monitorar evento teclado 
        engine.input.keyboard.on("hold", (event) =>{
            switch (event.key) {

                case Keys.Left:
                case Keys.A:
                    this.vel.y = 0
                    this.vel.x = -this.velocidade  
                    break;

                case Keys.Right:
                case Keys.D:
                    this.vel.y = 0
                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:
                    this.vel.x = 0
                    this.vel.y = -this.velocidade
                    break;
                    
                case Keys.Down:
                case Keys.S:
                    this.vel.x = 0
                    this.vel.y = this.velocidade
            
                default:
                    
                    break;
            }
        })

        engine.input.keyboard.on("release", (event) =>{

            if (
                event.key == Keys.A||
                event.key == Keys.Left||
                event.key == Keys.D||
                event.key == Keys.Right
            ) {
                this.vel.x = 0         
            }

            if (
                event.key == Keys.W||
                event.key == Keys.Up||
                event.key == Keys.S||
                event.key == Keys.Down
            ) {
                this.vel.y = 0                  
            }
        })
    }
    

}