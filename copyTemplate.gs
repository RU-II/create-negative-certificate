function copyTemplate(templateFileId, newFileName, folderId) {

  //var url = 'https://docs.google.com/presentation/d/1hQxAzOeBeZLnL5NnBKxuIKm3Jb_bXhza_allMwflUm8/edit#slide=id.p';//テンプレートファイルのURL

  //var templateFileId ='1hQxAzOeBeZLnL5NnBKxuIKm3Jb_bXhza_allMwflUm8';//テンプレートファイルのid

  var presentation = copyPresentation(templateFileId, newFileName, folderId);
  return presentation;

}

function copyPresentation(templateFileId, newFileName, folderId) {//ファイルをコピーしてidを返す

  var sourceFile = DriveApp.getFileById(templateFileId);
  var folder = DriveApp.getFolderById(folderId);
  var newFile = sourceFile.makeCopy(newFileName, folder);
  var newFileId = newFile.getId();
  var presentation = SlidesApp.openById(newFileId);
  return presentation;

}