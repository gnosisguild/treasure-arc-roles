import { Permission, c } from "zodiac-roles-sdk";
import { allow as allowKit } from "zodiac-roles-sdk/kit";

const allow = allowKit.arbitrumOne;

const snapshotVoteConstraints = {
  from: c.avatar, // must sign in the name of the mod's avatar, i.e., Treasure DAO multisig (0x0eB5B03c0303f2F47cD81d7BE4275AF8Ed347576)
  space: "arbitrumfoundation.eth",
  app: "snapshot",
};
const snapshotDomainConstraints = {
  name: "snapshot",
};

export const permissions = [
  allow.coreGovernor.castVote(),
  allow.coreGovernor.castVoteWithReason(),
  allow.coreGovernor.castVoteWithReasonAndParams(),

  allow.treasuryGovernor.castVote(),
  allow.treasuryGovernor.castVoteWithReason(),
  allow.treasuryGovernor.castVoteWithReasonAndParams(),

  allow.securityCouncilElectionGovernor.castVote(),
  allow.securityCouncilElectionGovernor.castVoteWithReason(),
  allow.securityCouncilElectionGovernor.castVoteWithReasonAndParams(),

  allow.snapshotSigner.signSnapshotVote(
    snapshotVoteConstraints,
    snapshotDomainConstraints,
    { delegatecall: true }
  ),
  allow.snapshotSigner.signSnapshotArrayVote(
    snapshotVoteConstraints,
    snapshotDomainConstraints,
    { delegatecall: true }
  ),
  allow.snapshotSigner.signSnapshotStringVote(
    snapshotVoteConstraints,
    snapshotDomainConstraints,
    { delegatecall: true }
  ),
] satisfies Permission[];
