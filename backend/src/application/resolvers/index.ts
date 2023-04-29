import { merge } from 'lodash';

import { dataParserResolver } from './data-parser.resolver';

const resolvers = merge(dataParserResolver);

export { resolvers };
