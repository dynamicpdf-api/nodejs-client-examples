import fs from 'fs';

// This JSON config file will override the "defaults" in TestParams class.
const testConfigFile = './test-config.json';

export class TestParams {
    #params = null;
    #defaults = {
        ApiKey: "[Your API key goes here]",
        BaseUrl: "https://api.dynamicpdf.com/v1.0/",
        AuthTLS: true,
        Logging: false
    };

    constructor() {
        if (this.#params == null) {
            try {
                this.#params = JSON.parse(fs.readFileSync(testConfigFile, 'utf8'));
            } catch(error) {
                this.#params = this.#defaults;
            }
        }
    }

    get ApiKey() { return this.#params.ApiKey; }
    get BaseUrl() { return this.#params.BaseUrl; }
    get AuthTLS() { return this.#params.AuthTLS; }
    get Logging() { return this.#params.Logging; }
};
