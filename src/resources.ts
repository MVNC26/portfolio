import { ImageFiltering, ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logov from "./images/logo-vertical.png"
import { TiledResource } from "@excaliburjs/plugin-tiled";

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"
import tsxParedesPath from"./maps/tileset_parede.tsx?url"
import tsxGenericPath from"./maps/tileset_generic.tsx?url"
import tsxEstoquePath from"./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from"./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/showroom.tmx?url"
import playerSpritePath from "./sprites/protagonista.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteShett: new ImageSource(playerSpritePath, {filtering: ImageFiltering.Pixel}),
  Logov: new ImageSource(logov),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      {path: "showroom map.tmx" , output: tmxMapaPath},
      {path: "Room_Builder_32x32.png" , output: pngTilesetPath},
      {path: "tileset_parede.tsx" , output: tsxParedesPath},
      {path: "tileset_generic.tsx" , output: tsxGenericPath},
      {path: "tileset_estoque.tsx" , output: tsxEstoquePath},
      {path: "tileset_biblioteca.tsx" , output: tsxBibliotecaPath},
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
