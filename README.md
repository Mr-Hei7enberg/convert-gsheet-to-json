# convert-gsheet-to-json
Используется для преобразования массива данных с листа в json<br>
Пример использования:<br>
  const ss = SpreadsheetApp.openById(ssId);
  const sh = ss.getSheetByName(sheetName);
  const data = sh.getRange(1, 1, sh.getLastRow(), sh.getLastColumn()).getValues().toJson();
