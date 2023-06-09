import { useNewFormat } from "./useNewFormat";

describe('useNewForm test', () => {
    const number = "3122079227";
    test('Should return the expected value', () => {
        const {newFrom} = useNewFormat(number);
        expect(newFrom).toEqual('( 312 )  207  -  9227');
    });

    
});