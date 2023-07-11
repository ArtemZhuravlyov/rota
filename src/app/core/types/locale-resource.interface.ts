export interface LocaleResourceResponse {
  localeStringResources: LocaleResource[];
  totalCount: number;
}

export interface LocaleResource {
  id: string;
  languageId: string;
  resourceName: string;
  resourceValue: string;
}
