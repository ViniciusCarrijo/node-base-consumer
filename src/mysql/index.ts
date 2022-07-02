import 'reflect-metadata';
import { DataSource } from 'typeorm';
import configs from '../configs';

const AppDataSource = new DataSource({
  ...(configs.mysql as any),
  synchronize: true,
  entities: [],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('MYSQL conectado com sucesso :)');
  })
  .catch((error) => {
    console.error('Falha ao conectar ao MYSQL');
    console.error(error);
  });

export default AppDataSource;
