import {
  Permission,
  PermissionSet,
  checkIntegrity,
  processPermissions,
} from "zodiac-roles-sdk";
import { CHAIN_PREFIX, ROLES_MOD, ROLE_KEY, ZODIAC_ROLES_APP } from "./config";
import { permissions } from "./permissions";

/**
 * Posts permission to Zodiac Roles app for storage
 * @returns The hash under which permissions have been stored
 */
const postPermissions = async (
  permissions: (Permission | PermissionSet | Promise<PermissionSet>)[]
) => {
  const awaitedPermissions = await Promise.all(permissions);
  const { targets, annotations } = processPermissions(awaitedPermissions);
  checkIntegrity(targets);

  const res = await fetch(`${ZODIAC_ROLES_APP}/api/permissions`, {
    method: "POST",
    body: JSON.stringify({ targets, annotations }),
  });
  const json = await res.json();
  const { hash } = (json || {}) as any;
  if (!hash) {
    console.error("Unexpected response:", json);
    throw new Error("Failed to post permissions");
  }
  return hash;
};

(async () => {
  const hash = await postPermissions(permissions);
  const diffUrl = `${ZODIAC_ROLES_APP}/${CHAIN_PREFIX}:${ROLES_MOD}/roles/${ROLE_KEY}/diff/${hash}`;

  console.log(`Permission diff page: ${diffUrl}`);
})();
