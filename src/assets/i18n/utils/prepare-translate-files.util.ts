import * as fs from 'fs';
import * as path from 'path';

import { allLanguages } from '../languages/languages';

const prepareTranslateFilesUtil = () => {
  const e = Object.entries(allLanguages);

  e.forEach(([key, lang]) => {
    fs.writeFile(
      path.join(__dirname, '..', `${key}.json`),
      JSON.stringify(lang, null, 2),
      {
        encoding: 'utf-8',
        flag: 'w',
      },
      () => {}
    );
  });
};

prepareTranslateFilesUtil();
