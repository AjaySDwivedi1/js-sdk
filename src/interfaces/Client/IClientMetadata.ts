import { GetMetadataResponse } from "../../types/metadata/GetMetadataResponse";

export default interface IClientMetadata {
  get(): Promise<GetMetadataResponse>;
  set(key: string, value: string): Promise<boolean>;
}