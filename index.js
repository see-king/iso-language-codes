const codes = require("./iso-language-codes.json");

/**
 * Basic class to retrieve info from iso-language-codes.json
 */
class IsoLanguages {

    /**
     * Returns the complete list of languages
     * @returns 
     */
    static  getAll(){ return codes}

    /**
     * Returns the lis of languages with available ISO639-1 (2-letter) code
     * @returns 
     */
    static  get2LetterCodesList(){
        return codes.filter( l => l.iso639_1 && l.iso639_1 !== "" )
    }


    /**
     * Returns single language by ISO639-1 (2-letters) code
     * @param {string} iso639_1 2-letters code
     * @returns {object|undefined}
     */
    static  getLanguageBy2LetterCode( iso639_1 ){
        if( !iso639_1 ) return undefined;
        return codes.find( l => l.iso639_1 === iso639_1 );
    }

    /**
     * Returns single language by ISO639-2 (3-letters) code
     * @param {string} iso639_2 3-letters code
     * @returns {object|undefined}
     */
    static  getLanguageBy3LetterCode( iso639_2 ){
        return codes.find( l => Array.isArray(l.iso639_2) && l.iso639_2.includes(iso639_2) );
    }


}

module.exports = IsoLanguages;