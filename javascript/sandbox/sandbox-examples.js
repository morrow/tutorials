Sandbox.examples = {
  "Types": "// typeof is native code to determine type of something\n\n// string\nSandbox.show( \"abc\" );\n\n// Integer\nSandbox.show( 42 );\n\n// Float\nSandbox.show( 24.1624);\n\n// Boolean\nSandbox.show( true );\n\n// Undefined\nSandbox.show( undefined );\n\n// Object\nSandbox.show (\n  {\n    \"a\": \"b\" \n  }\n);",
  "Simple variable": "var a = 1;\n  \nSandbox.show(a);",
  "Multiple variables": "var a = 1;\nvar b = \"test\";\nvar c = false;\n\nSandbox.show(a);\nSandbox.show(b);\nSandbox.show(c);",
  "Simple variable math": "var a = 2;\nvar b = 5;\n\nSandbox.show( a + b );\nSandbox.show( a * b );",
  "Simple Array": "var array = [\"a\",\"b\",\"c\"];\n\nvar first = array[0];\nvar second = array[1];\nvar third = array[2];\n\nSandbox.show( array );\nSandbox.show( first );\nSandbox.show( second );\nSandbox.show( third );\n",
  "Simple function": "function say(word){\n   Sandbox.show(word); \n}\n\nsay(\"hello\");",
  "Multiple functions": "function whisper(word) {\n   return word.toLowerCase(); \n}\n\nfunction shout(word) {\n   return word.toUpperCase() + \"!\"; \n}\n\nSandbox.show( whisper(\"bark\") );\nSandbox.show( shout(\"bark\") );",
  "Sentence function": "function shout(word) {\n   return word.toUpperCase() + \"!\"; \n}\n\nvar word1 = \"meow\";\nvar word2 = \"woof\";\n\nvar sentence1 = \"The cat says \" + word1;\nvar sentence2 = \"The dog says \" + shout(word2);\n\nSandbox.show( sentence1 );\nSandbox.show( sentence2 );"
};