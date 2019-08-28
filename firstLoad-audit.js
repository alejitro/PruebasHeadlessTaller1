'use strict';

const Audit = require('lighthouse').Audit;

const MAX_RESPONSE_TIME = 3000;

class APILoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'firstLoad-audit',
            description: 'Get API response time',
            failureDescription: 'ratp API response is very slow',
            helpText: 'Used to measure time from the request to Api and its response',

            requiredArtifacts: ['TimeToAPI']
        };
    }

    static audit(artifacts) {
        const responseTime = artifacts.TimeToAPI;

        const belowThreshold = responseTime <= MAX_RESPONSE_TIME;

        return {
            rawValue: responseTime,
            score: belowThreshold
        };
    }
}

module.exports = APILoadAudit;
