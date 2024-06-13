import { Actor, CollisionType, Color, Engine, FadeInOut, HiddenEvent, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { Npc } from "../actors/npc";

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
        this.camera.zoom = 2

        //carregar spaw
        let spawPoint = tiledMap.getObjectsByName("player_spawn")[0]

        //criação e configuração do player
        let jogador = new Player(vec(spawPoint.x + offsetX, spawPoint.y + offsetY))

        jogador.z = 1

        this.add(jogador)

        //config npc

        let npcSpawPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawPointC = tiledMap.getObjectsByName("npc_c")[0]

        let npcA = new Npc(
          vec(npcSpawPointA.x + offsetX, npcSpawPointA.y + offsetY),
          Color.Blue,
          "NpcA"
        )


        let npcB = new Npc(
          vec(npcSpawPointB.x + offsetX, npcSpawPointB.y + offsetY),
          Color.Black,
          "NpcB"
        )


        let npcC = new Npc(
          vec(npcSpawPointC.x + offsetX, npcSpawPointC.y + offsetY),
          Color.DarkGray,
          "NpcC"
        )

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        //camera focar 
        this.camera.strategy.lockToActor(jogador)
        

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