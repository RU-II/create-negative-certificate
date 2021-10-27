function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A:A').activate();
  var conditionalFormatRules = spreadsheet.getActiveSheet().getConditionalFormatRules();
  conditionalFormatRules.push(SpreadsheetApp.newConditionalFormatRule()
  .setRanges([spreadsheet.getRange('A1:A989')])
  .whenCellNotEmpty()
  .setBackground('#B7E1CD')
  .build());
  spreadsheet.getActiveSheet().setConditionalFormatRules(conditionalFormatRules);
  conditionalFormatRules = spreadsheet.getActiveSheet().getConditionalFormatRules();
  conditionalFormatRules.splice(conditionalFormatRules.length - 1, 1, SpreadsheetApp.newConditionalFormatRule()
  .setRanges([spreadsheet.getRange('A1:A989')])
  .whenFormulaSatisfied('=countifs(N1,"*海外渡航用*",AL1,"")+countifs(N1,"*海外渡航用*",AM1,"")+countifs(N1,"*海外渡航用*",AN1,"")+countifs(N1,"*海外渡航用*",AO1,"")')
  .setBackground('#B7E1CD')
  .build());
  spreadsheet.getActiveSheet().setConditionalFormatRules(conditionalFormatRules);
  conditionalFormatRules = spreadsheet.getActiveSheet().getConditionalFormatRules();
  conditionalFormatRules.splice(conditionalFormatRules.length - 1, 1, SpreadsheetApp.newConditionalFormatRule()
  .setRanges([spreadsheet.getRange('A1:A989')])
  .whenFormulaSatisfied('=countifs(N1,"*海外渡航用*",AL1,"")+countifs(N1,"*海外渡航用*",AM1,"")+countifs(N1,"*海外渡航用*",AN1,"")+countifs(N1,"*海外渡航用*",AO1,"")')
  .setBackground('#F4CCCC')
  .build());
  spreadsheet.getActiveSheet().setConditionalFormatRules(conditionalFormatRules);
};