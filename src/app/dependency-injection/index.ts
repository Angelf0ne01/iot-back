import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import { UserRegister } from './users';

const container = new ContainerBuilder();
const env = process.env.NODE_ENV || 'dev';
const loader = new YamlFileLoader(container);


//UserRegister(container)

loader.load(`${__dirname}/application_dev.yaml`);

export default container;
