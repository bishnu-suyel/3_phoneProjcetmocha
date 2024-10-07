import { expect } from "chai";

import PhoneRegister from "../phoneRegister.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const phones = require("../phones.json");

describe("test getTypes", function () {
  it("using default data", function () {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).to.deep.equal(["home", "work", "mobile"]);
  });

  it("empty register", function () {
    const register = new PhoneRegister([]);
    expect(register.getTypes()).to.deep.equal([]);
  });
  it("empty register v2", function () {
    const register = new PhoneRegister([]);
    expect(register.getTypes()).to.be.empty;
  });
});

describe("Testing hasNumber", function () {
  const register = new PhoneRegister(phones);

  it('test number "0409812345"', function () {
    expect(register.hasNumber("0409812345")).to.be.true;
  });

  it("test number 0000", function () {
    expect(register.hasNumber("0000")).to.be.false;
  });
});

describe("Test getName()", function () {
  const register = new PhoneRegister(phones);
  it('test number "12345678"', function () {
    const expectedValue = { firstname: "Leila", lastname: "Hökki" };
    expect(register.getName("12345678")).to.deep.equal(expectedValue);
  });
  it('test number "12345678" V2', function () {
    expect(register.getName("12345678")).to.deep.equal({
      firstname: "Leila",
      lastname: "Hökki",
    });
  });
  
  it('test number "0000"', function(){
    expect(register.getName("0000")).to.be.null;
  })
});
