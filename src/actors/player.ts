import { Actor, Animation, CollisionType, Color, Engine, Keys, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor{
    //propiedade do player
    private velocidade: number = 180



    //configura o player
    constructor(posicao: Vector){
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
        
    }
    
    onInitialize(engine: Engine<any>): void {
        //configurar player para monitorar evento teclado 

        //sprite do player

        const PlayerSpriteShett = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteShett,
            grid:{
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20,
            },

            spacing:{
                originOffset: {
                    y: 8
                }
            } 
        })

        //criar animações 

        const duracaoFrameAnimacao = 70

        const leftIdle = new Animation({
            frames: [
                {graphic: PlayerSpriteShett.getSprite(12,1)},
                {graphic: PlayerSpriteShett.getSprite(13,1)},
                {graphic: PlayerSpriteShett.getSprite(14,1)},
                {graphic: PlayerSpriteShett.getSprite(15,1)},
                {graphic: PlayerSpriteShett.getSprite(16,1)},
                {graphic: PlayerSpriteShett.getSprite(17,1)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-idel", leftIdle)
       









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