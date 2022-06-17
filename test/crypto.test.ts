import {md5} from "../src/crypto"

test('md5 test', () => {
  let s = md5("000");
  console.log(s)
  expect(s).toEqual("c6f057b86584942e415435ffb1fa93d4")
});
