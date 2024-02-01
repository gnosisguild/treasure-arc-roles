import { defineConfig } from "@dethcrypto/eth-sdk";

export default defineConfig({
  contracts: {
    arbitrumOne: {
      coreGovernor: "0xf07DeD9dC292157749B6Fd268E37DF6EA38395B9",
      treasuryGovernor: "0x789fC99093B09aD01C34DC7251D0C89ce743e5a4",
      //   snapshotSigner: "",
    },
  },
});
