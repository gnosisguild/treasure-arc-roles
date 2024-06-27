import { defineConfig } from "@dethcrypto/eth-sdk";

export default defineConfig({
  contracts: {
    arbitrumOne: {
      coreGovernor: "0xf07DeD9dC292157749B6Fd268E37DF6EA38395B9",
      treasuryGovernor: "0x789fC99093B09aD01C34DC7251D0C89ce743e5a4",
      securityCouncilElectionGovernor:
        "0x467923b9ae90bdb36ba88eca11604d45f13b712c",
      snapshotSigner: "0xa58Cf66d0f14AEFb2389c6998f6ad219dd4885c1",
    },
  },
});
