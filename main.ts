namespace SpriteKind {
    export const fish = SpriteKind.create()
}
// 8 Concepts Learned (Pick the 8 you used, delete the others):
// 
// -Sprites
// 
// -Sprite Position (coordinates: x and y)
// 
// -Controller (dx) and move mySprite with buttons
// 
// -overlap Events / sprite kind
// 
// -"Spawning" sprites: create and on created
// 
// -random
// 
// -Displaying numbers (1, 2, 3) as a string ("123")
// 
// -score and life
// 
// -countdown
// 
// -stay in screen and ghost
// 
// -set image
// 
// -sprite say
// 
// -splash
// 
// Key Features (List the Key Features You Will Need For Your Game, replace examples)
// 
// - ex. Playable Sprite
// 
// - ex. player can move up/down left/right
// 
// - ex. player can collide with enemy
// 
// - ex. enemy decreases player life
scene.onHitWall(SpriteKind.fish, function (sprite, location) {
    sprite.image.flipX()
})
scene.setBackgroundImage(img`
    5555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    5555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    5555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    5555555555555559999555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    5555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111999991199999999999999999999999999999999999
    5555555555555599999999999999999999999999999999999999999999999999999999999999911111199999999999999999999999999999911111111111119999999999999999999999999999999999
    5555555555555599999999999999999999999999999999999999999999999999999999999991111111111199999999999999999999999991111111111111119999999999999999999999999999999999
    5555555555555599995599999999999999999999999999999999999999999999999111111111111111111111199999999999999999991111111111111111119999999999999999999999999999999999
    5555555555555599999559999999999999999999999999999999999999999999991111111111111111111111111999999999999999111111111111111111119999999999999999999999999999999999
    5555555555555999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999911111111111111111111119999999999999999999999999999999999
    5555555555555999999999999999999999999999999999999999999999999999911111111111111111111111111199999999999911111111111111111111119999999999999999999999999999999999
    5555555555559999999999999999999999999999999999999999999999999999999111111111111111111111111999999999999911111111111111111111119999999999999999999999999999999999
    5555555555999995559999999999999999999999999999999999999999999999999991111111111111111111111999999999999911111111111111111111199999999999999999999999999999999999
    5555555599999999999999999999999999999999999999999999999999999999999999911111111111111111199999999999999999111111111111111111999999999999999999999999999999999999
    5555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    5599999999959999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999955999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999995599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9995999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888899999999999999999999999999999999999999999999999999
    9999999999999999999999999888888888889999999999999999999999999999999999999999999999999999999999999888888888888888888888889999999999999999999999999999999999999999
    8999999999988999999988888888888888888889999999999999999999999999999999999999999999999999888888888888888888888888888888888888888999999999999999999999999999999999
    8999999888888888888888888888888888888888888889999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888899999999999999999999
    8888888888888888888888888888888888888888888888888888888889999999999999999999999888888888888888888888888888888888888888888888888888888888888888888888888889999999
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    dddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ddddddddddddddddddddddddddddddddddddddddddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    dddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd88888888888888888888888888888888888888888888888888888888dddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd888888888888ddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddbbbbbbbbdddddddd
    dddddddddddddddbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddddddddddddddddbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbdddddddd
    dddddddddddddbbbbbbbbbbddddddddddddddddddbdddddddddddddddddddddddddddddbbbbbbbddddddddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddbbbbbbbbddddddddd
    dddddddddddddbbbbbbbbbbbddddddddddddddddbbbdddddddddddddddddddddddddddbbbbbbbbddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddddddddddbbbbbbbbdddddddddd
    ddddddddddddbbbbbbbbbbbbddddddddddddddbbbbbddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddbbbbbbbbdddddddddddddddddddddddddddddddbbbbbbbddddddddddd
    ddddddddddddbbbbbbbbbbbbddddddddddddddbbbbbdddddddddddddddddddddddddbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddd
    ddddddddddddbbbbbbbbbbbdddddddddddddddbbbbdddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbdddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
let fish1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . 3 
    . . . 3 3 3 3 3 3 3 3 3 3 . 3 3 
    . . 3 3 3 f 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . 3 3 3 3 f 3 3 3 3 3 3 3 3 3 
    . . . f f f 3 3 3 3 3 3 3 . 3 3 
    . . . . 3 3 3 3 3 3 3 3 . . . 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.fish)
let fish2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . 2 
    . . . 2 2 2 2 2 2 2 2 2 2 . 2 2 
    . . 2 2 2 f 2 2 2 2 2 2 2 2 2 2 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . 2 2 2 2 f 2 2 2 2 2 2 2 2 2 
    . . . f f f 2 2 2 2 2 2 2 . 2 2 
    . . . . 2 2 2 2 2 2 2 2 . . . 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.fish)
let fish3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a a a a . . . a 
    . . . a a a a a a a a a a . a a 
    . . a a a f a a a a a a a a a a 
    . . a a a a a a a a a a a a a a 
    . . a a a a f a a a a a a a a a 
    . . . f f f a a a a a a a . a a 
    . . . . a a a a a a a a . . . a 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.fish)
let fish4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . 5 
    . . . 5 5 5 5 5 5 5 5 5 5 . 5 5 
    . . 5 5 5 f 5 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 5 f 5 5 5 5 5 5 5 5 5 
    . . . f f f 5 5 5 5 5 5 5 . 5 5 
    . . . . 5 5 5 5 5 5 5 5 . . . 5 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.fish)
let fish5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . 4 
    . . . 4 4 4 4 4 4 4 4 4 4 . 4 4 
    . . 4 4 4 f 4 4 4 4 4 4 4 4 4 4 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . 4 4 4 4 f 4 4 4 4 4 4 4 4 4 
    . . . f f f 4 4 4 4 4 4 4 . 4 4 
    . . . . 4 4 4 4 4 4 4 4 . . . 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.fish)
let weed1 = sprites.create(img`
    ....88..........
    ....868.........
    .....868........
    ......868.......
    .......868......
    .......868......
    ........868.....
    ........868.....
    ........8668....
    ........8668....
    ........8668....
    ........8768....
    ........8768....
    .......86768....
    .......87768....
    .......6778.....
    ......67676.....
    ......67676.....
    .....65656......
    ....655656......
    ....65656.......
    ...876756.......
    ..876776...8....
    ..67678....8....
    .876668...88....
    .67868....86....
    .86868...876....
    868668..8768....
    86868..87678....
    86868..8766.....
    86868.87678.....
    86878.8766......
    8787887678......
    876768768.88....
    876778668.678...
    876676668..678..
    .676778668..678.
    .8766778668.6778
    .877667688885678
    ..87667768885656
    ..86766778887856
    ...8776677876876
    ....877667768668
    .....87766768668
    ......877677668.
    .......87667668.
    ........876768..
    ........87688...
    `, SpriteKind.Player)
let weed2 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .........888....
    .......88668....
    ......86688.....
    .....8768.......
    ....8778........
    ....8778........
    ...8778.........
    ...8578.........
    ...8558.........
    ...8758......88.
    ...87678....878.
    ...87678...878..
    ....87678.8768..
    ....876768678...
    .....87668778...
    ......8668766...
    .......8687678..
    ........8667678.
    ........8685756.
    ....88..86665756
    ...868..86685656
    ..8668..86687678
    .8668..868687678
    .868..8688667678
    8768.88886876778
    8768.8888877678.
    876688888676778.
    87676888668778..
    .876776868668...
    .87766778868....
    ..877667688.....
    ...86767788.....
    `, SpriteKind.Player)
