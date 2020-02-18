/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class DriveFileSystemAddActionDTO {
    'fileHash': string;
    'fileSize': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileHash",
            "baseName": "fileHash",
            "type": "string"
        },
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return DriveFileSystemAddActionDTO.attributeTypeMap;
    }
}

