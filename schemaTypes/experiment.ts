import { defineField, defineType, FieldDefinition } from "sanity";

export function defineExperiment(params: {
    name: string,
    title: string,
}, armSchema: FieldDefinition[]) {
    return defineType({
        ...params,
        type: "document",
        fields: [
            defineField({
                name: 'id',
                type: 'string',
                validation: rule => rule.required()
            }),
            defineField({
                name: 'startDate',
                type: 'datetime',
                initialValue: () => (new Date()).toISOString(),
                validation: rule => rule.min(rule.valueOfField('_createdAt')).warning('Start date is in the past'),
            }),
            defineField({
                name: 'endDate',
                type: 'datetime',
                validation: rule => rule.min(rule.valueOfField('startDate')).error('End date must be after start date'),
            }),
            defineField({
                name: 'arms',
                type: 'array',
                of: [
                    defineField({
                        type: 'object',
                        name: 'arm',
                        fields: [
                            defineField({
                                type: 'string',
                                name: 'id',
                                validation: rule => rule.required()
                            }),
                            ...armSchema,
                        ]
                    }),
                ],
                validation: rule => rule.min(2).warning('An experiment should have at least 2 arms')
            })
        ]
    })
}