let weed3 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Player)
let weed4 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .....88.........
    .....868........
    ......868.......
    .......868......
    .......866......
    .......8676.....
    ......67656.....
    .....656758.....
    ....65775868....
    ....65656868....
    ....87678868....
    ....87678668....
    ....87677668....
    ....8776768.....
    .....87678......
    ......8768......
    `, SpriteKind.Player)
fish1.setPosition(randint(4, 150), randint(30, 90))
fish2.setPosition(randint(4, 150), randint(30, 90))
fish3.setPosition(randint(4, 150), randint(30, 90))
fish4.setPosition(randint(4, 150), randint(30, 90))
fish5.setPosition(randint(4, 150), randint(30, 90))
weed1.setPosition(140, 95)
weed2.setPosition(60, 95)
weed3.setPosition(100, 95)
weed4.setPosition(25, 95)
// fish1.vx = 15
fish2.vx = 15
fish3.vx = 15
fish4.vx = 15
fish5.vx = 15
// fish1.setBounceOnWall(true)
fish2.setBounceOnWall(true)
fish3.setBounceOnWall(true)
fish4.setBounceOnWall(true)
fish5.setBounceOnWall(true)
game.onUpdate(function () {
    if (fish1.x < 150) {
        // fish1.image.flipX()
        fish1.vx = 15

    } else if(fish1.x > 1)
    {
        fish1.image.flipX()
        fish1.vx = -15

    }
})
