info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(10, 110), randint(10, 100))
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 f f 5 5 5 5 f f 5 5 . . 
    . 5 5 5 f f 5 5 5 5 f f 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 f 5 5 5 5 5 5 5 5 5 5 f 5 . 
    . 5 5 f 5 5 5 5 5 5 5 5 f 5 5 . 
    . . 5 5 f f f f f f f f 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(10, 24)
mySprite2 = sprites.create(assets.image`food`, SpriteKind.Food)
mySprite2.setPosition(70, 56)
info.setScore(0)
info.startCountdown(60)
controller.moveSprite(mySprite)
