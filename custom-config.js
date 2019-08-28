'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
            'firstLoad-gatherer'
        ]
    }],
    audits: [
        'card-audit',
        'firstLoad-audit'
    ],
    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            audits: [
                {id: 'card-audit', weight: 1},
                {id: 'firstLoad-audit', weight: 2}
            ]
        }
    }
};
