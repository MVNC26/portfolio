import { Actor, CollisionType, Color, Engine, FadeInOut, HiddenEvent, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene{

    onTransition(direction: "in" | "out"): Transition | undefined {
      return new FadeInOut({
        direction:direction,
        color: Color.Black,
        duration: 500
      })  
    }
    
    onInitialize(engine: Engine<any>): void {
        //carrega o mapa 
        let tiledMap = Resources.Mapa

        //definir offset para redenrizar o mapa 
        let offsetX = 138
        let offsetY = 100


        tiledMap.addToScene(this, {
          pos: vec( offsetX, offsetY)
        })

        //dar zomm da cena 
        this.camera.zoom = 1.4

        //criação e configuração do player
        let jogador = new Player()

        jogador.z = 1 

        this.add(jogador)

        //adicionar colisao com objetos
        let camadaObjestosColisores = tiledMap.getObjectLayers("objetosColisores")[0]
        
        camadaObjestosColisores.objects.forEach(objeto => {

          const objetoAtual = new Actor ({
            name: objeto.name,
            x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
            y: objeto.y + offsetY + (objeto.tiledObject.height! /2),

            width: objeto.tiledObject.width,
            height: objeto.tiledObject.height,
            collisionType: CollisionType.Fixed
          })

          this.add(objetoAtual)

        })
    }
}