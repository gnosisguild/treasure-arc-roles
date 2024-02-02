import { Permission, c } from "zodiac-roles-sdk";
import { allow as allowKit } from "zodiac-roles-sdk/kit";

const allow = allowKit.arbitrumOne;

const snapshotVoteParamConstraints = {
  from: c.avatar, // must sign in the name of the mod's avatar, i.e., Treasure DAO multisig (0x0eB5B03c0303f2F47cD81d7BE4275AF8Ed347576)
  space: "arbitrumfoundation.eth",
  app: "snapshot",
};

export const permissions = [
  allow.coreGovernor.castVote(),
  allow.coreGovernor.castVoteWithReason(),
  allow.coreGovernor.castVoteWithReasonAndParams(),

  allow.treasuryGovernor.castVote(),
  allow.treasuryGovernor.castVoteWithReason(),
  allow.treasuryGovernor.castVoteWithReasonAndParams(),

  allow.snapshotSigner.signSnapshotVote(snapshotVoteParamConstraints),
  allow.snapshotSigner.signSnapshotArrayVote(snapshotVoteParamConstraints),
  allow.snapshotSigner.signSnapshotStringVote(snapshotVoteParamConstraints),
] satisfies Permission[];
