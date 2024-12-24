import { defineField, defineType } from "sanity";
import { defineExperiment } from "./experiment";

export const heroExperimentType = defineExperiment({
    name: 'heroExperiment',
    title: 'Hero Experiment'},
    [
        defineField({
            type: 'string', 
            name: 'titleText',
            validation: rule => rule.required()
        }),
        defineField({
            type: 'string', 
            name: 'subtitleText',
            validation: rule => rule.required()
        }),
        defineField({
            type: 'number',
            name: 'weight',
            validation: rule => rule.required()
        })
    ]
)