import { type SchemaTypeDefinition } from 'sanity'
import heroExperimentType from './heroExperimentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroExperimentType],
}
