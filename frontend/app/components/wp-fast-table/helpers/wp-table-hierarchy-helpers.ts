import {WorkPackageResourceInterface} from '../../api/api-v3/hal-resources/work-package-resource.service';
import {WorkPackageTable} from '../wp-fast-table';
/**
 * Returns the collapsed group class for the given ancestor id
 */
export function collapsedGroupClass(ancestorId:string):string {
  return `__collapsed-group-${ancestorId}`;
}

export function hierarchyGroupClass(ancestorId:string):string {
  return `__hierarchy-group-${ancestorId}`;
}

export function hierarchyRootClass(ancestorId:string):string {
  return `__hierarchy-root-${ancestorId}`;
}

export function ancestorClassIdentifier(ancestorId:string) {
  return `wp-ancestor-row-${ancestorId}`;
}

/**
 * Returns whether any of the children of this work package
 * are visible in the table results.
 */
export function hasChildrenInTable(workPackage:WorkPackageResourceInterface, table:WorkPackageTable) {
  if (workPackage.isLeaf) {
    return false; // Work Package has no children at all
  }

  // If any visible children in the table
  return !!_.find(workPackage.children, (child:WorkPackageResourceInterface) => {
    const childId = child.idFromLink!;
    return table.rowIndex[childId] !== undefined;
  });
}
