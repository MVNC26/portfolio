import { Engine, FadeInOut } from "excalibur";
import { wellcomeScene } from "./scenes/welcomeScene";
import { loader } from "./resources";
import { historyScene } from "./scenes/historyScene";
import { gameficationScene } from "./scenes/gamificationScene";
import { expoScene } from "./scenes/expoScene";

const game = new Engine({
  width: 1200,
  height: 800,
  canvasElementId: "jogo",
  pixelArt: true
})

game.addScene("bemvindo", new wellcomeScene())
game.addScene("historia", new historyScene())
game.addScene("gamificacao", new gameficationScene() )
game.addScene("exposicao", new expoScene() )

game.start(loader).then(() =>{
  
  game.goToScene("bemvindo", {
    sourceOut: new FadeInOut({ duration:1000 })
  })

})
