import { DOMAIN_NAME_COLLECTIONS_PARSERS } from "./CustomAttributeCollections";
import { ITraitParser } from "./TraitParsers";
import { Attribute, Metadata } from "./types";

/**
 * Use the class as a static method to parse attributes based on the project_id configuration
 */
export class AttributeParser {
  /**
   * Adds additional attributes to the metadata based on the project_id configuration
   * 
   * @param projectId 
   * @param metadata: json metadata from URI 
   * @param nameOverride: if metadata account has a different name than the one in the URI and you want to use that instead
   * @returns Attribute array with additional attributes depending on project_id configuration
   */
  static parse(projectId: string, metadata: Metadata, nameOverride?: string): Attribute[] {
    let parsers: ITraitParser[] = [];

    if (DOMAIN_NAME_COLLECTIONS_PARSERS.has(projectId)) {
      parsers = DOMAIN_NAME_COLLECTIONS_PARSERS.get(projectId);
    }

    let attributes = metadata.attributes;
    for (let parser of parsers) {
      attributes = parser.parse(metadata, nameOverride);
    }

    return attributes;
  }
}