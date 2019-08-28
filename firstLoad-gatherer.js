'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToAPI extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.firstLoadRequest')
            .then(firstLoadRequest => {
                if (!firstLoadRequest) {

                    throw new Error('Unable to find request load metrics in page');
                }
                return firstLoadRequest;
            });
    }
}

module.exports = TimeToAPI;
