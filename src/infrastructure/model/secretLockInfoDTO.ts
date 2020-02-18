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

export class SecretLockInfoDTO {
    'account': string;
    'accountAddress': string;
    'mosaicId': Array<number>;
    'amount': Array<number>;
    'height': Array<number>;
    'status': number;
    'hashAlgorithm': number;
    'secret': string;
    'recipient': string;
    'compositeHash': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "accountAddress",
            "baseName": "accountAddress",
            "type": "string"
        },
        {
            "name": "mosaicId",
            "baseName": "mosaicId",
            "type": "Array<number>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Array<number>"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "Array<number>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "hashAlgorithm",
            "baseName": "hashAlgorithm",
            "type": "number"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "compositeHash",
            "baseName": "compositeHash",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecretLockInfoDTO.attributeTypeMap;
    }
}

