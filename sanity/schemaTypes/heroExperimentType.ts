import { defineField, defineType } from "sanity";

export default defineType({
    type: 'document',
    name: 'heroExperiment',
    title: 'Hero Experiment',
    fields: [
        defineField({
            type: 'string',
            name: 'variantId',
            validation: rule => rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'titleText',
        }),
        defineField({
            type: 'string', 
            name: 'subtitleText',
        }),
        defineField({
            type: 'number',
            name: 'weight',
            description: 'Variant weight, as a portion of the total weight across all variants',
            initialValue: 1,
            validation: rule => rule.required().positive().integer(),
        }),
    ],
});