const IsoLanguages = require("..");
const assert = require("assert");


describe( "Test IsoLanguages class", () => {
    const twoLetterCodesCorrect = ["en", "de", "fr", "ru"];
    const  twoLetterCodesIncorrect = ["", null, "asd", 123, "\n", {}];
    
    const threeLetterCodesCorrect = ["eng", "gre", "ell", "fin"];
    const threeLetterCodesIncorrect = ["", null, "asd", 123, "\n", {}];

    it("should fetch a non-empty array of objects (languages)", () => {
        const langs = IsoLanguages.get2LetterCodesList();        
        assert( Array.isArray(langs) && langs.length >0, "Is not an array or is an empty array!" );
    })

    
    twoLetterCodesCorrect.forEach( async code => {
        it( `fetching a language object from 2-letters code '${code}'`, () => {
            const c = IsoLanguages.getLanguageBy2LetterCode(code);
            assert( typeof c ==="object", `Not an object received for language ${code}` )
        })
    })

    twoLetterCodesIncorrect.forEach( async code => {
        it( `fetching a language object from incorrect 2-letters code '${code}', should return undefined`, () => {
            const c = IsoLanguages.getLanguageBy2LetterCode(code);
            assert( c === undefined, `Undefined value not returned for language ${code}` )
        })
    })

    threeLetterCodesCorrect.forEach( async code => {
        it( `fetching a language object from 3-letters code '${code}'`, () => {
            const c = IsoLanguages.getLanguageBy3LetterCode(code);
            assert( typeof c ==="object", `Not an object received for language ${code}` )
        })
    })

    threeLetterCodesIncorrect.forEach( async code => {
        it( `fetching a language object from incorrect 3-letters code '${code}', should return undefined`, () => {
            const c = IsoLanguages.getLanguageBy3LetterCode(code);
            assert( c === undefined, `Undefined value not returned for language ${code}` )
        })
    })

    

})

