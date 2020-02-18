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

export class ReplicatorsDTO {
    'replicator': string;
    'start': Array<number>;
    'end': Array<number>;
    'activeFilesWithoutDeposit': Array<object>;
    'inactiveFilesWithoutDeposit': Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "replicator",
            "baseName": "replicator",
            "type": "string"
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "Array<number>"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "Array<number>"
        },
        {
            "name": "activeFilesWithoutDeposit",
            "baseName": "activeFilesWithoutDeposit",
            "type": "Array<object>"
        },
        {
            "name": "inactiveFilesWithoutDeposit",
            "baseName": "inactiveFilesWithoutDeposit",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return ReplicatorsDTO.attributeTypeMap;
    }
}

