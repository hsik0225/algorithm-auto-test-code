class AlgorithmSite {
    constructor(link) {
        this.link = link;
    }

    generateTestCode() {
        throw new Error('generateTestCode() must be implment.');
    }
}

export default AlgorithmSite;
