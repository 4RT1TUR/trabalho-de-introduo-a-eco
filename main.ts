namespace SpriteKind {
    export const TiroInimigo = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const TiroInimigo2 = SpriteKind.create()
    export const MuniçãoColetável = SpriteKind.create()
    export const Projetil2 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Health2 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.TiroInimigo2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projetil2, SpriteKind.TiroInimigo2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (NumeroMuniçãoEspecial > 0) {
        NumeroMuniçãoEspecial += -1
        BarraDeMunição.value += -10
        TiroMuniçãoEspecial()
    }
})
sprites.onOverlap(SpriteKind.Projetil2, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.TiroInimigo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ProjetilProprio = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 7 7 7 7 7 7 7 7 7 5 7 . . . 
        . 7 7 7 2 e 5 5 e 2 e 5 7 7 . . 
        . . . e 2 e e e e 2 2 e e . . . 
        . . 4 2 2 4 4 4 4 4 2 2 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 2 4 4 . . 
        . . . 5 e e e 5 5 e e e e . . . 
        . . . 5 e 2 e e 5 e e 2 e . . . 
        . . 4 4 2 4 4 4 4 4 2 2 4 4 . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Jogador, 0, -50)
    pause(250)
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
function TiroMuniçãoEspecial () {
    ProjetilProprio2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 5 5 5 5 4 4 . . . . 
        . . . 4 5 5 5 4 5 5 5 5 4 . . . 
        . . 4 5 5 4 4 4 4 4 4 5 5 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 5 4 . . 
        . 4 5 5 4 4 5 4 5 5 5 5 5 5 4 . 
        . 4 5 5 4 4 4 4 4 4 4 5 5 5 4 . 
        . 4 5 5 5 4 4 4 4 4 4 4 5 5 4 . 
        . 4 5 5 5 5 5 5 4 5 4 4 5 5 4 . 
        . . 4 5 4 4 4 4 4 4 4 4 5 4 . . 
        . . 4 5 5 4 4 4 4 4 4 5 5 4 . . 
        . . . 4 5 5 5 5 4 5 5 5 4 . . . 
        . . . . 4 4 5 5 5 5 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projetil2)
    ProjetilProprio2.setPosition(Jogador.x, Jogador.y)
    ProjetilProprio2.setVelocity(0, -69)
}
function SpawnInimigo () {
    NavesInimigasLvl1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 5 2 5 2 2 2 2 2 2 2 2 2 2 2 
        2 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 
        5 2 5 2 2 5 2 2 2 2 2 2 2 2 2 2 
        2 2 2 5 2 5 2 2 2 2 2 2 2 2 2 2 
        2 2 2 5 5 2 2 2 2 2 2 2 2 2 2 2 
        2 5 5 2 2 5 2 2 2 2 2 2 2 2 2 2 
        2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    LocalizaçãoAleatoria = randint(0, scene.screenWidth())
    VidaInimigoLvl1 = statusbars.create(20, 3, StatusBarKind.Health)
    VidaInimigoLvl1.attachToSprite(NavesInimigasLvl1, 5, 0)
    NavesInimigasLvl1.setPosition(LocalizaçãoAleatoria, 0)
    NavesInimigasLvl1.setVelocity(0, 20)
}
statusbars.onZero(StatusBarKind.Health2, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.fire, 500)
    info.changeScoreBy(2)
})
function SpawnMuniçãoEspecial () {
    ProjetilEspecial = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 5 5 5 2 2 5 5 5 2 2 2 2 
        2 2 2 2 5 5 5 2 2 5 5 5 2 2 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 5 5 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 2 2 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 2 2 2 2 2 5 5 2 2 
        2 2 5 5 2 2 2 2 2 2 2 2 5 5 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.MuniçãoColetável)
    LocalizaçãoProjetilEspecial = randint(0, scene.screenWidth())
    ProjetilEspecial.setPosition(LocalizaçãoProjetilEspecial, 0)
    ProjetilEspecial.setVelocity(0, 60)
}
sprites.onOverlap(SpriteKind.Projetil2, SpriteKind.Enemy2, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TiroInimigo, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.fire, 500)
    info.changeScoreBy(1)
})
function SpawnInimigoLvl2 () {
    NavesInimigasLvl2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 5 2 2 5 2 2 2 2 2 2 2 2 2 2 
        2 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 5 2 2 5 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 5 2 5 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy2)
    LocalizaçãoInimigaLvl2 = randint(0, scene.screenWidth())
    VidaInimigoLvl2 = statusbars.create(20, 3, StatusBarKind.Health2)
    VidaInimigoLvl2.attachToSprite(NavesInimigasLvl2, 5, 0)
    NavesInimigasLvl2.setPosition(LocalizaçãoInimigaLvl2, 0)
    NavesInimigasLvl2.setVelocity(0, 15)
}
function SpawnCombustivel () {
    Gasolina = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        8 8 8 2 2 1 8 1 8 1 2 1 2 1 8 8 
        1 8 1 2 1 2 8 1 8 2 1 2 1 2 8 8 
        1 8 1 2 2 1 8 1 8 2 1 2 1 2 8 1 
        1 8 1 2 1 2 1 8 1 2 1 2 1 2 8 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 8 8 8 2 2 2 8 8 8 2 1 2 1 . 
        . 1 1 1 8 2 1 2 1 1 8 2 1 2 1 . 
        . 1 1 1 8 2 1 2 1 1 8 2 1 2 1 . 
        . 1 1 1 8 2 1 2 1 1 8 2 2 2 1 . 
        . 1 8 8 8 2 1 2 8 8 8 2 2 2 1 . 
        . 1 8 1 1 2 1 2 8 1 1 1 1 2 1 . 
        . 1 8 1 1 2 1 2 8 1 1 1 1 2 1 . 
        . 1 8 1 1 2 1 2 8 1 1 1 1 2 1 . 
        . 1 8 8 8 2 2 2 8 8 8 1 1 2 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        `, SpriteKind.Food)
    LocalizaçãoGasolina = randint(0, scene.screenWidth())
    Gasolina.setPosition(LocalizaçãoGasolina, 0)
    Gasolina.setVelocity(0, 60)
}
sprites.onOverlap(SpriteKind.Projetil2, SpriteKind.TiroInimigo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health2, otherSprite).value += -34
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.fire, 200)
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    BarraDeGasolina.value = 100
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
})
info.onScore(40, function () {
    game.gameOver(true)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    sprites.destroy(status.spriteAttachedTo())
    game.gameOver(false)
})
info.onScore(5, function () {
    Level += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TiroInimigo2, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 100)
    info.changeLifeBy(-2)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.fire, 200)
    scene.cameraShake(4, 100)
    info.changeLifeBy(-1)
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MuniçãoColetável, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    NumeroMuniçãoEspecial += 1
    BarraDeMunição.value += 10
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
let ProjetilInimigoLvl2: Sprite = null
let ProjetilInimigo: Sprite = null
let LocalizaçãoGasolina = 0
let Gasolina: Sprite = null
let VidaInimigoLvl2: StatusBarSprite = null
let LocalizaçãoInimigaLvl2 = 0
let NavesInimigasLvl2: Sprite = null
let LocalizaçãoProjetilEspecial = 0
let ProjetilEspecial: Sprite = null
let VidaInimigoLvl1: StatusBarSprite = null
let LocalizaçãoAleatoria = 0
let NavesInimigasLvl1: Sprite = null
let ProjetilProprio2: Sprite = null
let ProjetilProprio: Sprite = null
let NumeroMuniçãoEspecial = 0
let BarraDeMunição: StatusBarSprite = null
let BarraDeGasolina: StatusBarSprite = null
let Jogador: Sprite = null
music.play(music.stringPlayable("C5 A B G A F G E ", 210), music.PlaybackMode.LoopingInBackground)
effects.starField.startScreenEffect()
game.showLongText("Aperte espaço para atirar e as setas para se mover", DialogLayout.Bottom)
game.showLongText("Desvie dos projéteis e naves inimigas, destrua eles com seus foguetes", DialogLayout.Center)
Jogador = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(Jogador)
Jogador.setStayInScreen(true)
BarraDeGasolina = statusbars.create(30, 2, StatusBarKind.Energy)
BarraDeGasolina.attachToSprite(Jogador, 0, 0)
BarraDeMunição = statusbars.create(30, 2, StatusBarKind.Magic)
BarraDeMunição.attachToSprite(Jogador, 5, 0)
BarraDeMunição.value = 0
info.setLife(3)
info.setScore(0)
let Level = 0
NumeroMuniçãoEspecial = 0
game.onUpdateInterval(5000, function () {
    if (randint(1, 2) == 1) {
        SpawnCombustivel()
    } else {
        SpawnMuniçãoEspecial()
    }
})
game.onUpdateInterval(2000, function () {
    if (Level == 0) {
        SpawnInimigo()
    }
    if (Level >= 1) {
        if (randint(0, 4) == 0) {
            SpawnInimigoLvl2()
        } else {
            SpawnInimigo()
        }
    }
})
game.onUpdateInterval(1000, function () {
    BarraDeGasolina.value += -1
})
game.onUpdateInterval(3500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        ProjetilInimigo = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . 2 2 . . . . . . . . . . . . 
            . . 2 2 . . . 5 . . . . . . . . 
            . . 2 2 . . . 5 . . . . . . . . 
            . . 2 2 . . . 5 . . . . . . . . 
            . . 2 2 . 5 5 5 5 5 . . . . . . 
            . . 2 2 . . 5 5 5 . . . . . . . 
            . . 2 2 . . . 5 . . . . . . . . 
            . . 2 2 . . 5 5 5 . . . . . . . 
            . . 2 2 . 5 5 . 5 5 . . . . . . 
            . . 2 2 . 5 . . . 5 . . . . . . 
            . . 2 2 . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . 2 2 2 2 2 2 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.TiroInimigo)
        ProjetilInimigo.setPosition(value.x, value.y)
        ProjetilInimigo.setVelocity(0, 35)
    }
})
game.onUpdateInterval(3500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy2)) {
        ProjetilInimigoLvl2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 . . . . 5 5 . . . . . 
            . . 5 5 5 5 . . . 5 5 5 . . . . 
            . 5 5 5 5 5 . . . . 5 5 5 . . . 
            5 5 5 5 5 . . . . . . 5 5 5 . . 
            5 5 5 5 5 5 . . . . . . 5 5 . . 
            . 5 5 . 5 5 5 . . . . . 5 5 . . 
            . . . . . 5 5 5 . . . . 5 5 . . 
            . . . . . . 5 5 5 . . 5 5 5 . . 
            . . . . 5 5 . 5 5 5 . 5 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . 5 5 5 . 5 5 5 5 5 5 . . . . 
            . 5 5 5 . . . . 5 5 5 5 5 . . . 
            . 5 5 . . . . . . . . 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.TiroInimigo2)
        ProjetilInimigoLvl2.setPosition(value.x, value.y)
        ProjetilInimigoLvl2.setVelocity(0, 33)
    }
})
