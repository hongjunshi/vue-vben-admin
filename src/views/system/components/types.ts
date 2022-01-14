export interface OrganizationTreeActionType {
  reload: () => void;
  expandAll: (expandAll: boolean) => void;
}

export enum OrganizationTreeType {
  ORGANIZATION,
  DEPARTMENT,
  ORGANIZATION_AND_DEPARTMENT,
}

export enum OrganizationNodeType {
  ORGANIZATION,
  DEPARTMENT,
}
export type OrganizationNode = {
  organizationId: string;
  departmentId: string;
};
export type OrganizationSelectedNode = {
  type: OrganizationNodeType;
  node: OrganizationNode;
  key: string;
  keys: string[];
};
