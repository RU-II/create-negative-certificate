function replaceShapeString(presentation, id, pattern, replacement){

  var shape = presentation.getPageElementById(id).asShape();
  var str = shape.getText().asString();
  str = replaceInBrace(str, pattern, replacement);
  //shape.getText().setText(str);
  shape.getText().replaceAllText(shape.getText().asString(),str);
  
}