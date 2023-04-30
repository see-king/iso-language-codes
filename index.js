import codes from "./iso-language-codes.json";

class IsoLanguages {

    /**
     * Returns the lis of languages with available ISO639-1 (2-letter) code
     * @returns 
     */
    static async get2LetterCodesList(){
        return codes.filter( l => l.iso639_1 && l.iso639_1 !== "" )
    }


    /**
     * Returns single language by ISO639-1 (2-letter) code
     * @param {*} iso639_1 
     * @returns 
     */
    static async getLanguageBy2LetterCode( iso639_1 ){
        return codes.find( l => l.iso639_2 === iso639_1 );
    }

    /**
     * Returns single language by ISO639-2 (3-letter) code
     * @param {*} iso639_2 
     * @returns 
     */
    static async getLanguageBy3LetterCode( iso639_2 ){
        return codes.find( l => Array.isArray(l.iso639_1) && l.iso639_1.includes(iso639_2) );
    }


}

export default IsoLanguages;