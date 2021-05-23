class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene, velocity){
        
        var x = scene.player.x;
        var y = scene.player.y;
               
        super(scene, x, y, "beam");
        scene.add.existing(this);
        scene.projectiles.add(this);
        
        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;
        
      
        
        
      
        
        
        
        
    }
    
    update(){
        if(this.y < 0 ){
            this.destroy();
        }
    }
}