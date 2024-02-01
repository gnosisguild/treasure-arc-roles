import { Permission } from "zodiac-roles-sdk";
import { allow as allowKit } from "zodiac-roles-sdk/kit";

const allow = allowKit.arbitrumOne;

export const permissions = [
  allow.coreGovernor.castVote(),
  allow.coreGovernor.castVoteWithReason(),
  allow.coreGovernor.castVoteWithReasonAndParams(),

  allow.treasuryGovernor.castVote(),
  allow.treasuryGovernor.castVoteWithReason(),
  allow.treasuryGovernor.castVoteWithReasonAndParams(),
] satisfies Permission[];
