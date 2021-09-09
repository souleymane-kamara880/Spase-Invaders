const deltaAudio = new Audio();
deltaAudio.src = 'missile2.mp3';

const ExplosionsAudio = new Audio();
ExplosionsAudio.src = 'dexplosion1.mp3';

function Sprite( filename, left , top ) {
    this._node = document.createElement( "img" );
    this._node.src = filename;
    this._node.style.position = "absolute";
    document.body.appendChild( this._node );

    Object.defineProperty( this, "left", {
        get: function() {
            return this._left;
        },
        set: function( value ) {
            this._left = value;
            this._node.style.left = value + "px";
        }
    } );
    Object.defineProperty( this, "top", {
        get: function() {
            return this._top;
        },
        set: function( value ) {
            this._top = value;
            this._node.style.top = value + "px";
        }
    } );
    Object.defineProperty( this, "display", {
        get: function() {
            return this._node.style.display;
        },
        set: function( value ) {
            this._node.style.display = value;
        }
    } );

    this.left = left;
    this.top = top
}

Sprite.prototype.startAnimation = function( fct, interval ){

    if( this._clock) window.clearInterval(this._clock);
    var _this = this;
    this._clock = window.setInterval( function(){
        fct( _this );
    }, interval);
 
};

Sprite.prototype.stopAnimation = function() {
    window.clearInterval( this._clock);
};

Sprite.prototype.checkCollision = function ( other){

    return ! ( (this.top + this._node.height < other.top) ||
    this.top > (other.top +  other._node.height) ||
    (this.left + this._node.width <  other.left) ||
    this.left > (other.left +  other._node.width ) );
}

