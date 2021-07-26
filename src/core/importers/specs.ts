import SwaggerParser from '@apidevtools/swagger-parser';
import { resolve } from 'upath';
import { NormalizedOptions } from '../../types';
import { WriteSpecsProps } from '../../types/writers';
import { isUrl } from '../../utils/url';
import { importOpenApi } from './openApi';

const resolveSpecs = async (
  path: string,
  parserOptions: SwaggerParser.Options,
  isUrl: boolean,
) => {
  const data = (await SwaggerParser.resolve(path, parserOptions)).values();

  if (isUrl) {
    return data;
  }

  // normalizing slashes after SwaggerParser
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [resolve(key), value]),
  );
};

export const importSpecs = async (
  workspace: string,
  options: NormalizedOptions,
): Promise<WriteSpecsProps> => {
  const { input, output } = options;

  const isPathUrl = isUrl(input.target);
  const path = isPathUrl ? input.target : resolve(workspace, input.target);

  const data = await resolveSpecs(path, input.parserOptions, isPathUrl);

  return importOpenApi({
    data,
    input,
    output,
    path,
    workspace,
  });
};
