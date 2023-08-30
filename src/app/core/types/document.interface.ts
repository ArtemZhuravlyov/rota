export interface DocumentCreate {
  id: string | null;
  name: string;
  description: string;
  isShared: boolean;
  managerId: string;
}

export interface Pagination {
  pageSize: number;
  pageIndex: number;
}
export interface DocumentsList {
  folderId: string;
  documentName?: string;
  isActive?: boolean;
}

export interface FoldersList {
  name?: string;
  description?: string;
  manager?: string;
  isActive?: boolean;
}

export interface Document {
  documentCategoryId: string;
  extension: string;
  id: string;
  name: string;
  nameExt?: string;
  sizeInUnit: string;
  users: [];
}
