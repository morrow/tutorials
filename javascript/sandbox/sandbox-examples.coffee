Sandbox.examples =
  "Types": """
// typeof is native code to determine type of something

// string
Sandbox.show( "abc" );

// Integer
Sandbox.show( 42 );

// Float
Sandbox.show( 24.1624);

// Boolean
Sandbox.show( true );

// Undefined
Sandbox.show( undefined );

// Object
Sandbox.show (
  {
    "a": "b" 
  }
);
""",
  "Simple variable": """
var a = 1;
  
Sandbox.show(a);
""",

  "Multiple variables": """
var a = 1;
var b = "test";
var c = false;

Sandbox.show(a);
Sandbox.show(b);
Sandbox.show(c);
""",

  "Simple variable math": """
var a = 2;
var b = 5;

Sandbox.show( a + b );
Sandbox.show( a * b );
""",

  "Simple Array": """
var array = ["a","b","c"];

var first = array[0];
var second = array[1];
var third = array[2];

Sandbox.show( array );
Sandbox.show( first );
Sandbox.show( second );
Sandbox.show( third );

""",
  "Simple function":"""
function say(word){
   Sandbox.show(word); 
}

say("hello");
"""

  "Multiple functions":"""
function whisper(word) {
   return word.toLowerCase(); 
}

function shout(word) {
   return word.toUpperCase() + "!"; 
}

Sandbox.show( whisper("bark") );
Sandbox.show( shout("bark") );
""",
  "Sentence function": """
function shout(word) {
   return word.toUpperCase() + "!"; 
}

var word1 = "meow";
var word2 = "woof";

var sentence1 = "The cat says " + word1;
var sentence2 = "The dog says " + shout(word2);

Sandbox.show( sentence1 );
Sandbox.show( sentence2 );
"""