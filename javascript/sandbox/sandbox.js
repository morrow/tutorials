var Sandbox = {
  elements: {
    input:    document.getElementById('input'),
    output:   document.getElementById('output'),
    examples: document.getElementById('examples'),
    evaluate: document.getElementById('evaluate')
  },
  safe_eval_bool:false,
  output:'',
};

Sandbox.show = function(input) {
  Sandbox.output += input + '\n';
}

Sandbox.store = function(input) {
  window.localStorage['javascript-Sandbox'] = input;
};

Sandbox.load = function(input) {
  if(input === undefined) {
    input = window.localStorage['javascript-Sandbox'];
  }
  if(input) {
    Sandbox.elements.input.value = input;
    Sandbox.respond(input);
  }
};

Sandbox.showErrors = function(mode) {
  Sandbox.elements.output.className = Sandbox.elements.output.className.replace('error', '');
  if(mode) {
    Sandbox.elements.output.className += 'error';
  }
}

Sandbox.evaluate = function(input) {
  try {
    var options = {
      'expr':  true,
      'globals':{
        'Sandbox': true,
      }
    }
    var errors = JSHINT.jshint(input, options);
    Sandbox.showErrors(errors);
    Sandbox.output = '';
    output = Sandbox.safe_eval(input) || '';
    Sandbox.elements.output.innerHTML = output + Sandbox.output;
  }
  catch(e) {
    Sandbox.showErrors(true);
    Sandbox.elements.output.innerHTML = e;
  }
  if(errors) {
    Sandbox.elements.output.innerHTML += JSHINT.report();
  }
};

Sandbox.respond = function(value){
  if(value === undefined) {
    var value = Sandbox.editor.getValue();
  } else {
    Sandbox.editor.setValue(value);
  }
  Sandbox.value = value;
  Sandbox.store(value);
  Sandbox.evaluate(Sandbox.value);
}

Sandbox.safe_eval = function(fn) {
  if(Sandbox.safe_eval_bool) {
    return eval(fn);
  }
}

window.addEventListener('load', function() {

  Sandbox.editor = CodeMirror.fromTextArea(Sandbox.elements.input, {
    theme:'default',
    lineNumbers:true,
    onKeyEvent:function(e,k){
      if(k.type=='keyup') {
        Sandbox.respond();
      }
    }
  });

  for(example in Sandbox.examples) {
    var code = Sandbox.examples[example];
    var li = document.createElement('li');
    li.innerHTML = example;
    li.setAttribute('data-code', code);
    Sandbox.elements.examples.appendChild(li);
  }

  Sandbox.elements.examples.onclick = function(e) {
    var target = e.target;
    if(target) {
      Sandbox.respond(target.getAttribute('data-code'));
    }
  }

  Sandbox.elements.evaluate.onclick = function(e){
    if(!Sandbox.safe_eval_bool) {
      Sandbox.elements.evaluate.innerHTML = 'Evaluating - click to stop';
      Sandbox.elements.evaluate.style.color = "red";
    } else {
      Sandbox.elements.evaluate.innerHTML = 'Begin Evaluating';
      Sandbox.elements.evaluate.style.color = "";
    }
    Sandbox.safe_eval_bool = !Sandbox.safe_eval_bool;
  }

  Sandbox.load();

});
