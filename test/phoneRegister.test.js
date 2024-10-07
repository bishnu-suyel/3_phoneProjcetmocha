import {expect} from 'chai';

import PhoneRegister from '../phoneRegister.js';

import {createRequire} from 'module';
const require = createRequire(import.meta.url);

const phones = require('../phones.json');

describe('test getTypes', function(){
    it('using default data', function(){
        const register=new PhoneRegister(phones);
        expect(register.getTypes()).to.deep.equal(['home', 'work', 'mobile']);
    });
});

