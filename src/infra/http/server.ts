import 'reflect-metadata';
import 'dotenv/config';

import { appDataSource } from '@database/data-source';
import { app } from './app';
import { swaggerServe, swaggerUi } from './doc';

app.use('/api-docs', swaggerServe, swaggerUi);
const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await appDataSource.initialize();
    app.listen(PORT, () => console.log(`🚀 Server is running http://localhost:${PORT}`));
  } catch (error) {
    console.log('Error: ', error);
  }
})();
