function replaceInBrace(str, pattern, replacement){

  pattern = '{' + pattern + '}';
  str = str.replace(pattern, replacement);
  return str;
  
}